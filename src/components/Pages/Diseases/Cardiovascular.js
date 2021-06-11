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


    
    fetch('https://techno-vedha.herokuapp.com/cardio',{
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

    // fetch('https://techno-vedha.herokuapp.com/cardio',{
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


//Validation
function genderValidation() {
  const gender = document.getElementById('gender');

  gender.addEventListener('input', function() {
    if(gender.validity.patternMismatch) {
      gender.setCustomValidity("Enter For Male: M or m and for Female: F or f ");
    } else {
      gender.setCustomValidity("");
    }
  });
}

function validation123() {
  let cholestrol = document.getElementById('chol');
  let glucose = document.getElementById('gluc');

  cholestrol.oninput = function() {
    if(cholestrol.validity.rangeOverflow || cholestrol.validity.rangeUnderflow) {
      cholestrol.setCustomValidity("Enter for Normal: 1, above Normal: 2, High: 3");
    }else {
      cholestrol.setCustomValidity("");
    }
  }
  glucose.addEventListener('input', function() {
    if(glucose.validity.rangeOverflow || glucose.validity.rangeUnderflow) {
      glucose.setCustomValidity("Enter for Normal: 1, above Normal: 2, High: 3");
    }else {
      glucose.setCustomValidity("");
    }
  });
}

function validation01() {
  const smoke = document.getElementById('smoke');
  const alcohol = document.getElementById('alcohol');
  const active = document.getElementById('active');
  
  smoke.addEventListener('input', function() {
    if(smoke.validity.rangeOverflow || smoke.validity.rangeUnderflow) {
      smoke.setCustomValidity("If you Smoke Enter: 1, else Enter: 0");
    }else {
      smoke.setCustomValidity("");
    }
  });
  alcohol.addEventListener('input', function() {
    if(alcohol.validity.rangeOverflow || alcohol.validity.rangeUnderflow) {
      alcohol.setCustomValidity("If you drink Alcohol Enter: 1, else Enter: 0");
    }else {
      alcohol.setCustomValidity("");
    }
  });
  active.addEventListener('input', function() {
    if(active.validity.rangeOverflow || active.validity.rangeUnderflow) {
      active.setCustomValidity("If you do Exercise Enter: 1, else Enter: 0");
    }else {
      active.setCustomValidity("");
    }
  });
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
    <input type="number" name="Age"required min="1" max="100" value={enteredAge} onChange={AgeChangeHandler} />
  </label>
  <br />
  <label>
  GENDER:
    <input type="text" onInput={genderValidation} id="gender" name="Gender" pattern="[f]|[m]|[F]|[M]" value={enteredGender} onChange={GenderChangeHandler} />
  </label>
  <br />
  <label>
  HEIGHT:
    <input type="number" name="Height"required step="0.01" value={enteredHeight} onChange={HeightChangeHandler} />
  </label>
  <br />
  <label>
  WEIGHT:
    <input type="number" name="Weight"required step="0.01" value={enteredWeight} onChange={WeightChangeHandler} />
  </label>
  <br />
  <label>
  SYSTOLIC BP:
    <input type="number" name="Ap_hi"required step="0.01"value={enteredAp_hi} onChange={Ap_hiChangeHandler} />
  </label>
  <br />
  <label>
  DIASTOLIC BP:
    <input type="number" name="Ap_lo" required step="0.01" value={enteredAp_lo} onChange={Ap_loChangeHandler} />
  </label>
  <br />
  <label>
  CHOLESTEROL:
    <input type="number"onInput={validation123} name="Cholestrol" id="chol" required min="1" max="3" value={enteredCholestrol} onChange={CholestrolChangeHandler} />
  </label>
  <br />
  <label>
  GLUCOSE:
    <input type="number"onInput={validation123} name="Gluc" id="gluc" required min="1" max="3" value={enteredGluc} onChange={GlucChangeHandler} />
  </label>
  <br />
  <label>
  SMOKE:
    <input type="number"id="smoke" onInput={validation01} name="Smoke" min="0" max="1" required value={enteredSmoke} onChange={SmokeChangeHandler} />
  </label>
  <br />
  <label>
  ALCOHOL:
    <input type="number" id="alcohol" onInput={validation01}name="Alco" min="0" max="1" required value={enteredAlco} onChange={AlcoChangeHandler} />
  </label>
  <br />
  <label>
  ACTIVE:
    <input type="number" id="active" onInput={validation01} name="Active" min="0" max="1" required value={enteredActive} onChange={ActiveChangeHandler} />
  </label>
  <br />
  <label>
  BMI:
    <input type="number" name="BMI" required min="3" max="35" value={enteredBMI} onChange={BMIChangeHandler} />
  </label>
  <br />
 
  <input id="disease-submit"  type="submit" value="Submit" />
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