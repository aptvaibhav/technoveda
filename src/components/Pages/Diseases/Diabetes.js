import React, {useState} from "react";
import './disease-details.css';
import './popup.css';


export default function Diabetes() {
  

  const [enteredPregnanices,setEnteredPregnancies] = useState('');
  const [enteredGlucose,setEnteredGlucose] = useState('');
  const [enteredBloodPressure,setEnteredBloodPressure] = useState('');
  const [enteredSkinThickness,setEnteredSkinThickness] = useState('');
  const [enteredInsulin,setEnteredInsulin] = useState('');
  const [enteredBmi,setEnteredBmi] = useState('');
  const [enteredDiabetesPedigree,setEnteredDiabetesPedigree] = useState('');
  const [enteredAge,setEnteredAge] = useState('');
  const [output,setOutput] = useState('');


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
 

  function handleSubmit(e) {



    e.preventDefault();
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
   
    setEnteredBloodPressure('');
    setEnteredGlucose('');
    setEnteredPregnancies('');
    setEnteredAge('');
    setEnteredBmi('');
    setEnteredDiabetesPedigree('');
    setEnteredInsulin('');
    setEnteredSkinThickness('');


    function displayPopUp() {
     
      const popup = document.getElementById('mypopup');
      popup.style.display = "block";
    }
    
    fetch('https://techno-vedha.herokuapp.com/diabetes',{
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        //"Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(submittingValue),
    }).then(res => res.text())         
    .then(text => ( console.log(text), setOutput(text), displayPopUp() )
    ).catch((err) => {
      console.log(err);
    });

    // fetch('https://techno-vedha.herokuapp.com/diabetes',{
    //   method: 'GET',
    //   headers: {
    //     'Content-type': 'application/json',
    //     'Accept': 'application/json'
    //   },
    // }).then(res => res.text())         
    // .then(text => setOutput(text),
    // displayPopUp()
    // ).catch((err) => {
    //   console.log(err);
    // });
  }
  

// for result popup window


function closePopUp(e) {
  e.preventDefault();
  const popup = document.getElementById('mypopup');
  popup.style.display = "none";
}
window.onclick = function(event) {
  const popup = document.getElementById('mypopup');
  if (event.target === popup) {
    popup.style.display = "none";
  }
}




    return (
        <>
        <br />
        <br />
        <br />
        <div class="form">
        <form onSubmit={handleSubmit}>
        
  <label>
  Pregnancies:
    <input type="number" name="Pregnancies" required min="1" max="17" value={enteredPregnanices} onChange={pregnanicesChangeHandler} />
  </label>
  <br />
  <label>
  Glucose:
    <input type="number" name="Glucose" required min="1" max="199" value={enteredGlucose} onChange={glucoseChangeHandler} />
  </label>
  <br />
  <label>
  BloodPressure:
    <input type="number" name="BloodPressure" required min="20" max="180" value={enteredBloodPressure} onChange={bloodPressureChangeHandler}/>
  </label>
  <br />
  <label>
  SkinThickness:
    <input type="number" name="SkinThickness" required min="0" max="90" value={enteredSkinThickness} onChange={skinThicknessChangeHandler}/>
  </label>
  <br />
  <label>
  Insulin:
    <input type="number" name="Insulin" required min="0" max="846" value={enteredInsulin} onChange={insulinChangeHandler}/>
  </label>
  <br />
  <label>
  BMI:
    <input type="number" name="BMI" required step="0.01" min="0" max="67.1" value={enteredBmi} onChange={bmiChangeHandler}/>
  </label>
  <br />
  <label>
  DiabetesPedigreeFunction:
    <input type="number" name="DiabetesPedigreeFunction" required step="0.001" min="0.078" max="2.42" value={enteredDiabetesPedigree} onChange={diabestesPedigreeChangeHandler}/>
  </label>
  <br />
  <label>
  Age:
    <input type="number" name="Age" required min="1" max="100" value={enteredAge} onChange={ageChangeHandler}/>
  </label>
  <br />
 
  <input id="disease-submit" type="submit" value="Submit" />
      {/* <p>{output}</p> */}

      <div id="mypopup" class="popup-container">


        <div class="popup-content">
          <span onClick={closePopUp} class="close-btn">&times;</span>
          <p>There is <strong> {output} </strong> chance of you having this disease.</p>
        </div>

      </div>
  
</form>


</div>

 </>


);



}