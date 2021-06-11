import React, {useState} from "react";
import './disease-details.css';
import './popup.css';


export default function HeartDisease() {


  const [enteredAge,setEnteredAge] = useState('');
  const [enteredSex,setEnteredSex] = useState('');
  const [enteredCp,setEnteredCp] = useState('');
  const [enteredTrestbps,setEnteredTrestbps] = useState('');
  const [enteredChol,setEnteredChol] = useState('');
  const [enteredFbs,setEnteredFbs] = useState('');
  const [enteredRestecg,setEnteredRestecg] = useState('');
  const [enteredThalach,setEnteredThalach] = useState('');
  const [enteredExang,setEnteredExang] = useState('');
  const [enteredOldpeak,setEnteredOldpeak] = useState('');
  const [enteredSlope,setEnteredSlope] = useState('');
  const [enteredCathal,setEnteredCathal] = useState('');
  const [output,setOutput] = useState('');


  const AgeChangeHandler = (event) => {
    setEnteredAge(event.target.value);
      };
    const SexChangeHandler = (event) => {
    setEnteredSex(event.target.value);
      };
    const CpChangeHandler = (event) => {
    setEnteredCp(event.target.value);
      };
    const TrestbpsChangeHandler = (event) => {
    setEnteredTrestbps(event.target.value);
      };
    const CholChangeHandler = (event) => {
    setEnteredChol(event.target.value);
      };
    const FbsChangeHandler = (event) => {
    setEnteredFbs(event.target.value);
      };
    const RestecgChangeHandler = (event) => {
    setEnteredRestecg(event.target.value);
      };
    const ThalachChangeHandler = (event) => {
    setEnteredThalach(event.target.value);
      };
    const ExangChangeHandler = (event) => {
    setEnteredExang(event.target.value);
      };
    const OldpeakChangeHandler = (event) => {
    setEnteredOldpeak(event.target.value);
      };
    const SlopeChangeHandler = (event) => {
    setEnteredSlope(event.target.value);
      };
    const CathalChangeHandler = (event) => {
    setEnteredCathal(event.target.value);
      };
    


      function handleSubmit(e) {


        e.preventDefault();
        const submittingValue = {
          'age' : enteredAge,
          'sex' : enteredSex,
          'cp' : enteredCp,
          'trestbps' : enteredTrestbps,
          'chol' : enteredChol,
          'fbs' : enteredFbs,
          'restecg' : enteredRestecg,
          'thalach' : enteredThalach,
          'exang' : enteredExang,
          'oldpeak' : enteredOldpeak,
          'slope' : enteredSlope,
          'cathal' : enteredCathal
        };
       
        setEnteredAge('');
        setEnteredSex('');
        setEnteredCp('');
        setEnteredTrestbps('');
        setEnteredChol('');
        setEnteredFbs('');
        setEnteredRestecg('');
        setEnteredThalach('');
        setEnteredExang('');
        setEnteredOldpeak('');
        setEnteredSlope('');
        setEnteredCathal('');
        
    
        function displayPopUp() {

          const popup = document.getElementById('mypopup');
          popup.style.display = "block";
        }
        
        fetch('https://techno-vedha.herokuapp.com/heart',{
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
    
        // fetch('https://techno-vedha.herokuapp.com/heart',{
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
  let restecg = document.getElementById('restecg');

  restecg.oninput = function() {
    if(restecg.validity.rangeOverflow || restecg.validity.rangeUnderflow) {
      restecg.setCustomValidity("Enter Resting Electrocardiograghic Result: 0 ,1, 2");
    }else {
      restecg.setCustomValidity("");
    }
  }
}

function validation01() {
  const fbs = document.getElementById('fbs');
  const exang = document.getElementById('exang');
  
  fbs.addEventListener('input', function() {
    if(fbs.validity.rangeOverflow || fbs.validity.rangeUnderflow) {
      fbs.setCustomValidity("If you have Fasting Sugar Enter: 1, else Enter: 0");
    }else {
      fbs.setCustomValidity("");
    }
  });
  exang.addEventListener('input', function() {
    if(exang.validity.rangeOverflow || exang.validity.rangeUnderflow) {
      exang.setCustomValidity("If you Exercise Enter: 1, else Enter: 0");
    }else {
      exang.setCustomValidity("");
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
    <input type="number" name="Age" required min="1" max="100"  value={enteredAge} onChange={AgeChangeHandler}/>
  </label>
  <br />
  <label>
  GENDER:
    <input type="text" id="gender"onInput={genderValidation} name="Sex" required pattern="[f]|[m]|[F]|[M]"  value={enteredSex} onChange={SexChangeHandler} />
  </label>
  <br />
  <label>
  Chest Pain Type:
    <input type="number" name="Cp" required  value={enteredCp} onChange={CpChangeHandler} />
  </label>
  <br />
  <label>
  TRESTBPS:
    <input type="number" name="Trestbps" required  value={enteredTrestbps} onChange={TrestbpsChangeHandler} />
  </label>
  <br />
  <label>
  CHOLESTEROL:
    <input type="number" name="Chol" required  value={enteredChol} onChange={CholChangeHandler} />
  </label>
  <br />
  <label>
  Fasting Sugar:
    <input type="number" onInput={validation01} id="fbs" name="Fbs" required min="0" max="1"  value={enteredFbs} onChange={FbsChangeHandler} />
  </label>
  <br />
  <label>
  Resting Electrocardiograghic:
    <input type="number" onInput={validation123} id="restecg" name="Restecg" required min="0" max="2"  value={enteredRestecg} onChange={RestecgChangeHandler} />
  </label>
  <br />
  <label>
  Maximum Heartrate:
    <input type="number" name="Thalach" required  value={enteredThalach} onChange={ThalachChangeHandler} />
  </label>
  <br />
  <label>
  Exercise:
    <input type="number" id="exang" onInput={validation01} name="Exang"  required min="0" max="1" value={enteredExang} onChange={ExangChangeHandler} />
  </label>
  <br />
  <label>
  OLDPEAK:
    <input type="number" name="Oldpeak" required   value={enteredOldpeak} onChange={OldpeakChangeHandler} />
  </label>
  <br />
  <label>
  Slope of Peak Exercise:
    <input type="number" name="Slope"  required min="0" max="3" value={enteredSlope} onChange={SlopeChangeHandler} />
  </label>
  <br />
  <label>
  Major Vessel:
    <input type="number" name="Cathal"  required value={enteredCathal} onChange={CathalChangeHandler} />
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