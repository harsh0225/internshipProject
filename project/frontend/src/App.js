import "./App.css";
import Navbar from "./component/Navbar"
import {Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard";
import { useEffect, useState } from "react";
import {PrivateRoute} from "./component/PrivateRoute";
import { AllOrder } from "./component/AdminDashboard/AllOrder";
import { AllMenu } from "./component/AdminDashboard/AllMenu";
import { Addmenu } from "./component/AdminDashboard/Addmenu";
import { useNavigate } from "react-router-dom";
import { Profile } from "./component/UserDashboard/Profile";
import { UserOrders } from "./component/UserDashboard/UserOrders";
import { AddOrder } from "./component/Order/AddOrder";
import About from "./component/About";


function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const [userData,setUserData] = useState(null);
  const [orderData,setOrderData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(userData)
  },[userData])

  useEffect(() => {
    if(!userData)
    {
      navigate("/")
    }
  },[userData])

  return (
    <div className="w-[100%]  min-h-screen bg-richblack-900 flex flex-col text-white relative">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setUserData={setUserData} userData={userData}/>
        <Routes>
          <Route path="/" element={<Home setOrderData={setOrderData} isLoggedIn={isLoggedIn}/>}></Route>
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setUserData={setUserData}/>}/>
          <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} setUserData={setUserData}/>}/>
          <Route path="/about" element={<About setIsLoggedIn={setIsLoggedIn} setUserData={setUserData}/>}/>
      
          <Route path="/" element={<Dashboard userData={userData}/>}>
              { userData?.accountType === "Admin"  && (<Route index path="/dashboard/allorder" element={<AllOrder/>}/> )}
              {  userData?.accountType == "Admin"  &&(<Route path="/dashboard/allmenu" element={<AllMenu/>}/>)}
              { userData?.accountType == "Admin"  &&(<Route path="/dashboard/addmenu" element={<Addmenu/>}/>)}

              { userData?.accountType === "User"  && (<Route index path="/dashboard/profile" element={<Profile userData={userData}/>}/>)}
              { userData?.accountType == "User"  &&(<Route path="/dashboard/userorders" element={<UserOrders userData={userData}/>}/>)}

          </Route>
      
        </Routes>

        <div className="fixed top-[23%] left-[37%] z-20">
          {
            orderData && <AddOrder orderData={orderData} setOrderData={setOrderData} userData={userData}/>
          }
        </div>

        {
          orderData && <div className=" fixed w-screen h-screen backdrop-blur-[5px] z-10"></div>
        }

    </div>
    );
}

export default App;
