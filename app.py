from flask import Flask, render_template, url_for, jsonify, request
import pickle
from sklearn.preprocessing import normalize
import requests
import json
import pandas as pd
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
db = SQLAlchemy(app)


class data_assessment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    age = db.Column(db.Integer, nullable=False)
    gender = db.Column(db.Integer, nullable=False)
    height = db.Column(db.Integer, nullable=False)
    weight = db.Column(db.Float, nullable=False)
    ap_hi = db.Column(db.Integer, nullable=False)
    ap_lo = db.Column(db.Integer, nullable=False)
    cholestrol = db.Column(db.Integer, nullable=False)
    gluc = db.Column(db.Integer, nullable=False)
    smoke = db.Column(db.Integer, nullable=False)
    alco = db.Column(db.Integer, nullable=False)
    active = db.Column(db.Integer, nullable=False)
    bmi = db.Column(db.Float, nullable=False)

    def __repr__(self):
        return '<%r>' % self.id


# load model
model = pickle.load(open('logit_model.pkl', 'rb'))


@app.route('/')
@app.route('/home')
def index():
    return render_template("index.html")


@app.route('/assessment')
def assessment():
    return render_template("assessment.html")

@app.route('/option')
def option():
    df = pd.read_csv('met2.csv')
    """ sub_list = []
    head_list = []
    head_dict = {}
    k = df['heading'].iloc[0]

    for i in range(len(df)):
        temp_dict = {}
        if df['heading'].iloc[i] == k:
            temp_dict['activity'] = df['activities'].iloc[i]
            temp_dict['intensity'] = df['intensity'].iloc[i]
            temp_dict['met'] = df['met'].iloc[i]
            sub_list.append(temp_dict)
        else:
            head_dict = {}
            head_dict['heading'] = k
            head_dict['activities'] = sub_list
            head_list.append(head_dict)
            k = df['heading'].iloc[i]
            sub_list = []
            temp_dict['activity'] = df['activities'].iloc[i]
            temp_dict['intensity'] = df['intensity'].iloc[i]
            temp_dict['met'] = df['met'].iloc[i]
            sub_list.append(temp_dict) """
    
    list_of_headings = []
    for heading in df.heading.unique():
        list_of_activities = df[df.heading == heading].to_dict('records')
        heading_dict = { "heading": heading, "activities": list_of_activities}
        list_of_headings.append(heading_dict)

    return render_template("option.html", activity_data = list_of_headings)



@app.route('/results', methods=['POST'])
def results():
    if request.method == 'POST':

        # Better way to access data than request.form['age']
        # to avoid getting an exception if null value is sent.
        # print(request.form.get('age'))
        data_sample = get_data(request)
        print(data_sample)
        # activity_data = data_sample.pop('activityname')
        # abc = get_activity_data(activity_data)
        result = predict_data(data_sample)
        print("\nChances of having CVD:", result)
        data_sample['res'] = result
        return render_template('results.html', data=data_sample)
    else:
        return render_template('home.html')

def get_activity_data(activity_data):
    print(activity_data)
    print(type(activity_data))


def predict_data(data_sample):

    cols = list(data_sample.keys())
    values = list(data_sample.values())
    df = pd.DataFrame(columns=cols)
    df = df.append(data_sample, ignore_index=True)
    df_n = normalize(df)
    risk_res = round(list(model.predict_proba(df_n))[0][1]*100, 2)

    return risk_res


def get_data(request):
    age = int(request.form.get('age'))
    gender = int(request.form.get('gender'))
    height = int(request.form.get('height'))
    weight = float(request.form.get('weight'))
    ap_hi = int(request.form.get('systolicbp'))
    ap_lo = int(request.form.get('diastolicbp'))
    smoke = int(request.form.get('smoke'))
    alco = int(request.form.get('alcohol'))
    acti = int(request.form.get('activity'))
    if float(request.form.get('totalcholes')) < 5.2:
        chol = 1
    elif float(request.form.get('totalcholes')) < 6.2:
        chol = 2
    else:
        chol = 3

    if int(request.form.get('bloodsugar')) < 6:
        gluc = 1
    elif int(request.form.get('bloodsugar')) < 11:
        gluc = 2
    else:
        gluc = 3

    bmi = weight/(height/100)**2

    # activitytable = str(request.form.get('tabledata'))

    data_sample = {
        'age': age,
        'gender': gender,
        'height': height,
        'weight': weight,
        'ap_hi': ap_hi,
        'ap_lo': ap_lo,
        'cholestrol': chol,
        'gluc': gluc,
        'smoke': smoke,
        'alco': alco,
        'active': acti,
        'bmi': round(bmi,2)
        # 'activityname' : activitytable
    }
    return data_sample

@app.route('/diet')
def diet():
    return render_template("diet.html")
    
@app.route('/PA')
def PA():
    return render_template("PA.html")
    
@app.route('/cardiovasculardisease')
def cardiovasculardisease():
    return render_template("cardiovasculardisease.html")

if __name__ == "__main__":
    app.run(debug=True)
