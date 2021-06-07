import React from "react";
import curved from "../../../assets/curved.png";
import vector from "../../../assets/vector.png";
import { Link } from "react-router-dom";
export default function Landing() {
    return (
        <>
        <div className="landing">
        <img className="curved" src={curved} alt="curved" />

        <div className="center">
          <h4 className="text-center"> Welcome to Technoveda</h4>
          <h1 className="text-center"> Get yourself Diagnosed for free with us.</h1>
          <button
            type="button"
            // className="btn btn-light need-blood-btn"
            
          >
          <Link to="/diseases" className="btn btn-light need-blood-btn">
            Click to get Diagnosed
            </Link>
          </button>
        </div>
      </div>
      <div className="features">
        <h2> Features of this App</h2>
        <div className="feature-body">
          <div className="image">
            <img src={vector} alt="vector" />
          </div>
          <div className="points">
            <div className="bullets">
              <h4>
                <i className="fa fa-location-arrow" aria-hidden="true"></i>
                Disease Diagnosing
              </h4>
              <p>
                {" "}
                Get all your diseases diagnosed for free.
                Now no need to wait get yourself diagnosed! 
              </p>
            </div>
            <div className="bullets">
              <h4>
                {" "}
                <i className="fa fa-clock-o" aria-hidden="true"></i>Real Time
                Connect
              </h4>
              <p>
                No delays in getting consultation. Connect with doctors
                <br /> and get disease diagnosed in real time
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="tips" id="tips">
        <h2> Tips</h2>
        <p>
          {" "}
          Here are some tips to put your mind on if you want to live
          a healthy and fit lifestyle.
        </p>
        <div className="container">
          <div className="tips-info">
            <h4>Diagnose your Diseases</h4>
            <hr className="horizontal" />
            <ul>
              <li>
                Regular diagnosing of diseases is neccessary
              </li>
              <li>Have a proper sleep of atleast 8 hours</li>
              <li>Include more liquids in your diet</li>
            </ul>
          </div>
          <div className="tips-info">
            <h4> Doctors Consultation</h4>
            <hr className="horizontal" />
            <ul>
              <li>
                If you diagnosed and show positive consult a doctor immediately
              </li>
            
              <li> Avoid eating fast food</li>
            </ul>
          </div>
          <div className="tips-info">
            <h4>Some other tips</h4>
            <hr className="horizontal" />
            <ul>
              <li>
                Dont hasitate in asking questions
              </li>
              <li>Asks all your doubts and quaries with the doctors</li>
              <li>Follow a proper routine and lifestyle</li>
            </ul>
          </div>
        </div>
      </div>
      </>
        );
    }