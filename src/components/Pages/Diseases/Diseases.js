import React from "react";
import './diseaseCard.css';
import stockImg from "../../../assets/stock.jpg";
import CommonCard from './CommonCard';


const Diseases = () => {

    return (
        <>

        <section class="past-web" id="web">
         
        <div class="do-cards">
        
            <CommonCard
                imgsrc={stockImg}
                diseaseName="Breast Cancer"
                diseaseDetail="Disease Detail Here"
                btn="fill form"
                link="/BreastCancer"
            />
            <CommonCard
                imgsrc={stockImg}
                diseaseName="Cardiovascular"
                diseaseDetial="Disease Detail Here"
                btn="fill form"
                link="/Cardiovascular"
            />
            <CommonCard
                imgsrc={stockImg}
                diseaseName="Chronic Kidney Disease"
                diseaseDetial="Disease Detail Here"
                btn="fill form"
                link="CKD"
            />
            <CommonCard
                imgsrc={stockImg}
                diseaseName="Diabetes"
                diseaseDetial="Disease Detail Here"
                btn="fill form"
                link="/Diabetes"
            />
            <CommonCard
                imgsrc={stockImg}
                diseaseName="Heart Disease"
                diseaseDetial="Disease Detail Here"
                btn="fill form"
                link="heartDisease"
            />
            <CommonCard
                imgsrc={stockImg}
                diseaseName="Liver Patient"
                diseaseDetial="Disease Detail Here"
                btn="fill form"
                link="LiverDisease"
            />

        </div>
        </section>


        </>
    );
};

export default Diseases;