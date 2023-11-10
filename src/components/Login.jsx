import LoginRegristrerenDesign from "./login-regristreren-design.jsx";
import rocLogo from "../assets/roc-logo.png";
import Input from "./inputs/Input.jsx";
import LoginButton from "./login-button.jsx";

const Login = () => {
  return (
    <div className="loginContainer">
      <div className="formContainer">
        <form action="">
          <div className="imgContainer">
            <img src={rocLogo} alt="roc logo" />
            <p>Log in met je ROC account</p>
          </div>
          <div className="inputs">
            <p>Email</p>
            <Input borderColor={"#FFA500"} width={"100%"} type={"email"} />
            <p>Wachtwoord</p>
            <Input borderColor={"#666666"} width={"100%"} type={"password"} />
            <LoginButton text={"login"} />
          </div>
        </form>
      </div>
      <div className="right-side">
        <LoginRegristrerenDesign text={"Life is... \n working together"} />
      </div>
    </div>
  );
};

export default Login;
