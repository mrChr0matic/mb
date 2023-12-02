import React from "react";


const LoginButton= (props)=>{
    const ToggleLogin = () =>
    {
        props.setLoginPage(true);
    }

    return(
      <>
        <button className="mx-2 p-0 px-2 text-md text-gblack rounded-full bg-red-600 border-2 w-[70px] h-[40px] border-red-600 transition-transform transform hover:scale-105 hover:bg-transparent hover:text-red-600 ease-in-out duration-300" onClick={ToggleLogin}>Login</button>
        </>
  
    )
  }

export default LoginButton;