import React, {useState,useEffect} from "react";
import './disease-details.css';
import firebase from "../../../Firebase.js";





export default function Diabetes() {
  
  // const [result,setResult] = useState([]);
  // const [loading,setLoading] = useState(false);

  
  const ref = firebase.firestore().collection("diabetes");
  console.log(ref);

  const [output,setOutput]  = useState('');


  const [enteredPregnanices,setEnteredPregnancies] = useState('');
  const [enteredGlucose,setEnteredGlucose] = useState('');
  const [enteredBloodPressure,setEnteredBloodPressure] = useState('');
  const [enteredSkinThickness,setEnteredSkinThickness] = useState('');
  const [enteredInsulin,setEnteredInsulin] = useState('');
  const [enteredBmi,setEnteredBmi] = useState('');
  const [enteredDiabetesPedigree,setEnteredDiabetesPedigree] = useState('');
  const [enteredAge,setEnteredAge] = useState('');



  const pregnanicesChangeHandler = (event) => {
      setEnteredPregnancies(event.target.value);
  }; 

  const glucoseChangeHandler = (event) => {
    setEnteredGlucose(event.target.value);
  }; 
  const bloodPressureChangeHandler = (event) => {
  setEnteredBloodPressure(event.target.value);
  }; 
  const skinThicknessChangeHandler = (event) => {
    setEnteredSkinThickness(event.target.value);
  }; 
  const insulinChangeHandler = (event) => {
    setEnteredInsulin(event.target.value);
  }; 
  const bmiChangeHandler = (event) => {
    setEnteredBmi(event.target.value);
  }; 
  const diabestesPedigreeChangeHandler = (event) => {
    setEnteredDiabetesPedigree(event.target.value);
  }; 
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  }; 
  // var output={};










  function handleSubmit(e) {
    e.preventDefault();
    // const data = { name: value };
    // console.log('submit');
    // console.log(value);/</form><form>
    const submittingValue = {
     'Pregnancies' : enteredPregnanices,
     'Glucose' : enteredGlucose,
     'BloodPressure' : enteredBloodPressure,
     'SkinThickness' :enteredSkinThickness,
     'Insulin' : enteredInsulin,
     'BMI' : enteredBmi,
     'DiabetesPedigreeFunction' : enteredDiabetesPedigree,
     'Age' : enteredAge
    };
    //console.log(enteredPregnanices,enteredGlucose,enteredBloodPressure);
    setEnteredBloodPressure('');
    setEnteredGlucose('');
    setEnteredPregnancies('');
    setEnteredAge('');
    setEnteredBmi('');
    setEnteredDiabetesPedigree('');
    setEnteredInsulin('');
    setEnteredSkinThickness('');
    fetch('https://technoveda-66fce-default-rtdb.firebaseio.com/diabetes.json').then(response =>{
     return response.json();
    }).then((pred)=>{
        //output = pred.res;
        setOutput(pred.res);
        console.log(output);
      
    });
    fetch('https://technoveda-66fce-default-rtdb.firebaseio.com/diabetes.json',{
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(submittingValue),
    }).then(res => res.json());
      // .then(res => console.log(res));
  }

 

  // function getResult() {
  //   setLoading(true);
  //   ref.onSnapshot((querySnapshot)=>{
  //       const items = [];
  //       querySnapshot.forEach((doc)=>{
  //           items.push(doc.data());
  //       });
  //       setResult(items);
  //       setLoading(false);
  //       console.log(result);
  //   });
  // }

  // useEffect(()=>{
  //     getResult();
  //     //console.log("safd");
  // },[]);

  // if(loading){
  //   return <h1>Loading....</h1>
  // }

    return (
        <>
        <br />
        <br />
        <br />
        <div class="form">
        <form onSubmit={handleSubmit}>
        
  <label>
  Pregnancies:
    <input type="number" name="Pregnancies" value={enteredPregnanices} onChange={pregnanicesChangeHandler} />
  </label>
  <br />
  <label>
  Glucose:
    <input type="number" name="Glucose" value={enteredGlucose} onChange={glucoseChangeHandler} />
  </label>
  <br />
  <label>
  BloodPressure:
    <input type="number" name="BloodPressure" value={enteredBloodPressure} onChange={bloodPressureChangeHandler}/>
  </label>
  <br />
  <label>
  SkinThickness:
    <input type="number" name="SkinThickness" value={enteredSkinThickness} onChange={skinThicknessChangeHandler}/>
  </label>
  <br />
  <label>
  Insulin:
    <input type="number" name="Insulin" value={enteredInsulin} onChange={insulinChangeHandler}/>
  </label>
  <br />
  <label>
  BMI:
    <input type="number" name="BMI" value={enteredBmi} onChange={bmiChangeHandler}/>
  </label>
  <br />
  <label>
  DiabetesPedigreeFunction:
    <input type="number" name="DiabetesPedigreeFunction" value={enteredDiabetesPedigree} onChange={diabestesPedigreeChangeHandler}/>
  </label>
  <br />
  <label>
  Age:
    <input type="number" name="Age" value={enteredAge} onChange={ageChangeHandler}/>
  </label>
  <br />
 
  <input type="submit" value="Submit" />

  
  
</form>


</div>

 </>
       
);

}