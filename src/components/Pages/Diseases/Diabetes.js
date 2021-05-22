import React, {useState} from "react";

export default function Diabetes() {
  

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
  var output={};
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
    // fetch('http://127.0.0.1:5000/predict').then(response =>{
    //  return response.json();
    // }).then((pred)=>{
    //     output = pred;
    //     console.log(output);
    // });
    fetch('http://127.0.0.1:5000/predict',{
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(submittingValue),
    }).then(res => res.json())
      .then(res => console.log(res));
  }


    return (
        <>
        <br />
        <br />
        <br />
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
        </>
    );

}