import requests
from flask import Flask, render_template, request, jsonify, make_response
import pickle
import pandas as pd
from flask_cors import CORS,cross_origin
app = Flask(__name__, static_folder='../frontend/build')
CORS(app)

def predict(model,df):
    output=model.predict_proba(df)
    output=round(max(max(output)),3)
    output*=100
    output = str(output)+'%'
    return output

@app.route('/breast',methods=['POST','GET'])
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def breast():

    if request.method == 'POST': 
        dia = request.get_json()
        print(dia)
        model = pickle.load(open("Breast-Cancer.sav", "rb"))
        df = pd.DataFrame([pd.Series([dia["radius-mean"],dia["perimeter-mean"],dia["area-mean"],dia["concave-points-mean"],dia["area-se"],dia["radius-worst"],dia["perimeter-worst"],dia["area-worst"],dia["concavity-worst"],dia["concave-points-worst"]])])
        global output
        output=predict(model,df)
        print(dia)
        print(output)
        return output, 200
    
    if request.method == 'GET':
        return output,200
    
@app.route('/diabetes',methods=['POST','GET'])
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def diabetes():

    if request.method == 'POST': 
        dia = request.get_json()   
        model = pickle.load(open("diabetes_model.sav", "rb"))
        df = pd.DataFrame([pd.Series([dia["Pregnancies"],dia["Glucose"],dia["BloodPressure"],dia["SkinThickness"],dia["Insulin"],dia["BMI"],dia["DiabetesPedigreeFunction"],dia["Age"]])])
        global output
        output=predict(model,df)
        print(dia)
        print(output)
        return output, 200
    
    if request.method == 'GET':
        return output,200

@app.route('/cardio',methods=['POST','GET'])
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def cardio():

    if request.method == 'POST': 
        dia = request.get_json()

        print(dia)
        model = pickle.load(open("Cardiovascular_Disease_model.sav", "rb"))
        gender=dia["gender"]
        if gender=="M" or gender=="m":
            gender=1
        else:
            gender=2
        age=int(int(dia["age"])*365)
        df = pd.DataFrame([pd.Series([age,dia["height"],dia["weight"],dia["ap_lo"],dia["ap_hi"],dia["cholestrol"],gender,dia["gluc"],dia["smoke"],dia["alco"],dia["active"],dia["bmi"]])])
        global output
        output=predict(model,df)
        return output, 200

    if request.method == 'GET':
        return output,200

    
@app.route('/kidney',methods=['POST','GET'])
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def kidney():

    if request.method == 'POST': 
        dia = request.get_json()        
        model = pickle.load(open("Kidney-Disease.sav", "rb"))
        df = pd.DataFrame([pd.Series([dia["age"],dia["bp"],dia["sg"],dia["al"],dia["su"],dia["rbc"],dia["pc"],dia["pcc"],dia["ba"],dia["bgr"],dia["bu"],dia["sc"],dia["sod"],dia["pot"],dia["hemo"],dia["pcv"],dia["wc"],dia["rc"],dia["htn"],dia["dm"],dia["cad"],dia["appet"],dia["pe"],dia["ane"]])])
        global output
        output=predict(model,df)
        return output, 200

    if request.method == 'GET':
        return output,200


@app.route('/liver',methods=['POST','GET'])
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def liver():

    if request.method == 'POST': 
        dia = request.get_json()
        print(dia)
        model = pickle.load(open("Liver_disease.sav", "rb"))
        gender=dia["Gender"]
        if gender=="M" or gender=="m":
            gender=1
        else:
            gender=0
        df = pd.DataFrame([pd.Series([dia["Age"],gender,dia["Total_Bilirubin"],dia["Direct_Bilirubin"],dia["Alkaline_Phosphotase"],dia["Alamine_Aminotransferase"],dia["Aspartate_Aminotransferase"],dia["Total_Protiens"],dia["Albumin"],dia["Albumin_and_Globulin_Ratio"]])])
        global output
        output=predict(model,df)
        print(dia)
        print(output)
        return output, 200

    if request.method == 'GET':
        return output,200


@app.route('/heart',methods=['POST','GET'])
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def heart():

    if request.method == 'POST': 
        dia = request.get_json()
        print(dia)
        model = pickle.load(open("Heart_Disease_UCI.sav", "rb"))
        gender=dia["sex"]
        if gender=="M" or gender=="m":
            gender=1
        else:
            gender=0
        df = pd.DataFrame([pd.Series([dia["age"],gender,dia["cp"],dia["trestbps"],dia["chol"],dia["fbs"],dia["restecg"],dia["thalach"],dia["exang"],dia["oldpeak"],dia["slope"],dia["cathal"]])])
        print(df)
        global output
        output=predict(model,df)
        print(dia)
        print(output)
        return output, 200

    if request.method == 'GET':
        return output,200


if __name__ == '__main__':
    app.run()