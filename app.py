from flask import Flask, render_template, url_for, jsonify, request
import pickle
from sklearn.preprocessing import normalize
import requests, json
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
    bmi  = db.Column(db.Float, nullable=False)

    def __repr__(self):
        return '<%r>' % self.id


# #Sample Data
# data_sample = {
#     'age': 60,
#     'gender': 1,
#     'height': 168,
#     'weight': 62,
#     'ap_hi': 110,
#     'ap_lo': 80,
#     'cholestrol': 2,
#     'gluc': 1,
#     'smoke': 1,
#     'alco': 0,
#     'active': 1,
#     'bmi': 18.45
# }
# data = json.dumps(data_sample)
# url = 'http://127.0.0.1:5000/predict' 
# send_request = requests.post(url,data)
# print(send_request)

# print(send_request.json())

# load model
model = pickle.load(open('logit_model.pkl','rb'))

@app.route('/')
@app.route('/home')
def index():
    return render_template("index.html")

@app.route('/assessment')
def assessment():
    return render_template("assessment.html")

@app.route('/results', methods=['POST'])
def results():
    if request.method == 'POST':
        # Better way to access data than request.form['age']
        # to avoid getting an exception if null value is sent.
        # print(request.form.get('age')) 
        return render_template("results.html")
    else:
        return "Hello"

@app.route("/predict", methods=['POST'])
def predict():
    # get data
    data = request.get_json(force=True)

    # convert data into dataframe
    data.update((x, [y]) for x, y in data.items())
    data_df = pd.DataFrame.from_dict(data)

    # predictions
    data_df = normalize(data_df)
    result = list(model.predict_proba(data_df))[0][1]
    print(result)

    # send back to browser
    output = {'results': result}
    # print(int(result))
    # return data
    return jsonify(results=output)



if __name__ == "__main__":
    app.run(debug=True)