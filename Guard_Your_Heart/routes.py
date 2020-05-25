# Importing the required libraries. 
from flask import render_template, url_for, request, session, redirect
from Guard_Your_Heart import app
from Guard_Your_Heart.utils import Utill 
import json
import random, string


# Root Route 
@app.route('/')
def initlogin():
    return render_template("initlogin.html")

# Initial login-check Route
@app.route('/check-login',methods=['POST'])
def checkLogin():
    if request.method == 'POST':
        session.permanent = True
        session['user'] = ''.join(random.choice(string.ascii_lowercase) for i in range(8)) # random 8 digit string for session id
        if request.form.get("password") == "teamb18":
            return redirect(url_for("index"))
    else:
        if "user" in session:
            return redirect(url_for("index"))

    return render_template('initlogin.html')

# Home Route
@app.route('/home')
def index():
    if 'user' in session:
        return render_template("index.html", route="index")
    else:
        return redirect(url_for('initlogin'))

# Assessment Route
@app.route('/assessment')
def assessment():
    if 'user' in session:
        list_of_headings = Utill.metData() # Getting MET data from file. 
        return render_template("assessment.html", activity_data=list_of_headings, route="assessment")
    else:
        return redirect(url_for('initlogin'))

# Results Route        
@app.route('/results', methods=['POST','GET'])
def results():
    if 'user' in session:
        if request.method == 'POST':
            data_sample = Utill.get_data(request) # Getting data into rquired format
            # data of the activities
            if data_sample['active'] != 0 :
                data_activity = Utill.get_data_option(request) 
            else:
                data_activity = []
            result = Utill.predict_data(data_sample) # Getting CVD risk
            # adding few data to data_sample and session to get data to other pages
            data_sample['res'] = result
            data_sample['indicator'] = [int(request.form.get("chol")),int(request.form.get("sugarradio"))]
            session['data'] = [data_sample,data_activity]
            session['indi'] = {'indicator':data_sample['indicator'],"cholestrol":data_sample['cholestrol'],"gluc":data_sample['gluc'],"bmi":data_sample['bmi'], 'bloodpressure':[data_sample['ap_hi'],data_sample['ap_lo']]}
            return render_template('results.html', data=data_sample, activity_entered=data_activity, route="result")
        else:
            if "data" in session:
                data_sample = session['data'][0]
                data_activity = session['data'][1]
                return render_template('results.html', data=data_sample, activity_entered=data_activity, route="result")
            else:
                return render_template('index.html', route="index")
    else:
        return redirect(url_for('initlogin'))

# Diet Route
@app.route('/diet')
def diet():
    if 'user' in session:
        data = session['indi']
        print(data)
        df = Utill.getDietData()
        if data['cholestrol'] <= 2:
            # Normal Cholesterol
            if data['gluc'] <= 2:
                # Normal Glucose
                # Get items for CVD only
                hdf = df[df['CVD'] == 2]
                dict1 = hdf.groupby('Sub_Category')['Name'].apply(list).to_dict()

                hdf = df[df['CVD'] == 1]
                dict2 = hdf.groupby('Sub_Category')['Name'].apply(list).to_dict()

            else:
                # High Glucose
                # Get items for High Sugar and CVD
                hdf = df[(df['CVD'] == 2) & (df['High_Sugar'] == 2)]
                dict1 = hdf.groupby('Sub_Category')['Name'].apply(list).to_dict()

                hdf = df[(df['CVD'] == 1) & (df['High_Sugar'] == 1)]
                dict2 = hdf.groupby('Sub_Category')['Name'].apply(list).to_dict()

        else:
            # High Cholesterol
            if data['gluc'] <= 2:
                # Normal Glucose
                # Get items for High Cholesterol and CVD
                hdf = df[(df['CVD'] == 2) & (df['High_Cholesterol'] == 2)]
                dict1 = hdf.groupby('Sub_Category')['Name'].apply(list).to_dict()

                hdf = df[(df['CVD'] == 1) & (df['High_Cholesterol'] == 1)]
                dict2 = hdf.groupby('Sub_Category')['Name'].apply(list).to_dict()

            else:
                # High Glucose
                # Get items for CVD, High Sugar and High Cholesterol
                hdf = df[(df['CVD'] == 2) & (df['High_Cholesterol'] == 2) & (df['High_Sugar'] == 2)]
                dict1 = hdf.groupby('Sub_Category')['Name'].apply(list).to_dict()

                hdf = df[(df['CVD'] == 1) & (df['High_Cholesterol'] == 1) & (df['High_Sugar'] == 1)]
                dict2 = hdf.groupby('Sub_Category')['Name'].apply(list).to_dict()

        return render_template("diet.html", route="diet", data=data, data1=dict1, data2=dict2)
    else:
        return redirect(url_for('initlogin'))

# Physical_Activity route    
@app.route('/PA',methods=['POST','GET'])
def PA():
    if 'user' in session:
        if "data" in session:
            data = session['data'][1]
            print(data)
            return render_template("PA.html", activity_entered=data, route="PA")
        else:
            return render_template('index.html', route="index")
    else:
        return redirect(url_for('initlogin'))
    
# Cardiovascular Route
@app.route('/cardiovasculardisease')
def cardiovasculardisease():
    if 'user' in session:
        return render_template("cardiovasculardisease.html", route="cardiovasculardisease")
    else:
        return redirect(url_for('initlogin'))

# Table Route
@app.route('/tableAjax',methods=['POST'])
def tableAjax():
    # data_sample = Utill.metData()
    data_sample = Utill.filterData(request)
    # print(data_sample)
    return json.dumps(data_sample)

# 404 Error Handler
@app.errorhandler(404)
def invalid_route(e):
    return render_template("404.html")

