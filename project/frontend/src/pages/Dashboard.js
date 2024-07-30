import { Admin } from "../component/AdminDashboard/Admin";
import { Sidebar } from "../component/AdminDashboard/Sidebar";
import { Outlet } from "react-router-dom";
import { UserSidebar } from "../component/UserDashboard/UserSidebar";


function Dashboard(props) {

  let userData = props.userData
  
  return (
    <div className=" h-[100vh]">
        <div className='relative flex min-h-[calc(100vh)-3.5rem] h-[100vh]'>
          {
            userData?.accountType == "Admin"
            ?
            (<Sidebar/> )
            :
            (<UserSidebar/>)
          }
          <div className='h-[calc(100vh)-3.5rem] overflow-auto pb-[300px] '>
              <div className='mx-auto w-full my-10 pl-[50px]'>
                  <Outlet/>
              </div>
          </div>
        </div>
    </div>
  );
}

export default Dashboard;
