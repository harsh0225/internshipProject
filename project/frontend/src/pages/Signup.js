import { Template } from "../component/Template";
import loginImg from "../assets/signup.png";

function Signup({ setIsLoggedIn,setUserData }) {
  return (
    <div>
      <Template 
        title = "Welcome Back"
        desc1 = "Join With Us"
        desc2 = "Eat well, stay well"
        image={loginImg}
        setIsLoggedIn={setIsLoggedIn}
        formtype = "signup"
        setUserData={setUserData}
      />
    </div>
  );
}

export default Signup;
