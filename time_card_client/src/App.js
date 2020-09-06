import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="adm-style-page">
        <div className="adm-style-page-top">
          <div className="a-s-p-top">
            <div className="asp-top-left">Adminde</div>
            <div className="asp-top-center"></div>
            <div className="asp-top-right">Sign Up / Sign In</div>
          </div>
          <div className="a-s-p-button">Here comes the slogan. <a href=""> Conoce mas. </a></div>
        </div>
        <div className="adm-style-page-top">
          <div className="a-s-p-top">
            <div className="asp-top-left"></div>
            <div className="asp-top-center" id="asp-center">
              <div className=".asp-center-top">
                <h1>La nueva herramenta</h1>
                <ul>
                  <li>Feature 1</li>
                  <li>Feature 2</li>
                  <li>Feature 3</li>
                </ul>
              </div>
              <div className=".asp-center-button">
                (c) adminde.com 2020
              </div>
            </div>
            <div className="asp-top-right"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
