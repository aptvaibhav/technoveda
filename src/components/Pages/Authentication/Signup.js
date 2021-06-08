import React from "react";
import donation from "../../../assets/signup.png";
import { Link } from "react-router-dom";

export default function Signup() {
return (
    <>
      <div className="SignUp">
        <div className="left-bar">
          <div className="top">
            <div>

              <div className="logo">
                <h2>TechnoVeda</h2>
              </div>
            </div>
            <p>Signup to become a part of this journey</p>
          </div>
          <img className="art" src={donation} alt="Donation" style={{height:"250px"}}/>
        </div>
        <div className="main-signup">
        <br />
        <br />
          <h1>Sign Up</h1>
          <div className="signup-form">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
            //   value={emailId}
            //   onChange={handleChange("emailId")}
            />

            <label htmlFor="fullname">Full Name</label>
            <input
              type="text"
              id="fullname"
            //   value={name}
            //   onChange={handleChange("name")}
            />

            <label htmlFor="phone_number">Phone Number</label>
            <input
              type="number"
              id="phone_number"
            //   value={phoneNumber}
            //   onChange={handleChange("phoneNumber")}
            />

            <label htmlFor="pass">Password</label>
            <input
              type="password"
              id="pass"
            //   value={password}
            //   onChange={handleChange("password")}
            />
            <label htmlFor="blood_group">Blood group</label>
            <select
              name="blood_grp"
            //   value={bloodGroup}
            //   onChange={handleChange("bloodGroup")}
            >
              <option defaultValue>...</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
            {/* <label htmlFor="address">State</label>
            <select name="state" value={state} onChange={handleChange("state")}>
              <option default value="">
                ...
              </option>
              {uniqueStates.map((item, index) => (
                <option value={item}>{item}</option>
              ))}
            </select>
            <label htmlFor="address">City</label>
            <select name="city" value={city} onChange={handleChange("city")}>
              {cities.map((item) => (
                <option value={item.city}>{item.city}</option>
              ))}
            </select> */}

            <button
              type="button"
              className="btn btn-danger"
            //   onClick={(e) => {
            //     e.preventDefault();

            //     addUser({
            //       variables: {
            //         name,
            //         emailId,
            //         password,
            //         bloodGroup,
            //         state,
            //         phoneNumber,
            //         city,
            //       },
            //     })
            //       .then((res) => {
            //         console.log(res);
            //         seterrors([]);
            //         history.push("/login");
            //         console.log(loading);
            //       })
            //       .catch((err) => {
            //         seterrors([err.message]);
            //       });
            //   }}
            >
              Sign up{" "}
              <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
            </button>
            {/* {loading && <Loading />} */}
            <h5 style={{ marginTop: "20px" }}>
              {" "}
              Already have an account? <Link to="/login">Login</Link>
            </h5>
         
            {/* {errors &&
              errors.map((item, index) => (
                <div key={index} className="alert alert-danger" role="alert">
                  {item}
                </div> */}
              {/* ))} */}
          </div>
        </div>
      </div>
    </>
  );
}