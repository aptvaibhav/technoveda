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
    .then(text => ( console.log(text), setOutput(text), displayPopUp() )
    ).catch((err) => {
      console.log(err);
    });

    // fetch('https://techno-vedha.herokuapp.com/kidney',{
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
function validation01() {
  const rbc = document.getElementById('rbc');
  const pc = document.getElementById('pc');
  const pcc = document.getElementById('pcc');
  const ba = document.getElementById('ba');
  const htn = document.getElementById('htn');
  const dm = document.getElementById('dm');
  const cad = document.getElementById('cad');
  const appet = document.getElementById('appet');
  const pe = document.getElementById('pe');
  const ane = document.getElementById('ane');
  
  rbc.addEventListener('input', function() {
    if(rbc.validity.rangeOverflow || rbc.validity.rangeUnderflow) {
      rbc.setCustomValidity("Enter Red Blood Cell for Normal: 1, else 0");
    }else {
      rbc.setCustomValidity("");
    }
  });
  pc.addEventListener('input', function() {
    if(pc.validity.rangeOverflow || pc.validity.rangeUnderflow) {
      pc.setCustomValidity("IfEnter Pus Cell, If present: 1 else 0");
    }else {
      pc.setCustomValidity("");
    }
  });
  pcc.addEventListener('input', function() {
    if(pcc.validity.rangeOverflow || pcc.validity.rangeUnderflow) {
      pcc.setCustomValidity("Enter Pus Cell Slumps, If present: 1 else 0");
    }else {
      pcc.setCustomValidity("");
    }
  });
  ba.addEventListener('input', function() {
    if(ba.validity.rangeOverflow || ba.validity.rangeUnderflow) {
      ba.setCustomValidity("Enter Bacteria, If present: 1 else 0");
    }else {
      ba.setCustomValidity("");
    }
  });
  htn.addEventListener('input', function() {
    if(htn.validity.rangeOverflow || htn.validity.rangeUnderflow) {
      htn.setCustomValidity("Enter Hyper Tension, If present: 1 else 0");
    }else {
      htn.setCustomValidity("");
    }
  });
  dm.addEventListener('input', function() {
    if(dm.validity.rangeOverflow || dm.validity.rangeUnderflow) {
      dm.setCustomValidity("Enter Diabetes Mellitus, If present: 1 else 0");
    }else {
      dm.setCustomValidity("");
    }
  });
  cad.addEventListener('input', function() {
    if(cad.validity.rangeOverflow || cad.validity.rangeUnderflow) {
      cad.setCustomValidity("Enter Coronary Artery Disease, If present: 1 else 0");
    }else {
      cad.setCustomValidity("");
    }
  });
  appet.addEventListener('input', function() {
    if(appet.validity.rangeOverflow || appet.validity.rangeUnderflow) {
      appet.setCustomValidity("Enter Appetite, If present: 1 else 0");
    }else {
      appet.setCustomValidity("");
    }
  });
  pe.addEventListener('input', function() {
    if(pe.validity.rangeOverflow || pe.validity.rangeUnderflow) {
      pe.setCustomValidity("Enter Petel Edema, If present: 1 else 0");
    }else {
      pe.setCustomValidity("");
    }
  });
  ane.addEventListener('input', function() {
    if(ane.validity.rangeOverflow || ane.validity.rangeUnderflow) {
      ane.setCustomValidity("Enter Anemia, If present: 1 else 0");
    }else {
      ane.setCustomValidity("");
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
    <input type="number" name="Age" min="1" max="100" required   value={enteredAge} onChange={AgeChangeHandler} />
  </label>
  <br />
  <label>
  BP:
    <input type="number" name="Bp" value={enteredBp} required  onChange={BpChangeHandler} />
  </label>
  <br />
  <label>
  Specific Gravity:
    <input type="number" name="Sg" min="0" max="3"  required value={enteredSg} onChange={SgChangeHandler} />
  </label>
  <br />
  <label>
  Albumin:
    <input type="number" name="Al" min="0" max="5"  required value={enteredAl} onChange={AlChangeHandler} />
  </label>
  <br />
  <label>
  Sugar:
    <input type="number" name="Su" min="0" max="5" required  value={enteredSu} onChange={SuChangeHandler} />
  </label>
  <br />
  <label>
  RBC:
    <input type="number"id="rbc"  onInput={validation01} name="Rbc"   required min="0" max="1" value={enteredRbc} onChange={RbcChangeHandler} />
  </label>
  <br />
  <label>
  Pus Cell:
    <input type="number"id="pc"  onInput={validation01} name="Pc"  required  min="0" max="1" value={enteredPc} onChange={PcChangeHandler} />
  </label>
  <br />
  <label>
  Pus Cell Slumps:
    <input type="number" id="pcc"  onInput={validation01}name="Pcc"  required  min="0" max="1" value={enteredPcc} onChange={PccChangeHandler} />
  </label>
  <br />
  <label>
  Bacteria :
    <input type="number" name="Ba"  onInput={validation01}id="ba"  required min="0" max="1"  value={enteredBa} onChange={BaChangeHandler} />
  </label>
  <br />
  <label>
  Blood Glucose Random:
    <input type="number" name="Bgr" value={enteredBgr}  required onChange={BgrChangeHandler} />
  </label>
  <br />
  <label>
  Blood Urea:
    <input type="number" name="Bu" value={enteredBu} required  onChange={BuChangeHandler} />
  </label>
  <br />
  <label>
  Serem Creatinine:
    <input type="number" name="Sc" value={enteredSc} required  onChange={ScChangeHandler} />
  </label>
  <br />
  <label>
  Sodium:
    <input type="number" name="Sod" value={enteredSod}  required onChange={SodChangeHandler} />
  </label>
  <br />
  <label>
    Potasium:
    <input type="number" name="Pot" value={enteredPot}  required onChange={PotChangeHandler} />
  </label>
  <br />
  <label>
  Hemoglobin:
    <input type="number" name="Hemo" value={enteredHemo} required  onChange={HemoChangeHandler} />
  </label>
  <br />
  <label>
  Pack Cell Volume:
    <input type="number" name="Pcv" value={enteredPcv} required  onChange={PcvChangeHandler}  />
  </label>
  <br />
  <label>
  WBC Count:
    <input type="number" name="Wc" value={enteredWc}  required onChange={WcChangeHandler} />
  </label>
  <br />
  <label>
  RBC Count:
    <input type="number" name="Rc" value={enteredRc}  required onChange={RcChangeHandler} />
  </label>
  <br />
  <label>
  Hyper Tension:
    <input type="number"id="htn"  onInput={validation01}  required name="Htn" min="0" max="1"  value={enteredHtn} onChange={HtnChangeHandler} />
  </label>
  <br />
  <label>
  Diabetes:
    <input type="number"id="dm"  onInput={validation01}  required name="Dm" min="0" max="1"  value={enteredDm} onChange={DmChangeHandler} />
  </label>
  <br />
  <label>
  Coronary Artery Disease:
    <input type="number"id="cad"   onInput={validation01} required name="Cad"  min="0" max="1" value={enteredCad} onChange={CadChangeHandler} />
  </label>
  <br />
  <label>
  Appetite:
    <input type="number"id="appet" onInput={validation01}   required name="Appet" min="0" max="1"  value={enteredAppet} onChange={AppetChangeHandler} />
  </label>
  <br />
  <label>
  Petel Edema:
    <input type="number"id="pe"  onInput={validation01}name="Pe"  required  min="0" max="1" value={enteredPe} onChange={PeChangeHandler} />
  </label>
  <br />
  <label>
  Anemia:
    <input type="number" id="ane" onInput={validation01} name="Ane" required  min="0" max="1"  value={enteredAne} onChange={AneChangeHandler} />
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