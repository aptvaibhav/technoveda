import React from "react";
import logo from "../../../assets/blood.png";
export default function Diseases() {
    return (
<div>
<br />
<div class="card" style={{width: "18rem;"}}>
<img src={logo} class="card-img-top" alt="logo" height="40" width="100" style={{marginTop:"10px"}}/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" class="btn btn-primary">Go somewhere</a>
  </div>
  </div>
</div>
    );
}