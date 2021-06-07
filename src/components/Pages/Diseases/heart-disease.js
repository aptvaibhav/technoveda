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
  const [enteredCa,setEnteredCa] = useState('');
  const [enteredThal,setEnteredThal] = useState('');
  const [enteredTarget,setEnteredTarget] = useState('');
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
    const CaChangeHandler = (event) => {
    setEnteredCa(event.target.value);
      };
    const ThalChangeHandler = (event) => {
    setEnteredThal(event.target.value);
      };
    const TargetChangeHandler = (event) => {
    setEnteredTarget(event.target.value);
      };


      function handleSubmit(e) {
        e.preventDefault();
        const submittingValue = {
          'Age' : enteredAge,
          'Sex' : enteredSex,
          'Cp' : enteredCp,
          'Trestbps' : enteredTrestbps,
          'Chol' : enteredChol,
          'Fbs' : enteredFbs,
          'Restecg' : enteredRestecg,
          'Thalach' : enteredThalach,
          'Exang' : enteredExang,
          'Oldpeak' : enteredOldpeak,
          'Slope' : enteredSlope,
          'Ca' : enteredCa,
          'Thal' : enteredThal,
          'Target' : enteredTarget
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
        setEnteredCa('');
        setEnteredThal('');
        setEnteredTarget('');


        




    
    
    // for result popup window
    var popup = document.getElementById("mypopup");
    var btn = document.getElementById("disease-submit");
    var span = document.getElementsByClassName("close-btn")[0];
    
    btn.onclick = function() {
      popup.style.display = "block";
    }
    span.onclick = function() {
      popup.style.display = "none";
    }
    window.onclick = function(event) {
      if (event.target == popup) {
        popup.style.display = "none";
      }
    }
    
    
        
        fetch('http://localhost:5000/diabetes',{
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
    
        fetch('http://localhost:5000/diabetes',{
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json'
          },
        }).then(res => res.text())         
        .then(text => setOutput(text)
        ).catch((err) => {
          console.log(err);
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
    <input type="number" name="Age" value={enteredAge} onChange={AgeChangeHandler}/>
  </label>
  <br />
  <label>
  SEX:
    <input type="number" name="Sex" value={enteredSex} onChange={SexChangeHandler} />
  </label>
  <br />
  <label>
  CP:
    <input type="number" name="Cp" value={enteredCp} onChange={CpChangeHandler} />
  </label>
  <br />
  <label>
  TRESTBPS:
    <input type="number" name="Trestbps" value={enteredTrestbps} onChange={TrestbpsChangeHandler} />
  </label>
  <br />
  <label>
  CHOLESTEROL:
    <input type="number" name="Chol" value={enteredChol} onChange={CholChangeHandler} />
  </label>
  <br />
  <label>
  FBS:
    <input type="number" name="Fbs" value={enteredFbs} onChange={FbsChangeHandler} />
  </label>
  <br />
  <label>
  RESTECG:
    <input type="number" name="Restecg" value={enteredRestecg} onChange={RestecgChangeHandler} />
  </label>
  <br />
  <label>
  THALACH:
    <input type="number" name="Thalach" value={enteredThalach} onChange={ThalachChangeHandler} />
  </label>
  <br />
  <label>
  EXANG:
    <input type="number" name="Exang" value={enteredExang} onChange={ExangChangeHandler} />
  </label>
  <br />
  <label>
  OLDPEAK:
    <input type="number" name="Oldpeak" value={enteredOldpeak} onChange={OldpeakChangeHandler} />
  </label>
  <br />
  <label>
  SLOPE:
    <input type="number" name="Slope" value={enteredSlope} onChange={SlopeChangeHandler} />
  </label>
  <br />
  <label>
  CA:
    <input type="number" name="Ca" value={enteredCa} onChange={CaChangeHandler} />
  </label>
  <br />
  <label>
  THAL:
    <input type="number" name="Thal" value={enteredThal} onChange={ThalChangeHandler} />
  </label>
  <br />
  <label>
  TARGET:
    <input type="number" name="Target"  value={enteredTarget} onChange={TargetChangeHandler} />
  </label>
  <br />
 
  <input id="disease-submit" type="submit" value="Submit" />
      {/* <p>{output}</p> */}

      <div id="mypopup" class="popup-container">


        <div class="popup-content">
          <span class="close-btn">&times;</span>
          <p>There is <strong> {output} </strong> chance of you having this disease.</p>
        </div>

      </div>
</form>
</div>
        </>
    );

}