from flask import render_template, url_for, request, session, redirect
from Guard_Your_Heart import app
from Guard_Your_Heart.utils import Utill 
import json
import random, string


@app.route('/')
def initlogin():
    return render_template("initlogin.html")

@app.route('/check-login',methods=['POST'])
def checkLogin():
    if request.method == 'POST':
        session.permanent = True
        session['user'] = ''.join(random.choice(string.ascii_lowercase) for i in range(8))
        if request.form.get("password") == "teamb18":
            return redirect(url_for("index"))
    else:
        if "user" in session:
            return redirect(url_for("index"))

    return render_template('initlogin.html')

@app.route('/home')
def index():
    if 'user' in session:
        return render_template("index.html", route="index")
    else:
        return redirect(url_for('initlogin'))

@app.route('/assessment')
def assessment():
    if 'user' in session:
        list_of_headings = Utill.metData()
        return render_template("assessment.html", activity_data=list_of_headings, route="assessment")
    else:
        return redirect(url_for('initlogin'))
        
# @app.route('/option')
# def option():
#     if 'user' in session:
#         list_of_headings = Utill.metData()
#         # print(list_of_headings)
#         return render_template("option.html", activity_data=list_of_headings, route="option")
#     else:
#         return redirect(url_for('initlogin'))

@app.route('/results', methods=['POST','GET'])
def results():
    if 'user' in session:
        if request.method == 'POST':
            data_sample = Utill.get_data(request)
            data_activity = Utill.get_data_option(request)
            result = Utill.predict_data(data_sample)
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

@app.route('/diet')
def diet():
    if 'user' in session:
        data = session['indi']
        print(data)
        return render_template("diet.html", route="diet", data = data)
    else:
        return redirect(url_for('initlogin'))
    
@app.route('/PA',methods=['POST','GET'])
def PA():
    if 'user' in session:
        if "data" in session:
            data = session['data'][1]
            return render_template("PA.html", activity_entered=data, route="PA")
        else:
            return render_template('index.html', route="index")
    else:
        return redirect(url_for('initlogin'))
    

@app.route('/cardiovasculardisease')
def cardiovasculardisease():
    if 'user' in session:
        return render_template("cardiovasculardisease.html", route="cardiovasculardisease")
    else:
        return redirect(url_for('initlogin'))

# @app.route('/test',methods=['POST'])
# def test():
#     if 'user' in session:
#         data_sample = Utill.get_data_option(request)
#         print(data_sample)
#         return render_template("test.html",activity_entered=data_sample)
#     else:
#         return redirect(url_for('initlogin'))

# @app.route('/test',methods=['POST'])
# def test():
#     data_activity = Utill.get_data_option(request)
# #         print(data_sample)
#     return render_template("test.html",activity_entered=data_activity)

@app.route('/tableAjax',methods=['POST'])
def tableAjax():
    # data_sample = Utill.metData()
    data_sample = Utill.filterData(request)
    # print(data_sample)
    return json.dumps(data_sample)