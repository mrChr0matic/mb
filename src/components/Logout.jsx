import React from "react";


const LogOutButton= (props)=>{
    const ToggleLogOut = () =>
    {
        props.setIsAuthenticated(false);
        props.setIsAdmin(false);
        props.setUserID("");
    }

    return(
      <>
        <button className="mx-2 p-0 px-2 text-md text-gblack rounded-full bg-red-600 border-2 h-[40px] border-red-600 transition-transform transform hover:scale-105 hover:bg-transparent hover:text-red-600 ease-in-out duration-300" onClick={ToggleLogOut}>LogOut</button>
        </>
  
    )
  }

export default LogOutButton;