import React from "react";
<<<<<<< HEAD
import {NavLink} from "react-router-dom";
=======
import { Link,NavLink } from "react-router-dom";

>>>>>>> 739a6840c3127a1788a088d0711bccf5ef46d355

const CommonCard = (props) => {
    return (
      
        <>

        <div class="do-card">
            <img class="do-img" src={props.imgsrc} alt=""/>
            <div class="do-info">
                <h1 class="do-name">{props.diseaseName}</h1>
                <p class="do-detail">{props.diseaseDetail}</p>
<<<<<<< HEAD
             
                <NavLink to="{props.link}||/" class="details">{props.btn}</NavLink>
=======
                {/* <a href="" class="details">{props.btn}</a> */}

                <div class="details">
                    <Link to={props.link || '/'}>Fill Form</Link>
                    
                </div>

>>>>>>> 739a6840c3127a1788a088d0711bccf5ef46d355
            </div>
        </div>

        </>
    );
};

export default CommonCard;