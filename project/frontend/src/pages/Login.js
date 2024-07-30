
import { Template } from "../component/Template";
import loginImg from "../assets/login.png";

function Login({ setIsLoggedIn,setUserData }) {
  return (
    <div className="h-[100vh]">
      <Template 
        title = "Welcome Back"
        desc1 = "Meals and memories makes here !!"
        desc2 = "Eat well, stay well"
        image={loginImg}
        setIsLoggedIn={setIsLoggedIn}
        formtype = "loggedIn"
        setUserData={setUserData}
      />
    </div>
  );
}

export default Login;
