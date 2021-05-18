
import React from "react";
import donation2 from "../../../assets/donation2.jpg";
import { Link } from "react-router-dom";
export default function Login() {
return (
    <div className="SignUp">
      <div className="left-bar">
        <div className="top">
          <div>
            <div className="logo">
            <br />
           <br/>
              <h2>TechnoVeda</h2>
            </div>
          </div>
          <p>Login to become a part of this journey</p>
        </div>
        <img className="art" src={donation2} alt="Donation" style={{height:"300px"}} />
      </div>
      <div className="main-signup">
      <br />
        <h1>Login</h1>
        <div className="signup-form">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            // value={emailId}
            // onChange={handleChange("emailId")}
          />

          <label htmlFor="pass">Password</label>
          <input
            type="password"
            id="pass"
            // value={password}
            // onChange={handleChange("password")}
          />

          <button
            type="button"
            className="btn btn-danger"
            // onClick={handleSubmit}
          >
            Login{" "}
            <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
          </button>
          <h5 style={{ marginTop: "20px" }}>
            {" "}
            No Account. <Link to="/signup">Signup</Link>
          </h5>
          
          {/* {errors &&
            errors.map((item, index) => (
              <div className="alert alert-danger" role="alert">
                {item}
              </div>
            ))} */}
        </div>
      </div>
    </div>
  );
}