import React, {useState} from "react";
import './disease-details.css';
import './popup.css';


export default function BreastCancer() {


  const [enteredRadiusMean,setEnteredRadiusMean] = useState('');
  const [enteredPerimeterMean,setEnteredPerimeterMean] = useState('');
  const [enteredAreaMean,setEnteredAreaMean] = useState('');

  const [enteredConcavePointsMean,setEnteredConcavePointsMean] = useState('');
  const [enteredAreaSe,setEnteredAreaSe] = useState('');


  const [enteredRadiusWorst,setEnteredRadiusWorst] = useState('');
  const [enteredPerimeterWorst,setEnteredPerimeterWorst] = useState('');
  const [enteredAreaWorst,setEnteredAreaWorst] = useState('');

  const [enteredConcavityWorst,setEnteredConcavityWorst] = useState('');
  const [enteredConcavePointsWorst,setEnteredConcavePointsWorst] = useState('');
  const [output,setOutput] = useState('');




  const RadiusMeanChangeHandler = (event) => {
    setEnteredRadiusMean(event.target.value);
  }; 
  const PerimeterMeanChangeHandler = (event) => {
    setEnteredPerimeterMean(event.target.value);
  }; 
  const AreaMeanChangeHandler = (event) => {
    setEnteredAreaMean(event.target.value);
  }; 

  const ConcavePointsMeanChangeHandler = (event) => {
    setEnteredConcavePointsMean(event.target.value);
  }; 
  const AreaSeChangeHandler = (event) => {
    setEnteredAreaSe(event.target.value);
  }; 
  const RadiusWorstChangeHandler = (event) => {
    setEnteredRadiusWorst(event.target.value);
  }; 
  const PerimeterWorstChangeHandler = (event) => {
    setEnteredPerimeterWorst(event.target.value);
  }; 
  const AreaWorstChangeHandler = (event) => {
    setEnteredAreaWorst(event.target.value);
  }; 
  const ConcavityWorstChangeHandler = (event) => {
    setEnteredConcavityWorst(event.target.value);
  }; 
  const ConcavePointsWorstChangeHandler = (event) => {
    setEnteredConcavePointsWorst(event.target.value);
  }; 



  function handleSubmit(e) {
    e.preventDefault();
    const submittingValue = {
     'radius-mean' : enteredRadiusMean,
     'perimeter-mean' :enteredPerimeterMean,
     'area-mean' : enteredAreaMean,
     'concave-points-mean' : enteredConcavePointsMean,
     'area-se' : enteredAreaSe,
     'radius-worst' : enteredRadiusWorst,
     'perimeter-worst' : enteredPerimeterWorst,
     'area-worst' : enteredAreaWorst,
     'concavity-worst' : enteredConcavityWorst,
     'concave-points-worst' : enteredConcavePointsWorst,
    };
   
    setEnteredRadiusMean('');
    setEnteredPerimeterMean('');
    setEnteredAreaMean('');
    setEnteredConcavePointsMean('');
    setEnteredAreaSe('');
    setEnteredRadiusWorst('');
    setEnteredPerimeterWorst('');
    setEnteredAreaWorst('');
    setEnteredConcavityWorst('');
    setEnteredConcavePointsWorst('');

    function displayPopUp() {
      
      const popup = document.getElementById('mypopup');
      popup.style.display = "block";
    }


    
    fetch('https://techno-vedha.herokuapp.com/breast',{
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

    fetch('https://techno-vedha.herokuapp.com/breast',{
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
  RADIUS_MEAN:
    <input type="number" name="RadiusMean" value={enteredRadiusMean} onChange={RadiusMeanChangeHandler}/>
  </label>
  <br />
  <label>
  PERIMETER_MEAN:
    <input type="number" name="PerimeterMean" value={enteredPerimeterMean} onChange={PerimeterMeanChangeHandler}/>
  </label>
  <br />
  <label>
  AREA_MEAN:
    <input type="number" name="AreaMean" value={enteredAreaMean} onChange={AreaMeanChangeHandler}/>
  </label>
  <br />
  <label>
  CONCAVE POINTS_MEAN:
    <input type="number" name="ConcavePointsMean" value={enteredConcavePointsMean} onChange={ConcavePointsMeanChangeHandler}/>
  </label>
  <br />
  <label>
  AREA_SE:
    <input type="number" name="AreaSe" value={enteredAreaSe} onChange={AreaSeChangeHandler}/>
  </label>
  <br />
  <label>
  RADIUS_WORST:
    <input type="number" name="RadiusWorst" value={enteredRadiusWorst} onChange={RadiusWorstChangeHandler}/>
  </label>
  <br />
  <label>
  PERIMETER_WORST:
    <input type="number" name="PerimeterWorst" value={enteredPerimeterWorst} onChange={PerimeterWorstChangeHandler}/>
  </label>
  <br />
  <label>
  AREA_WORST:
    <input type="number" name="AreaWorst" value={enteredAreaWorst} onChange={AreaWorstChangeHandler}/>
  </label>
  <br />
  <label>
  CONCAVITY_WORST:
    <input type="number" name="ConcavityWorst" value={enteredConcavityWorst} onChange={ConcavityWorstChangeHandler}/>
  </label>
  <br />
  <label>
  CONCAVE POINTS_WORST:
    <input type="number" name="ConcavePointsWorst" value={enteredConcavePointsWorst} onChange={ConcavePointsWorstChangeHandler}/>
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
