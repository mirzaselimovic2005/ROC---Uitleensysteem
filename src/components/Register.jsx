import rocLogo from "../assets/roc-logo.png";
import Input from "./inputs/Input.jsx";
import LoginButton from "./login-button.jsx";
import LoginRegristrerenDesign from "./login-regristreren-design.jsx";

const Register = () => {


    return (
        <div className="registerContainer">
            <div className="left-side">
                <LoginRegristrerenDesign text={'Life is... \n working together'}></LoginRegristrerenDesign>
            </div>
            <div className="formContainer">
                <form action="">
                    <div className="imgContainer">
                        <img src={rocLogo} alt="roc logo"/>
                        <p>Log in met je ROC account</p>
                    </div>
                    <div className="inputs">
                        <div className="links">
                            <p>Voornaam</p>
                            <Input borderColor={"#FFA500"} width={"100%"} type={"text"}/>
                            <p>Achternaam</p>
                            <Input borderColor={"#FFA500"} width={"100%"} type={"text"}/>
                            <p>Email</p>
                            <Input borderColor={"#666666"} width={"100%"} type={"email"}/>
                            <p>Wachtwoord</p>
                            <Input borderColor={"#666666"} width={"100%"} type={"password"}/>
                            <p>Wachtwoord herhalen</p>
                            <Input borderColor={"#666666"} width={"100%"} type={"password"}/>
                            <LoginButton text={'Account aanmaken'}/>
                        </div>
                        <div className="rechts">
                            <p>Tussenvoegsel</p>
                            <Input borderColor={"#666666"} width={"100%"} />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;