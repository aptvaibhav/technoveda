import requests
from flask import Flask, render_template, request, jsonify, make_response
import pickle
import pandas as pd
from flask_cors import CORS,cross_origin
app = Flask(__name__, static_folder='../frontend/build')
CORS(app)

dia_model = pickle.load(open("diabetes_model.sav", "rb"))
breast_model = pickle.load(open("Breast-Cancer.sav", "rb"))
cardio_model = pickle.load(open("Cardiovascular_Disease_model.sav", "rb"))
kidney_model = pickle.load(open("Kidney-Disease.sav", "rb"))
liver_model = pickle.load(open("Liver_disease.sav", "rb"))
heart_model = pickle.load(open("Heart_Disease_UCI.sav", "rb"))
               
            
def predict(model,df):
    output=model.predict_proba(df)
    output=output[0][1]
    output*=100
    output=round(output,2)
    output = str(output)+'%'
    return output

@app.route('/', methods=['GET'])
def hello():
    return ("Flask Backend is working properly")

@app.route('/breast',methods=['POST','GET'])
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def breast():
    try:
        if request.method == 'POST': 
            dia = request.get_json()
            
            print(dia)
            #model = pickle.load(open("Breast-Cancer.sav", "rb"))
            df = pd.DataFrame([pd.Series([dia["radius-mean"],dia["perimeter-mean"],dia["area-mean"],dia["concave-points-mean"],dia["area-se"],dia["radius-worst"],dia["perimeter-worst"],dia["area-worst"],dia["concavity-worst"],dia["concave-points-worst"]])])
            global output
            output=predict(breast_model,df)
            print(dia)
            print("Post: ",output)
            return output, 200
        
        if request.method == 'GET':
            print("Get: ",output)
            return output,200
    except:
        return ("Problem in breast")
    
@app.route('/diabetes',methods=['POST','GET'])
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def diabetes():
    try:
        if request.method == 'POST': 
            dia = request.get_json()   
            #model = pickle.load(open("diabetes_model.sav", "rb"))
            df = pd.DataFrame([pd.Series([dia["Pregnancies"],dia["Glucose"],dia["BloodPressure"],dia["SkinThickness"],dia["Insulin"],dia["BMI"],dia["DiabetesPedigreeFunction"],dia["Age"]])])
            global output
            output=predict(dia_model,df)
            print(dia)
            print("Post: ",output)
            return output, 200
        
        if request.method == 'GET':
            print("Get: ",output)
            return output,200
    except:
        return ("Problem in diabetes")

@app.route('/cardio',methods=['POST','GET'])
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def cardio():
    try:
        if request.method == 'POST': 
            dia = request.get_json()
    
            print(dia)
            #model = pickle.load(open("Cardiovascular_Disease_model.sav", "rb"))
            gender=dia["gender"]
            if gender=="M" or gender=="m":
                gender=1
            else:
                gender=2
            age=int(int(dia["age"])*365)
            df = pd.DataFrame([pd.Series([age,dia["height"],dia["weight"],dia["ap_lo"],dia["ap_hi"],dia["cholestrol"],gender,dia["gluc"],dia["smoke"],dia["alco"],dia["active"],dia["bmi"]])])
            global output
            output=predict(cardio_model,df)
            return output, 200
    
        if request.method == 'GET':
            return output,200
    except:
        return ("Problem in cardio")
    
@app.route('/kidney',methods=['POST','GET'])
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def kidney():
    try:
        if request.method == 'POST': 
            dia = request.get_json()        
            #model = pickle.load(open("Kidney-Disease.sav", "rb"))
            df = pd.DataFrame([pd.Series([dia["age"],dia["bp"],dia["sg"],dia["al"],dia["su"],dia["rbc"],dia["pc"],dia["pcc"],dia["ba"],dia["bgr"],dia["bu"],dia["sc"],dia["sod"],dia["pot"],dia["hemo"],dia["pcv"],dia["wc"],dia["rc"],dia["htn"],dia["dm"],dia["cad"],dia["appet"],dia["pe"],dia["ane"]])])
            global output
            output=predict(kidney_model,df)
            return output, 200
        
        if request.method == 'GET':
            return output,200
    except:
        return ("Problem in kidney")

@app.route('/liver',methods=['POST','GET'])
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def liver():
    try:
        if request.method == 'POST': 
            dia = request.get_json()
            print(dia)
            #model = pickle.load(open("Liver_disease.sav", "rb"))
            gender=dia["Gender"]
            if gender=="M" or gender=="m":
                gender=1
            else:
                gender=0
            df = pd.DataFrame([pd.Series([dia["Age"],gender,dia["Total_Bilirubin"],dia["Direct_Bilirubin"],dia["Alkaline_Phosphotase"],dia["Alamine_Aminotransferase"],dia["Aspartate_Aminotransferase"],dia["Total_Protiens"],dia["Albumin"],dia["Albumin_and_Globulin_Ratio"]])])
            global output
            output=predict(liver_model,df)
            print(dia)
            print(output)
            return output, 200
    
        if request.method == 'GET':
            return output,200

    except:
        return ("Problem in liver")
@app.route('/heart',methods=['POST','GET'])
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def heart():
    try:
        if request.method == 'POST': 
            dia = request.get_json()
            print(dia)
            #model = pickle.load(open("Heart_Disease_UCI.sav", "rb"))
            gender=dia["sex"]
            if gender=="M" or gender=="m":
                gender=1
            else:
                gender=0
            df = pd.DataFrame([pd.Series([dia["age"],gender,dia["cp"],dia["trestbps"],dia["chol"],dia["fbs"],dia["restecg"],dia["thalach"],dia["exang"],dia["oldpeak"],dia["slope"],dia["cathal"]])])
            print(df)
            global output
            output=predict(heart_model,df)
            print(dia)
            print(output)
            return output, 200
    
        if request.method == 'GET':
            return output,200
    except:
        return ("Problem in heart")

if __name__ == '__main__':
    app.run()
