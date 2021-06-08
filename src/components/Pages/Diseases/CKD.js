import React, {useState} from "react";
import './disease-details.css';
import './popup.css';


export default function CKD() {


const [enteredAge,setEnteredAge] = useState('');
const [enteredBp,setEnteredBp] = useState('');
const [enteredSg,setEnteredSg] = useState('');
const [enteredAl,setEnteredAl] = useState('');
const [enteredSu,setEnteredSu] = useState('');
const [enteredRbc,setEnteredRbc] = useState('');
const [enteredPc,setEnteredPc] = useState('');
const [enteredPcc,setEnteredPcc] = useState('');
const [enteredBa,setEnteredBa] = useState('');
const [enteredBgr,setEnteredBgr] = useState('');
const [enteredBu,setEnteredBu] = useState('');
const [enteredSc,setEnteredSc] = useState('');
const [enteredSod,setEnteredSod] = useState('');
const [enteredPot,setEnteredPot] = useState('');
const [enteredHemo,setEnteredHemo] = useState('');
const [enteredPcv,setEnteredPcv] = useState('');
const [enteredWc,setEnteredWc] = useState('');
const [enteredRc,setEnteredRc] = useState('');
const [enteredHtn,setEnteredHtn] = useState('');
const [enteredDm,setEnteredDm] = useState('');
const [enteredCad,setEnteredCad] = useState('');
const [enteredAppet,setEnteredAppet] = useState('');
const [enteredPe,setEnteredPe] = useState('');
const [enteredAne,setEnteredAne] = useState('');
const [output,setOutput] = useState('');


const AgeChangeHandler = (event) => {
  setEnteredAge(event.target.value);
}; 
const BpChangeHandler = (event) => {
  setEnteredBp(event.target.value);
}; 
const SgChangeHandler = (event) => {
  setEnteredSg(event.target.value);
}; 
const AlChangeHandler = (event) => {
 setEnteredAl(event.target.value);
}; 
const SuChangeHandler = (event) => {
  setEnteredSu(event.target.value);
}; 
const RbcChangeHandler = (event) => {
  setEnteredRbc(event.target.value);
}; 
const PcChangeHandler = (event) => {
  setEnteredPc(event.target.value);
}; 
const PccChangeHandler = (event) => {
  setEnteredPcc(event.target.value);
}; 
const BaChangeHandler = (event) => {
 setEnteredBa(event.target.value);
}; 
const BgrChangeHandler = (event) => {
  setEnteredBgr(event.target.value);
}; 
const BuChangeHandler = (event) => {
  setEnteredBu(event.target.value);
}; 
const ScChangeHandler = (event) => {
  setEnteredSc(event.target.value);
}; 
const SodChangeHandler = (event) => {
  setEnteredSod(event.target.value);
}; 
const PotChangeHandler = (event) => {
  setEnteredPot(event.target.value);
}; 
const HemoChangeHandler = (event) => {
  setEnteredHemo(event.target.value);
}; 
const PcvChangeHandler = (event) => {
  setEnteredPcv(event.target.value);
}; 
const WcChangeHandler = (event) => {
  setEnteredWc(event.target.value);
}; 
const RcChangeHandler = (event) => {
  setEnteredRc(event.target.value);
}; 
const HtnChangeHandler = (event) => {
  setEnteredHtn(event.target.value);
}; 
const DmChangeHandler = (event) => {
  setEnteredDm(event.target.value);
}; 
const CadChangeHandler = (event) => {
  setEnteredCad(event.target.value);
}; 
const AppetChangeHandler = (event) => {
  setEnteredAppet(event.target.value);
}; 
const PeChangeHandler = (event) => {
  setEnteredPe(event.target.value);
}; 
const AneChangeHandler = (event) => {
  setEnteredAne(event.target.value);
}; 
 


function handleSubmit(e) {

  if(enteredAge > 100 || enteredAge < 0) {
    alert("Enter Age between range 0 - 100");
    return;
  }
  if(enteredBp > 200 || enteredBp < 50) {
    alert("Enter Blood Pressure between range 50 - 200");
    return;
  }
  if(enteredSg > 3 || enteredSg < 0) {
    alert("Enter Specific Gravity between range 0 - 3");
    return;
  }
  if(enteredAl > 5 || enteredAl < 0) {
    alert("Enter Albumin between range 0 - 5");
    return;
  }
  if(enteredSu > 5 || enteredSu < 0) {
    alert("Enter Sugar between range 0 - 5");
    return;
  }
  if(enteredRbc !== 1 || enteredRbc !== 0) {
    alert("Enter Red Blood Cell for Normal: 1, else 0");
    return;
  }
  if(enteredPc !== 1 || enteredPc !== 0) {
    alert("Enter Pus Cell, If present: 1 else 0");
    return;
  }
  if(enteredPcc !== 1 || enteredPcc !== 0) {
    alert("Enter Pus Cell Slumps, If present: 1 else 0");
    return;
  }
  if(enteredBa !== 1 || enteredBa !== 0) {
    alert("Enter Bacteria, If present: 1 else 0");
    return;
  }
  
  if(enteredBgr > 400 || enteredBgr < 20) {
    alert("Enter Blood Gross Random between range 20 - 400");
    return;
  }
  if(enteredBu > 400 || enteredBu < 1) {
    alert("Enter Blood urea between range 1 - 400");
    return;
  }
  if(enteredSc > 70 || enteredSc < 0.1) {
    alert("Enter Cratinine between range 0.1 - 70");
    return;
  }
  if(enteredSod > 170 || enteredSod < 2) {
    alert("Enter Sodium between range 2 - 170");
    return;
  }
  if(enteredPot > 50 || enteredPot < 1) {
    alert("Enter Potasium between range 1 - 50");
    return;
  }
  if(enteredHemo > 20 || enteredHemo < 2) {
    alert("Enter Hemoglobin between range 2 - 20");
    return;
  }
  if(enteredPcv > 60 || enteredPcv < 5) {
    alert("Enter pack Cell Volume between range 5 - 60");
    return;
  }
  if(enteredWc > 26400 || enteredWc < 2000) {
    alert("Enter White Blood Cell Count between range 2000 - 26400");
    return;
  }
  if(enteredRc > 15 || enteredRc < 1) {
    alert("Enter White Blood Cell Count between range 1 - 15");
    return;
  }
  if(enteredHtn !== 1 || enteredHtn !== 0) {
    alert("Enter Hyper Tension, If present: 1 else 0");
    return;
  }
  if(enteredDm !== 1 || enteredDm !== 0) {
    alert("Enter Diabetse Mellitus, If present: 1 else 0");
    return;
  }
  if(enteredCad !== 1 || enteredCad !== 0) {
    alert("Enter Coronary Artery Disease, If present: 1 else 0");
    return;
  }
  if(enteredAppet !== 1 || enteredAppet !== 0) {
    alert("Enter Appetite, If Good: 1 else 0");
    return;
  }
  if(enteredPe !== 1 || enteredPe !== 0) {
    alert("Enter Petel Edema, If Yes: 1 else 0");
    return;
  }
  if(enteredAne !== 1 || enteredAne !== 0) {
    alert("Enter Anemia, If Yes: 1 else 0");
    return;
  }
  
  

e.preventDefault();
const submittingValue = {
  'age' : enteredAge,
  'bp' : enteredBp,
  'sg' : enteredSg,
  'al' : enteredAl,
  'su' : enteredSu,
  'rbc' : enteredRbc,
  'pc' : enteredPc,
  'pcc' : enteredPcc,
  'ba' : enteredBa,
  'bgr' : enteredBgr,
  'bu' : enteredBu,
  'sc' : enteredSc,
  'sod' : enteredSod,
  'pot' : enteredPot,
  'hemo' : enteredHemo,
  'pcv' : enteredPcv,
  'wc' : enteredWc,
  'rc' : enteredRc,
  'htn' : enteredHtn,
  'dm' : enteredDm,
  'cad' : enteredCad,
  'appet' : enteredAppet,
  'pe' : enteredPe,
  'ane' : enteredAne
};


setEnteredAge('');
setEnteredBp('');
setEnteredSg('');
setEnteredAl('');
setEnteredSu('');
setEnteredRbc('');
setEnteredPc('');
setEnteredPcc('');
setEnteredBa('');
setEnteredBgr('');
setEnteredBu('');
setEnteredSc('');
setEnteredSod('');
setEnteredPot('');
setEnteredHemo('');
setEnteredPcv('');
setEnteredWc('');
setEnteredRc('');
setEnteredHtn('');
setEnteredDm('');
setEnteredCad('');
setEnteredAppet('');
setEnteredPe('');
setEnteredAne('');




function displayPopUp() {
  
  const popup = document.getElementById('mypopup');
  popup.style.display = "block";
}
    fetch('https://techno-vedha.herokuapp.com/kidney',{
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

    fetch('https://techno-vedha.herokuapp.com/kidney',{
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      },
    }).then(res => res.text())         
    .then(text => setOutput(text),
    displayPopUp()
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
  BP:
    <input type="number" name="Bp" value={enteredBp} onChange={BpChangeHandler} />
  </label>
  <br />
  <label>
  Specific Gravity:
    <input type="number" name="Sg" value={enteredSg} onChange={SgChangeHandler} />
  </label>
  <br />
  <label>
  Albumin:
    <input type="number" name="Al" value={enteredAl} onChange={AlChangeHandler} />
  </label>
  <br />
  <label>
  Sugar:
    <input type="number" name="Su" value={enteredSu} onChange={SuChangeHandler} />
  </label>
  <br />
  <label>
  RBC:
    <input type="text" name="Rbc" value={enteredRbc} onChange={RbcChangeHandler} />
  </label>
  <br />
  <label>
  Pus Cell:
    <input type="text" name="Pc" value={enteredPc} onChange={PcChangeHandler} />
  </label>
  <br />
  <label>
  Pus Cell Slumps:
    <input type="text" name="Pcc" value={enteredPcc} onChange={PccChangeHandler} />
  </label>
  <br />
  <label>
  Bacteria :
    <input type="text" name="Ba" value={enteredBa} onChange={BaChangeHandler} />
  </label>
  <br />
  <label>
  Blood Glucose Random:
    <input type="number" name="Bgr" value={enteredBgr} onChange={BgrChangeHandler} />
  </label>
  <br />
  <label>
  Blood Urea:
    <input type="number" name="Bu" value={enteredBu} onChange={BuChangeHandler} />
  </label>
  <br />
  <label>
  Serem Creatinine:
    <input type="number" name="Sc" value={enteredSc} onChange={ScChangeHandler} />
  </label>
  <br />
  <label>
  Sodium:
    <input type="number" name="Sod" value={enteredSod} onChange={SodChangeHandler} />
  </label>
  <br />
  <label>
    Potasium:
    <input type="number" name="Pot" value={enteredPot} onChange={PotChangeHandler} />
  </label>
  <br />
  <label>
  Hemoglobin:
    <input type="number" name="Hemo" value={enteredHemo} onChange={HemoChangeHandler} />
  </label>
  <br />
  <label>
  Pack Cell Volume:
    <input type="number" name="Pcv" value={enteredPcv} onChange={PcvChangeHandler}  />
  </label>
  <br />
  <label>
  WBC Count:
    <input type="number" name="Wc" value={enteredWc} onChange={WcChangeHandler} />
  </label>
  <br />
  <label>
  RBC Count:
    <input type="number" name="Rc" value={enteredRc} onChange={RcChangeHandler} />
  </label>
  <br />
  <label>
  Hyper Tension:
    <input type="text" name="Htn" value={enteredHtn} onChange={HtnChangeHandler} />
  </label>
  <br />
  <label>
  Diabetes:
    <input type="text" name="Dm" value={enteredDm} onChange={DmChangeHandler} />
  </label>
  <br />
  <label>
  Coronary Artery Disease:
    <input type="text" name="Cad" value={enteredCad} onChange={CadChangeHandler} />
  </label>
  <br />
  <label>
  Appetite:
    <input type="text" name="Appet" value={enteredAppet} onChange={AppetChangeHandler} />
  </label>
  <br />
  <label>
  Petel Edema:
    <input type="text" name="Pe" value={enteredPe} onChange={PeChangeHandler} />
  </label>
  <br />
  <label>
  Anemia:
    <input type="text" name="Ane" value={enteredAne} onChange={AneChangeHandler} />
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