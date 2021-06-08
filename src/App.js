import React, {Suspense}  from "react";
import { Switch, Route ,BrowserRouter as Router} from "react-router-dom";
import Landing from "../src/components/Pages/Landing/Landing";
import Diseases from "../src/components/Pages/Diseases/Diseases";

import Diabetes from "../src/components/Pages/Diseases/Diabetes";
import BreastCancer from "../src/components/Pages/Diseases/BreastCancer";
import Cardiovascular from "../src/components/Pages/Diseases/Cardiovascular";
import heartDisease from "../src/components/Pages/Diseases/heart-disease";
import LiverDisease from "../src/components/Pages/Diseases/Liver-patient";
import CKD from "../src/components/Pages/Diseases/CKD";

import Footer from "../src/components/Pages/Footer/Footer";
import Loading from "../src/components/Pages/Loading/Loading";
import Navbar from "../src/components/Pages/Navbar/Navbar";
import Login from "../src/components/Pages/Authentication/Login";
import Signup from "../src/components/Pages/Authentication/Signup";


import "./App.css";
export default function App() {
  console.log("%cSTOP!", "font-size: 50px; color: red");
  console.log(
    "%cThis is ah browser feature intended for developers. If someone told you to copy-paste something here, it is a scam.",
    "font-size: 20px;"
  );
  return (
   <Router>
    <Switch>
    <Suspense fallback={<Loading />}>
   <Navbar />
    <Route exact path="/">
    <Landing />
    {/* <Footer /> */}
    </Route>


    <Route exact path="/Diseases" component={Diseases} />
    
    
   
  
    <Route exact path="/Diabetes" component={Diabetes} />
    <Route exact path="/BreastCancer" component={BreastCancer} />
    <Route exact path="/Cardiovascular" component={Cardiovascular} />
    <Route exact path="/heartDisease" component={heartDisease} />
    <Route exact path="/LiverDisease" component={LiverDisease} />
    <Route exact path="/CKD" component={CKD} />


    <Route exact path="/login">
    <Login />
    </Route>
    <Route exact path="/signup">
    <Signup />
    </Route>
    <Footer />
    </Suspense>
    </Switch>
    </Router>
    );
}
