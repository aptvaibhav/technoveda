import React from "react";

export default function Diabetes() {
    return (
        <>
        <br />
        <br />
        <br />
        <form>
  <label>
  Pregnancies:
    <input type="text" name="Pregnancies" />
  </label>
  <br />
  <label>
  Glucose:
    <input type="text" name="Glucose" />
  </label>
  <br />
  <label>
  BloodPressure:
    <input type="text" name="BloodPressure" />
  </label>
  <br />
  <label>
  SkinThickness:
    <input type="text" name="SkinThickness" />
  </label>
  <br />
  <label>
  Insulin:
    <input type="text" name="Insulin" />
  </label>
  <br />
  <label>
  BMI:
    <input type="text" name="BMI" />
  </label>
  <br />
  <label>
  DiabetesPedigreeFunction:
    <input type="text" name="DiabetesPedigreeFunction" />
  </label>
  <br />
  <label>
  Age:
    <input type="text" name="Age" />
  </label>
  <br />
 
  <input type="submit" value="Submit" />
</form>
        </>
    );

}