import {useEffect} from "react";
import "./Input.scss";

const Input = (props) => {

    useEffect(() => {

    }, []);

    return (
        <input className="login" style={{width: `${props.width}`, borderColor: `${props.borderColor}`}} type={props.type}/>
    );
}

export default Input;