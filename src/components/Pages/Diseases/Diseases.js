import React from "react";
import './diseaseCard.css';
import breast from "../../../assets/breastcancer.jpeg";
import liver from "../../../assets/liver.jpg";
import heart from "../../../assets/heart.jpeg";
import kidney from "../../../assets/kidney.jpeg";
import diabetes from "../../../assets/diabetes.jpg";
import cardio from "../../../assets/cardio.jpeg";
import CommonCard from './CommonCard';


const Diseases = () => {

    return (
        <>
        <br />
        <br />
        <br />
        <section class="past-web" id="web">
         
        <div class="do-cards">
        
            <CommonCard
                imgsrc={breast}
                diseaseName="Breast Cancer"
                
                btn="fill form"
                link="/BreastCancer"
            />
            <CommonCard
                imgsrc={cardio}
                diseaseName="Cardiovascular"
                
                btn="fill form"
                link="/Cardiovascular"
            />
            <CommonCard
                imgsrc={kidney}
                diseaseName="Chronic Kidney Disease"
                
                btn="fill form"
                link="CKD"
            />
            <CommonCard
                imgsrc={diabetes}
                diseaseName="Diabetes"
                
                btn="fill form"
                link="/Diabetes"
            />
            <CommonCard
                imgsrc={heart}
                diseaseName="Heart Disease"
              
                btn="fill form"
                link="heartDisease"
            />
            <CommonCard
                imgsrc={liver}
                diseaseName="Liver Patient"
              
                btn="fill form"
                link="LiverDisease"
            />

        </div>
        </section>


        </>
    );
};

export default Diseases;