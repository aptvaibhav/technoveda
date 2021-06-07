import React from "react";

export default function Footer() {
  return (
    <div>
      <footer class="site-footer">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <h6>About</h6>
              <p class="text-justify">
                TechnoVeda is a step towards bridging the gap between health and fitness.
                We are trying to provide disease diagnosing and doctors consultation facilities to 
                everyone for free. Peace!!!
                {" "} 
              </p>
              
            </div>

            <div class="col-xs-6 col-md-3">
              <h6>Tech Stack</h6>
              <ul class="footer-links">
                <li>Flask</li>
                <li>Python</li>
                <li>Javascript</li>
                <li>Machine Learning</li>
                <li>React.js</li>
                <li>Bootstrap</li>
              </ul>
            </div>

            <div class="col-xs-6 col-md-3">
              <h6>About Us</h6>
              <ul class="footer-links">
                <li>
                 <a href="https://www.linkedin.com/in/vaibhav-tyagi-4060781a0/">
                   Vaibhav Tyagi
                   </a>
                </li>

                <li>
                <a href="https://www.linkedin.com/in/gaurav-singh-b90369191/">
                  Gaurav Singh
                  </a>
                </li>
                <li>
                <a href="https://www.linkedin.com/in/sumit-rohilla-49a2851a0/">
                  Sumit Rohilla
                  </a>
                </li>
                
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-sm-6 col-xs-12">
              <p class="copyright-text">
                Copyright &copy; {new Date().getFullYear()} All Rights Reserved
                by TechnoVeda
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}