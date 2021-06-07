import React from "react";
import {NavLink} from "react-router-dom";

const CommonCard = (props) => {
    return (
      
        <>
         <NavLink to={props.link || '/'} class="details">
        <div class="do-card">
            <img class="do-img" style={{height:"250px"}} src={props.imgsrc} alt=""/>
            <div class="do-info">
                <h1 class="do-name">{props.diseaseName}</h1>
                <p class="do-detail">{props.diseaseDetail}</p>
             
                <NavLink to={props.link || '/'} class="details">{props.btn}</NavLink>
            </div>
        </div>
        </NavLink>

        </>
    );
};

export default CommonCard;