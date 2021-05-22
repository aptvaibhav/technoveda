import React from "react";
import { Link,NavLink } from 'react-router-dom';

const CommonCard = (props) => {
    return (
        <>

        <div class="do-card">
            <img class="do-img" src={props.imgsrc} alt=""/>
            <div class="do-info">
                <h1 class="do-name">{props.diseaseName}</h1>
               
                <NavLink to={props.link} className='button'>{props.btn}</NavLink>
            </div>
        </div>

        </>
    );
};

export default CommonCard;