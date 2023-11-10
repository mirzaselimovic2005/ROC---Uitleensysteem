import React from "react";
import roc_logo from "../assets/roc-logo.png";
import roc_kid from "../assets/roc-kid.png";
import cirkel from "../assets/cirkel.png";
import {useEffect} from "react";


const LoginRegristrerenDesign = (props) => {
  
  useEffect(() => {

  }, []);

    return (
      <div className="LoginRegristrerenDesign">
        <div className="container">
          <img className="logo-cirkle" src={cirkel} alt="cirkel"/>
            <div className="container-inner">
              <h1 className="header-text">{props.text}</h1>
            <img className="roc_kid" src={roc_kid} alt="kind"/>
            </div>
        </div>
      </div>
    );
}

export default LoginRegristrerenDesign;

