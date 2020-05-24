# importing required libs
import pickle, json
from sklearn.preprocessing import normalize
import pandas as pd
from Guard_Your_Heart.models import Assessment

# creating class
class Utill:

    # Activity data
    def get_activity_data(activity_data):
        print(activity_data)
        print(type(activity_data))

    # CVD risk prediction
    def predict_data(data_sample):
        
        # load model
        model = pickle.load(open('Guard_Your_Heart/logit_model.pkl', 'rb'))

        # Making data frame for the model to give prediction
        cols = list(data_sample.keys())
        values = list(data_sample.values())
        df = pd.DataFrame(columns=cols)
        df = df.append(data_sample, ignore_index=True)
        df_n = normalize(df)
        risk_res = round(list(model.predict_proba(df_n))[0][1]*100, 2)

        return risk_res

    # data for Calculating CVD risk 
    def get_data(request):
        age = int(request.form.get('age'))
        gender = int(request.form.get('gender'))
        height = int(request.form.get('height'))
        weight = float(request.form.get('weight'))
        
        if int(request.form.get("bp")) == 1:
            ap_hi = float(request.form.get('systolicbp'))
            ap_lo = float(request.form.get('diastolicbp'))
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
            if float(request.form.get('bloodsugar')) < 6.00:
                gluc = 1
            elif float(request.form.get('bloodsugar')) < 11.00:
                gluc = 2
            else:
                gluc = 3
        else:
            gluc = 1

        smoke = int(request.form.get('smoke'))
        alco = int(request.form.get('alcohol'))
        acti = int(request.form.get('activity'))
        bmi = weight/(height/100)**2

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
        da = Assessment(
            age=data_sample['age'],
            gender=data_sample['gender'],
            height=data_sample['height'],
            weight=data_sample['weight'],
            ap_hi=data_sample['ap_hi'],
            ap_lo=data_sample['ap_lo'],
            cholestrol=data_sample['cholestrol'],
            gluc=data_sample['gluc'],
            smoke=data_sample['smoke'],
            alco=data_sample['alco'],
            active=data_sample['active'],
            bmi=data_sample['bmi']
        )
        print(Assessment.addData(da))
        return data_sample

    # MET Data fuction 
    def metData():
        df = pd.read_csv('Guard_Your_Heart/met2.csv')

        list_of_headings = []
        for heading in df.heading.unique():
            list_of_activities = df[df.heading == heading].to_dict('records')
            heading_dict = {"heading": heading, "activities": list_of_activities}
            list_of_headings.append(heading_dict)
        # print(list_of_headings)
        return list_of_headings

    # Filtering the MET data
    def filterData(request):
        filterData = request.form.get("butId")
        # print(filterData)
        df = pd.read_csv('Guard_Your_Heart/met2.csv')
        list_of_headings = []
        
        for heading in df.heading.unique():
            list_of_activities = df[df.heading == heading].to_dict('records')
            # print(list_of_activities)
            filterActivity = []
            if(filterData == "myButton1"):
                for activity in list_of_activities:
                    # print(activity['intensity'])
                    if (activity['intensity'] == 1):
                        filterActivity.append(activity)
            elif(filterData == "myButton2"):
                for activity in list_of_activities:
                    if (activity['intensity'] == 2):
                        filterActivity.append(activity)
            elif(filterData == "myButton3"):
                for activity in list_of_activities:
                    if (activity['intensity'] == 3):
                        filterActivity.append(activity)

            heading_dict = {"heading": heading, "activities": filterActivity}
            list_of_headings.append(heading_dict)
        # print(list_of_headings)
        return list_of_headings
   
   # Fuction for getting activities data from the users.
    def get_data_option(request):
        activities = request.form.getlist('activities')
        minutes = request.form.getlist('minutes')
        daysperweek = request.form.getlist('days')
        intensity = ""
        df = pd.read_csv('Guard_Your_Heart/met2.csv')

        print(activities, minutes, daysperweek)

        data_list = []
        for i in range(len(activities)):
            intensity_int = df[df['activity']==activities[i]]['intensity'].item()
            
            if(intensity_int == 1):
                intensity = "Light"      
            elif(intensity_int == 2):
                intensity = "Moderate"
            elif(intensity_int == 3):
                intensity = "Vigorous"

            data_temp = {
                'heading': activities[i],
                'minutes' : minutes[i],
                'daysperweek' : daysperweek[i],
                'intensity' : intensity
            }
            data_list.append(data_temp)
        return data_list

    # Getting Diet Data
    def getDietData():
        df = pd.read_csv('Guard_Your_Heart/food.csv')
        return df
