import React from "react";
import './diseaseCard.css';
import stockImg from "../../../assets/stock.jpg";
import CommonCard from './CommonCard';
// import { Link } from 'react-router-dom';

const Diseases = () => {
var hit = "/breastcancer"
    return (
        <>

        <section class="past-web" id="web">
        <div class="do-heading">Heading</div>
        <div class="do-cards">
        
            <CommonCard
                imgsrc={stockImg}
                diseaseName="Breast Cancer"
                diseaseDetial="Disease Detail Here"
                btn="fill form"
                link={hit}
            />
            <CommonCard
                imgsrc={stockImg}
                diseaseName="Cardiovascular"
                diseaseDetial="Disease Detail Here"
                btn="fill form"
            />
            <CommonCard
                imgsrc={stockImg}
                diseaseName="Chronic Kedney Disease"
                diseaseDetial="Disease Detail Here"
                btn="fill form"
            />
            <CommonCard
                imgsrc={stockImg}
                diseaseName="Diabetes"
                diseaseDetial="Disease Detail Here"
                btn="fill form"
            />
            <CommonCard
                imgsrc={stockImg}
                diseaseName="Heart Disease"
                diseaseDetial="Disease Detail Here"
                btn="fill form"
            />
            <CommonCard
                imgsrc={stockImg}
                diseaseName="Liver Patient"
                diseaseDetial="Disease Detail Here"
                btn="fill form"
            />

        </div>
        </section>


        </>
    );
};

export default Diseases;