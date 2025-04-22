import { assets } from "@/assets/assets";
import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom"
import { useClerk , UserButton, useUser} from "@clerk/clerk-react";
import { AppContext } from "@/Context/AppContext";

function Navbar() {

const {navigate , isEducator} = useContext(AppContext)

  const location = useLocation();
  const isCourseListPage = location.pathname.includes("/course-list");

  const {openSignIn} = useClerk()
  const {user} = useUser()
  return (
    <div
      className={`flex justify-between items-center px-4 sm:px-10 md:px-14 lg:px-36 py-4 border-b  ${
        isCourseListPage ? "bg-white" : "bg-cyan-100/70"
      } `}
    >
      <div className="flex items-center gap-1 cursor-pointer">
        <img
        onClick={()=> navigate('/')}
          src={"/Designer-removebg-preview.png"}
          alt="logo"
          className="w-8 lg:w-10 cursor-pointer"
        />
        <h1 className="text-2xl font-bold text-black md:block hidden ">
          Intel<span className="text-[#6A38C2]">Learn</span>
        </h1>
      </div>

      <div className="hidden md:flex items-center gap-5 text-gray-500">
        <div className=" flex items-center gap-5">
          {user && 
          <>
          <button onClick={()=> {navigate('/educator')}}
           className="cursor-pointer">{isEducator? 'Educator Dashboard' : 'Become Educator'}</button>|<Link to={"/my-enrollment"}> My Enrollment</Link>
          </>
           }
        </div>
        {user ? <UserButton/>:

          <button onClick={ ()=> openSignIn()} className="bg-[#6A38C2] text-white px-5 py-2 rounded-full cursor-pointer hover:bg-[#6A38C2]/80">
          Create Account
        </button>}
      </div>
{/* code for phoen screeen  */}
      <div className="md:hidden flex items-center gap-2 sm:gap-5 text-gray-500">
        <div className=" flex items-center gap-2 ">
        {user && 
          <>
           <button onClick={()=> {navigate('/educator')}}
           className="cursor-pointer">{isEducator? 'Educator Dashboard' : 'Become Educator'}</button>|<Link to={"/my-enrollment"}> My Enrollment</Link>
          </>
           }
        </div>
       { user ? <UserButton/> : 
        <button onClick={()=> openSignIn()} className="cursor-pointer" > <img src={assets.user_icon} alt="logo" /></button> }
      </div>
    </div>
  );
}

export default Navbar;
