import React, {useState} from "react";
import './disease-details.css';
import './popup.css';


export default function BreastCancer() {


  const [enteredId,setEnteredId] = useState('');
  const [enteredDiagnosis,setEnteredDiagnosis] = useState('');
  const [enteredRadiusMean,setEnteredRadiusMean] = useState('');
  const [enteredTextureMean,setEnteredTextureMean] = useState('');
  const [enteredPerimeterMean,setEnteredPerimeterMean] = useState('');
  const [enteredAreaMean,setEnteredAreaMean] = useState('');
  const [enteredSmoothnessMean,setEnteredSmoothnessMean] = useState('');
  const [enteredCompactnessMean,setEnteredCompactnessMean] = useState('');
  const [enteredConcavityMean,setEnteredConcavityMean] = useState('');

  const [enteredConcavePointsMean,setEnteredConcavePointsMean] = useState('');
  const [enteredSymmetryMean,setEnteredSymmetryMean] = useState('');
  const [enteredFractalDimensionMean,setEnteredFractalDimensionMean] = useState('');
  const [enteredRadiusSe,setEnteredRadiusSe] = useState('');
  const [enteredTextureSe,setEnteredTextureSe] = useState('');
  const [enteredPerimeterSe,setEnteredPerimeterSe] = useState('');
  const [enteredAreaSe,setEnteredAreaSe] = useState('');
  const [enteredSmoothnessSe,setEnteredSmoothnessSe] = useState('');
  const [enteredCompactnessSe,setEnteredCompactnessSe] = useState('');
  const [enteredConcavitySe,setEnteredConcavitySe] = useState('');
  const [enteredConcavePointsSe,setEnteredConcavePointsSe] = useState('');
  const [enteredSymmetrySe,setEnteredSymmetrySe] = useState('');
  const [enteredFractalDimensionSe,setEnteredFractalDimensionSe] = useState('');


  const [enteredRadiusWorst,setEnteredRadiusWorst] = useState('');
  const [enteredTextureWorst,setEnteredTextureWorst] = useState('');
  const [enteredPerimeterWorst,setEnteredPerimeterWorst] = useState('');
  const [enteredAreaWorst,setEnteredAreaWorst] = useState('');

  const [enteredSmoothnessWorst,setEnteredSmoothnessWorst] = useState('');
  const [enteredCompactnessWorst,setEnteredCompactnessWorst] = useState('');
  const [enteredConcavityWorst,setEnteredConcavityWorst] = useState('');
  const [enteredConcavePointsWorst,setEnteredConcavePointsWorst] = useState('');
  const [enteredSymmetryWorst,setEnteredSymmetryWorst] = useState('');
  const [enteredFractalDimensionWorst,setEnteredFractalDimensionWorst] = useState('');
  const [output,setOutput] = useState('');



  const IdChangeHandler = (event) => {
    setEnteredId(event.target.value);
  }; 
  const DiagnosisChangeHandler = (event) => {
    setEnteredDiagnosis(event.target.value);
  }; 

  const RadiusMeanChangeHandler = (event) => {
    setEnteredRadiusMean(event.target.value);
  }; 
  const TextureMeanChangeHandler = (event) => {
  setEnteredTextureMean(event.target.value);
  }; 
  const PerimeterMeanChangeHandler = (event) => {
    setEnteredPerimeterMean(event.target.value);
  }; 
  const AreaMeanChangeHandler = (event) => {
    setEnteredAreaMean(event.target.value);
  }; 
  const SmoothnessMeanChangeHandler = (event) => {
    setEnteredSmoothnessMean(event.target.value);
  }; 
  const CompactnessMeanChangeHandler = (event) => {
    setEnteredCompactnessMean(event.target.value);
  }; 
  const ConcavityMeanChangeHandler = (event) => {
    setEnteredConcavityMean(event.target.value);
  }; 

  const ConcavePointsMeanChangeHandler = (event) => {
    setEnteredConcavePointsMean(event.target.value);
  }; 
  const SymmetryMeanChangeHandler = (event) => {
    setEnteredSymmetryMean(event.target.value);
  }; 
  const FractalDimensionMeanChangeHandler = (event) => {
    setEnteredFractalDimensionMean(event.target.value);
  }; 
  const RadiusSeChangeHandler = (event) => {
    setEnteredRadiusSe(event.target.value);
  }; 
  const TextureSeChangeHandler = (event) => {
    setEnteredTextureSe(event.target.value);
  }; 
  const PerimeterSeChangeHandler = (event) => {
    setEnteredPerimeterSe(event.target.value);
  }; 
  const AreaSeChangeHandler = (event) => {
    setEnteredAreaSe(event.target.value);
  }; 
  const SmoothnessSeChangeHandler = (event) => {
    setEnteredSmoothnessSe(event.target.value);
  }; 
  const CompactnessSeChangeHandler = (event) => {
    setEnteredCompactnessSe(event.target.value);
  }; 
  const ConcavitySeChangeHandler = (event) => {
    setEnteredConcavitySe(event.target.value);
  }; 
  const ConcavePointsSeChangeHandler = (event) => {
    setEnteredConcavePointsSe(event.target.value);
  }; 
  const SymmetrySeChangeHandler = (event) => {
    setEnteredSymmetrySe(event.target.value);
  }; 
  const FractalDimensionSeChangeHandler = (event) => {
    setEnteredFractalDimensionSe(event.target.value);
  }; 
  const RadiusWorstChangeHandler = (event) => {
    setEnteredRadiusWorst(event.target.value);
  }; 
  const TextureWorstChangeHandler = (event) => {
    setEnteredTextureWorst(event.target.value);
  }; 
  const PerimeterWorstChangeHandler = (event) => {
    setEnteredPerimeterWorst(event.target.value);
  }; 
  const AreaWorstChangeHandler = (event) => {
    setEnteredAreaWorst(event.target.value);
  }; 
  const SmoothnessWorstChangeHandler = (event) => {
    setEnteredSmoothnessWorst(event.target.value);
  }; 
  const CompactnessWorstChangeHandler = (event) => {
    setEnteredCompactnessWorst(event.target.value);
  }; 
  const ConcavityWorstChangeHandler = (event) => {
    setEnteredConcavityWorst(event.target.value);
  }; 
  const ConcavePointsWorstChangeHandler = (event) => {
    setEnteredConcavePointsWorst(event.target.value);
  }; 
  const SymmetryWorstChangeHandler = (event) => {
    setEnteredSymmetryWorst(event.target.value);
  }; 
  const FractalDimensionWorstChangeHandler = (event) => {
    setEnteredFractalDimensionWorst(event.target.value);
  }; 



  function handleSubmit(e) {
    e.preventDefault();
    const submittingValue = {
     'Id' : enteredId,
     'Diagnosis' : enteredDiagnosis,
     'RadiusMean' : enteredRadiusMean,
     'TextureMean' : enteredTextureMean,
     'PerimeterMean' :enteredPerimeterMean,
     'AreaMean' : enteredAreaMean,
     'SmoothnessMean' : enteredSmoothnessMean,
     'CompactnessMean' : enteredCompactnessMean,
     'ConcavityMean' : enteredConcavityMean,

     'ConcavePointsMean' : enteredConcavePointsMean,
     'SymmetryMean' : enteredSymmetryMean,
     'FractalDimensionMean' : enteredFractalDimensionMean,
     'RadiusSe' : enteredRadiusSe,
     'TextureSe' : enteredTextureSe,
     'PerimeterSe' : enteredPerimeterSe,
     'AreaSe' : enteredAreaSe,
     'SmoothnessSe' : enteredSmoothnessSe,
     'CompactnessSe' : enteredCompactnessSe,
     'ConcavitySe' : enteredConcavitySe,
     'ConcavePointsSe' : enteredConcavePointsSe,
     'SymmetrySe' : enteredSymmetrySe,
     'FractalDimensionSe' : enteredFractalDimensionSe,
     'RadiusWorst' : enteredRadiusWorst,
     'TextureWorst' : enteredTextureWorst,
     'PerimeterWorst' : enteredPerimeterWorst,
     'AreaWorst' : enteredAreaWorst,
     'SmoothnessWorst' : enteredSmoothnessWorst,
     'CompactnessWorst' : enteredCompactnessWorst,
     'ConcavityWorst' : enteredConcavityWorst,
     'ConcavePointsWorst' : enteredConcavePointsWorst,
     'SymmetryWorst' : enteredSymmetryWorst,
     'FractalDimensionWorst' : enteredFractalDimensionWorst
    };
   
    setEnteredId('');
    setEnteredDiagnosis('');
    setEnteredRadiusMean('');
    setEnteredTextureMean('');
    setEnteredPerimeterMean('');
    setEnteredAreaMean('');
    setEnteredSmoothnessMean('');
    setEnteredCompactnessMean('');
    setEnteredConcavityMean('');
    setEnteredConcavePointsMean('');
    setEnteredSymmetryMean('');
    setEnteredFractalDimensionMean('');
    setEnteredRadiusSe('');
    setEnteredTextureSe('');
    setEnteredPerimeterSe('');
    setEnteredAreaSe('');
    setEnteredSmoothnessSe('');
    setEnteredCompactnessSe('');
    setEnteredConcavitySe('');
    setEnteredConcavePointsSe('');
    setEnteredSymmetrySe('');
    setEnteredFractalDimensionSe('');
    setEnteredRadiusWorst('');
    setEnteredTextureWorst('');
    setEnteredPerimeterWorst('');
    setEnteredAreaWorst('');
    setEnteredSmoothnessWorst('');
    setEnteredConcavityWorst('');
    setEnteredConcavePointsWorst('');
    setEnteredSymmetryWorst('');
    setEnteredFractalDimensionWorst('');





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


    
    fetch('http://localhost:5000/BreastCancer',{
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

    fetch('http://localhost:5000/BreastCancer',{
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
  ID:
    <input type="number" name="Id" value={enteredId} onChange={IdChangeHandler} />
  </label>
  <br />
  <label>
  DIAGNOSIS:
    <input type="text" name="Diagnosis" value={enteredDiagnosis} onChange={DiagnosisChangeHandler} />
  </label>
  <br />
  <label>
  RADIUS_MEAN:
    <input type="number" name="RadiusMean" value={enteredRadiusMean} onChange={RadiusMeanChangeHandler}/>
  </label>
  <br />
  <label>
  TEXTURE_MEAN:
    <input type="number" name="TextureMean" value={enteredTextureMean} onChange={TextureMeanChangeHandler}/>
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
  SMOOTHNESS_MEAN:
    <input type="number" name="SmoothnessMean" value={enteredSmoothnessMean} onChange={SmoothnessMeanChangeHandler}/>
  </label>
  <br />
  <label>
  COMPACTNESS_MEAN:
    <input type="number" name="CompactnessMean" value={enteredCompactnessMean} onChange={CompactnessMeanChangeHandler}/>
  </label>
  <br />
  <label>
  CONCAVITY_MEAN:
    <input type="number" name="ConcavityMean" value={enteredConcavityMean} onChange={ConcavityMeanChangeHandler}/>
  </label>
  <br />
  <label>
  CONCAVE POINTS_MEAN:
    <input type="number" name="ConcavePointsMean" value={enteredConcavePointsMean} onChange={ConcavePointsMeanChangeHandler}/>
  </label>
  <br />
  <label>
  SYMMETRY_MEAN:
    <input type="number" name="SymmetryMean" value={enteredSymmetryMean} onChange={SymmetryMeanChangeHandler}/>
  </label>
  <br />
  <label>
  FRACTAL_DIMENSION_MEAN:
    <input type="number" name="FractalDimensionMean" value={enteredFractalDimensionMean} onChange={FractalDimensionMeanChangeHandler}/>
  </label>
  <br />
  <label>
  RADIUS_SE:
    <input type="number" name="RadiusSe" value={enteredRadiusSe} onChange={RadiusSeChangeHandler}/>
  </label>
  <br />
  <label>
  TEXTURE_SE:
    <input type="number" name="TextureSe" value={enteredTextureSe} onChange={TextureSeChangeHandler}/>
  </label>
  <br />
  <label>
  PERIMETER_SE:
    <input type="number" name="PerimeterSe" value={enteredPerimeterSe} onChange={PerimeterSeChangeHandler}/>
  </label>
  <br />
  <label>
  AREA_SE:
    <input type="number" name="AreaSe" value={enteredAreaSe} onChange={AreaSeChangeHandler}/>
  </label>
  <br />
  <label>
  SMOOTHNESS_SE:
    <input type="number" name="SmoothnessSe" value={enteredSmoothnessSe} onChange={SmoothnessSeChangeHandler}/>
  </label>
  <br />
  <label>
  COMPACTNESS_SE:
    <input type="number" name="CompactnessSe" value={enteredCompactnessSe} onChange={CompactnessSeChangeHandler}/>
  </label>
  <br />
  <label>
  CONCAVITY_SE:
    <input type="number" name="ConcavitySe" value={enteredConcavitySe} onChange={ConcavitySeChangeHandler}/>
  </label>
  <br />
  <label>
  CONCAVE POINTS_SE:
    <input type="number" name="ConcavePointsSe" value={enteredConcavePointsSe} onChange={ConcavePointsSeChangeHandler}/>
  </label>
  <br />
  <label>
  SYMMETRY_SE:
    <input type="number" name="SymmetrySe" value={enteredSymmetrySe} onChange={SymmetrySeChangeHandler}/>
  </label>
  <br />
  <label>
  FRACTAL_DIMENSION_SE:
    <input type="number" name="FractalDimensionSe" value={enteredFractalDimensionSe} onChange={FractalDimensionSeChangeHandler}/>
  </label>
  <br />
  <label>
  RADIUS_WORST:
    <input type="number" name="RadiusWorst" value={enteredRadiusWorst} onChange={RadiusWorstChangeHandler}/>
  </label>
  <br />
  <label>
  TEXTURE_WORST:
    <input type="number" name="TextureWorst" value={enteredTextureWorst} onChange={TextureWorstChangeHandler}/>
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
  SMOOTHNESS_WORST:
    <input type="number" name="SmoothnessWorst" value={enteredSmoothnessWorst} onChange={SmoothnessWorstChangeHandler}/>
  </label>
  <br />
  <label>
  COMPACTNESS_WORST:
    <input type="number" name="CompactnessWorst" value={enteredCompactnessWorst} onChange={CompactnessWorstChangeHandler}/>
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
  <label>
  SYMMETRY_WORST:
    <input type="number" name="SymmetryWorst" value={enteredSymmetryWorst} onChange={SymmetryWorstChangeHandler}/>
  </label>
  <br />
  <label>
  FRACTAL_DIMENSION_WORST:
    <input type="number" name="FractalDimensionWorst" value={enteredFractalDimensionWorst} onChange={FractalDimensionWorstChangeHandler}/>
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