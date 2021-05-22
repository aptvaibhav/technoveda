import React, {Suspense}  from "react";
import { Switch, Route ,BrowserRouter as Router} from "react-router-dom";
import Landing from "../src/components/Pages/Landing/Landing";
import Diabetes from "../src/components/Pages/Diseases/Diabetes";
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
    <Route exact path="/diabetes">
    <Diabetes />
    </Route>
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
