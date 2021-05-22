import React from "react";
import { Link,NavLink } from "react-router-dom";


const CommonCard = (props) => {
    return (
        <>

        <div class="do-card">
            <img class="do-img" src={props.imgsrc} alt=""/>
            <div class="do-info">
                <h1 class="do-name">{props.diseaseName}</h1>
                <p class="do-detail">{props.diseaseDetail}</p>
                {/* <a href="" class="details">{props.btn}</a> */}

                <div class="details">
                    <Link to={props.link || '/'}>Fill Form</Link>
                    
                </div>

            </div>
        </div>

        </>
    );
};

export default CommonCard;