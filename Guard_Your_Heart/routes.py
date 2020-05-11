from flask import render_template, url_for, request
from Guard_Your_Heart import app
from Guard_Your_Heart.utils import Utill 


@app.route('/')
def initlogin():
    return render_template("initlogin.html")

@app.route('/home',methods=['POST'])
def index():
    if request.method == 'POST':
        if request.form.get("password") == "29958563":
            return render_template("index.html", route="index")
            
    return render_template('initlogin.html')


@app.route('/assessment')
def assessment():
    return render_template("assessment.html", route="assessment")


@app.route('/option')
def option():
    list_of_headings = Utill.metData()
    return render_template("option.html", activity_data=list_of_headings, route="option")


@app.route('/results', methods=['POST'])
def results():
    if request.method == 'POST':

        # Better way to access data than request.form['age']
        # to avoid getting an exception if null value is sent.
        # print(request.form.get('age'))
        data_sample = Utill.get_data(request)
        print(data_sample)
        # activity_data = data_sample.pop('activityname')
        # abc = get_activity_data(activity_data)
        result = Utill.predict_data(data_sample)
        print("\nChances of having CVD:", result)
        data_sample['res'] = result
        data_sample['indicator'] = [int(request.form.get("chol")),int(request.form.get("sugarradio"))]
        print(data_sample['indicator'][0])
        print(data_sample['indicator'][1])
        return render_template('results.html', data=data_sample, route="result")
    else:
        return render_template('home.html', route="index")

@app.route('/diet')
def diet():
    return render_template("diet.html", route="diet")
    
@app.route('/PA')
def PA():
    return render_template("PA.html", route="PA")
    
@app.route('/cardiovasculardisease')
def cardiovasculardisease():
    return render_template("cardiovasculardisease.html", route="cardiovasculardisease")