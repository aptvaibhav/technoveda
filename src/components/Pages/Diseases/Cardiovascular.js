import React, {useState} from "react";
import './disease-details.css';
import './popup.css';


export default function Cardiovascular() {

  const [enteredAge,setEnteredAge] = useState('');
  const [enteredGender,setEnteredGender] = useState('');
  const [enteredHeight,setEnteredHeight] = useState('');
  const [enteredWeight,setEnteredWeight] = useState('');
  const [enteredAp_hi,setEnteredAp_hi] = useState('');
  const [enteredAp_lo,setEnteredAp_lo] = useState('');
  const [enteredCholestrol,setEnteredCholestrol] = useState('');
  const [enteredGluc,setEnteredGluc] = useState('');
  const [enteredSmoke,setEnteredSmoke] = useState('');
  const [enteredAlco,setEnteredAlco] = useState('');
  const [enteredActive,setEnteredActive] = useState('');
  const [enteredBMI,setEnteredBMI] = useState('');
  const [output,setOutput] = useState('');


  const AgeChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  }; 
  const GenderChangeHandler = (event) => {
  setEnteredGender(event.target.value);
  }; 
  const HeightChangeHandler = (event) => {
    setEnteredHeight(event.target.value);
  }; 
  const WeightChangeHandler = (event) => {
    setEnteredWeight(event.target.value);
  }; 
  const Ap_hiChangeHandler = (event) => {
    setEnteredAp_hi(event.target.value);
  }; 
  const Ap_loChangeHandler = (event) => {
    setEnteredAp_lo(event.target.value);
  }; 
  const CholestrolChangeHandler = (event) => {
    setEnteredCholestrol(event.target.value);
  }; 
  const GlucChangeHandler = (event) => {
    setEnteredGluc(event.target.value);
  }; 
  const SmokeChangeHandler = (event) => {
    setEnteredSmoke(event.target.value);
  }; 
  const AlcoChangeHandler = (event) => {
    setEnteredAlco(event.target.value);
  }; 
  const ActiveChangeHandler = (event) => {
    setEnteredActive(event.target.value);
  }; 
  const BMIChangeHandler = (event) => {
    setEnteredBMI(event.target.value);
  }; 


  function handleSubmit(e) {
    e.preventDefault();
    const submittingValue = {
     'age' : enteredAge,
     'gender' : enteredGender,
     'height' :enteredHeight,
     'weight' : enteredWeight,
     'ap_hi' : enteredAp_hi,
     'ap_lo' : enteredAp_lo,
     'cholestrol' : enteredCholestrol,
     'gluc' : enteredGluc,
     'smoke' : enteredSmoke,
     'alco' : enteredAlco,
     'active' : enteredActive,
     'bmi' : enteredBMI
    };
   
    setEnteredAge('');
    setEnteredGender('');
    setEnteredHeight('');
    setEnteredWeight('');
    setEnteredAp_hi('');
    setEnteredAp_lo('');
    setEnteredCholestrol('');
    setEnteredGluc('');
    setEnteredSmoke('');
    setEnteredAlco('');
    setEnteredActive('');
    setEnteredBMI('');


    function displayPopUp() {
      const popup = document.getElementById('mypopup');
      popup.style.display = "block";
    }


    
    fetch('http://localhost:5000/cardio',{
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        //"Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(submittingValue),
    }).then(res => res.text())         
    .then(text => console.log(text)
    ).catch((err) => {
      console.log(err);
    });

    fetch('http://localhost:5000/cardio',{
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      },
    }).then(res => res.text())         
    .then(text => setOutput(text), displayPopUp()
    ).catch((err) => {
      console.log(err);
    });
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
  AGE:
    <input type="number" name="Age" value={enteredAge} onChange={AgeChangeHandler} />
  </label>
  <br />
  <label>
  GENDER:
    <input type="text" name="Gender" value={enteredGender} onChange={GenderChangeHandler} />
  </label>
  <br />
  <label>
  HEIGHT:
    <input type="number" name="Height" value={enteredHeight} onChange={HeightChangeHandler} />
  </label>
  <br />
  <label>
  WEIGHT:
    <input type="number" name="Weight" value={enteredWeight} onChange={WeightChangeHandler} />
  </label>
  <br />
  <label>
  AP_HI:
    <input type="number" name="Ap_hi" value={enteredAp_hi} onChange={Ap_hiChangeHandler} />
  </label>
  <br />
  <label>
  AP_LO:
    <input type="number" name="Ap_lo" value={enteredAp_lo} onChange={Ap_loChangeHandler} />
  </label>
  <br />
  <label>
  CHOLESTEROL:
    <input type="number" name="Cholestrol" value={enteredCholestrol} onChange={CholestrolChangeHandler} />
  </label>
  <br />
  <label>
  GLUC:
    <input type="number" name="Gluc" value={enteredGluc} onChange={GlucChangeHandler} />
  </label>
  <br />
  <label>
  SMOKE:
    <input type="number" name="Smoke" value={enteredSmoke} onChange={SmokeChangeHandler} />
  </label>
  <br />
  <label>
  ALCO:
    <input type="number" name="Alco" value={enteredAlco} onChange={AlcoChangeHandler} />
  </label>
  <br />
  <label>
  ACTIVE:
    <input type="number" name="Active" value={enteredActive} onChange={ActiveChangeHandler} />
  </label>
  <br />
  <label>
  BMI:
    <input type="number" name="BMI" value={enteredBMI} onChange={BMIChangeHandler} />
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