import pickle
from sklearn.preprocessing import normalize
import pandas as pd

class Utill:

    def get_activity_data(activity_data):
        print(activity_data)
        print(type(activity_data))


    def predict_data(data_sample):
        
        # load model
        model = pickle.load(open('Guard_Your_Heart/logit_model.pkl', 'rb'))

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
        
        if int(request.form.get("bp")) == 1:
            ap_hi = int(request.form.get('systolicbp'))
            ap_lo = int(request.form.get('diastolicbp'))
        else:
            ap_hi = 120
            ap_lo = 80

        if int(request.form.get("chol")) == 1:
            if float(request.form.get('totalcholes')) < 5.2:
                chol = 1
            elif float(request.form.get('totalcholes')) < 6.2:
                chol = 2
            else:
                chol = 3
        else:
            chol = 1

        if int(request.form.get("sugarradio")) == 1:
            if int(request.form.get('bloodsugar')) < 6:
                gluc = 1
            elif int(request.form.get('bloodsugar')) < 11:
                gluc = 2
            else:
                gluc = 3
        else:
            gluc = 1

        smoke = int(request.form.get('smoke'))
        alco = int(request.form.get('alcohol'))
        acti = int(request.form.get('activity'))

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

    def metData():
        df = pd.read_csv('Guard_Your_Heart/met2.csv')

        list_of_headings = []
        for heading in df.heading.unique():
            list_of_activities = df[df.heading == heading].to_dict('records')
            heading_dict = {"heading": heading, "activities": list_of_activities}
            list_of_headings.append(heading_dict)
            
        return list_of_headings