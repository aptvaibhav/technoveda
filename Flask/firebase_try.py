# -*- coding: utf-8 -*-
"""
Created on Tue Jun  1 20:24:38 2021

@author: Gaurav
"""
import pyrebase

config={
    "apiKey": "AIzaSyCRLMv7lriAw41uX4WlE7DIsS09icfkdyM",
    "authDomain": "techno-vedha.firebaseapp.com",
    "databaseURL": "https://techno-vedha-default-rtdb.firebaseio.com",
    "projectId": "techno-vedha",
    "storageBucket": "techno-vedha.appspot.com",
    "messagingSenderId": "622740569536",
    "appId": "1:622740569536:web:1be3a00fabc0a926645c25",
    "measurementId": "G-15Y1XM7TFH"
        }
firebase=pyrebase.initialize_app(config)
db=firebase.database()

"""
For Updating the realtime database
"""
#db.child("Diabetes").child("data").push({"Name":"Gaurav","Percentage":"83.33"})

"""
For updation

updation take place only with the data that is pushed by below statement
"""
#db.child("Diabites").child("pred").update({"pred":"0.10"})

"""
For retriving the data
"""
#users=db.child("Diabetes").child("data").get()
#OrderedDict([('-Mb77ZG7StIsRQWnY-Gf', {'Name': 'Gaurav', 'Percentage': '83.33'})])
#print(users.val())

#print(users.key())  #data

"""
For removing the Data
"""
#db.child("Diabetes").child("data").remove()
#db.child("Diabetes").remove()




"""
Trying to make formate as i will get

"""

db.child("active").update({"diabetes":0})
db.child("active").update({"breast":0})
db.child("active").update({"kidney":0})
db.child("active").update({"cardio":0})
db.child("active").update({"heart":0})
db.child("active").update({"liver":0})

diabetes_data={
      "Pregnancies":6,
      "Glucose":148,
      "BloodPressure":72,
      "SkinThickness":35,
      "Insulin":0,
      "BMI":0,
      "DiabetesPedigreeFunction":0.627,
      "Age":50
      }

db.child("diabetes").update(diabetes_data)


breast_data={
    "radius_mean":20.6,	
    "perimeter_mean":140.1,	
    "area_mean":126.0,
    "concave points_mean":0.152,
    "area_se":86.22,
    "radius_worst":25.740,	
    "perimeter_worst":184.6,	
    "area_worst":1821.0,
    "concavity_worst":0.9387,	
    "concave points_worst":0.265
}

db.child("breast").update(breast_data)


cardio_data={
    "age":48,	
    "gender":"M",
	"height":156,
	"weight":56.0,
	"ap_hi":100,
	"ap_lo":60,
    "cholesterol":1,
	"gluc":1,
	"smoke":0,
	"alco":0,
	"active":0,
	"bmi":23.011177
    }

db.child("cardio").update(cardio_data)



kidney_data={
    "age":48,	
    "bp":88,
	"sg":1.02,
	"al":1,
	"su":0,
	"rbc":0.189516,
    "pc":1,
	"pcc":1,
	"ba":0,
	"bgr":0,
	"bu":0,
	"sc":23.011177,
    "sod": 0.0,
    "pot": 0.0,
    "hemo": 0.0,
    "pcv": 0.0,
    "wc": 0.0,
    "rc": 0.0,
    "htn": 0.0,
    "dm": 0.0,
    "cad": 0.0,
    "appet": 0.0,
    "pe": 0.0,
    "ane": 0.0,
    }

db.child("kidney").update(kidney_data)



liver_data={
    "Age": 31,
    "Gender": 1,
    "Total_Bilirubin": 1.3,
    "Direct_Bilirubin": 0.5,
    "Alkaline_Phosphotase": 184,
    "Alamine_Aminotransferase": 29,
    "Aspartate_Aminotransferase": 32,
    "Total_Protiens": 6.8,
    "Albumin": 3.4,
    "Albumin_and_Globulin_Ratio": 1
    }

db.child("liver").update(liver_data)
