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
  SG:
    <input type="number" name="Sg" value={enteredSg} onChange={SgChangeHandler} />
  </label>
  <br />
  <label>
  AL:
    <input type="number" name="Al" value={enteredAl} onChange={AlChangeHandler} />
  </label>
  <br />
  <label>
  SU:
    <input type="number" name="Su" value={enteredSu} onChange={SuChangeHandler} />
  </label>
  <br />
  <label>
  RBC:
    <input type="text" name="Rbc" value={enteredRbc} onChange={RbcChangeHandler} />
  </label>
  <br />
  <label>
  PC:
    <input type="text" name="Pc" value={enteredPc} onChange={PcChangeHandler} />
  </label>
  <br />
  <label>
  PCC:
    <input type="text" name="Pcc" value={enteredPcc} onChange={PccChangeHandler} />
  </label>
  <br />
  <label>
  BA:
    <input type="text" name="Ba" value={enteredBa} onChange={BaChangeHandler} />
  </label>
  <br />
  <label>
  BGR:
    <input type="number" name="Bgr" value={enteredBgr} onChange={BgrChangeHandler} />
  </label>
  <br />
  <label>
  BU:
    <input type="number" name="Bu" value={enteredBu} onChange={BuChangeHandler} />
  </label>
  <br />
  <label>
  SC:
    <input type="number" name="Sc" value={enteredSc} onChange={ScChangeHandler} />
  </label>
  <br />
  <label>
  SOD:
    <input type="number" name="Sod" value={enteredSod} onChange={SodChangeHandler} />
  </label>
  <br />
  <label>
    POT:
    <input type="number" name="Pot" value={enteredPot} onChange={PotChangeHandler} />
  </label>
  <br />
  <label>
  HEMO:
    <input type="number" name="Hemo" value={enteredHemo} onChange={HemoChangeHandler} />
  </label>
  <br />
  <label>
  PCV:
    <input type="number" name="Pcv" value={enteredPcv} onChange={PcvChangeHandler}  />
  </label>
  <br />
  <label>
  WC:
    <input type="number" name="Wc" value={enteredWc} onChange={WcChangeHandler} />
  </label>
  <br />
  <label>
  RC:
    <input type="number" name="Rc" value={enteredRc} onChange={RcChangeHandler} />
  </label>
  <br />
  <label>
  HTN:
    <input type="text" name="Htn" value={enteredHtn} onChange={HtnChangeHandler} />
  </label>
  <br />
  <label>
  DM:
    <input type="text" name="Dm" value={enteredDm} onChange={DmChangeHandler} />
  </label>
  <br />
  <label>
  CAD:
    <input type="text" name="Cad" value={enteredCad} onChange={CadChangeHandler} />
  </label>
  <br />
  <label>
  APPET:
    <input type="text" name="Appet" value={enteredAppet} onChange={AppetChangeHandler} />
  </label>
  <br />
  <label>
  PE:
    <input type="text" name="Pe" value={enteredPe} onChange={PeChangeHandler} />
  </label>
  <br />
  <label>
  ANE:
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