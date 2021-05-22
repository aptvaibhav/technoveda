import React from "react";

const CommonCard = (props) => {
    return (
        <>

        <div class="do-card">
            <img class="do-img" src={props.imgsrc} alt=""/>
            <div class="do-info">
                <h1 class="do-name">{props.diseaseName}</h1>
                <p class="do-detail">{props.diseaseDetail}</p>
                <a href="{props.link}" class="details">{props.btn}</a>
            </div>
        </div>

        </>
    );
};

export default CommonCard;