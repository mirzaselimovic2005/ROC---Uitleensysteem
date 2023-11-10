import React from "react";
import {useEffect} from "react";

const LoginButton = (prop) => {

    useEffect(() => {

    }, []);

    return (
        <div>
            <button className="login-button">{prop.text}</button>
        </div>
    )
    }
export default LoginButton;
