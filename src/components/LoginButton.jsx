import React from "react";


const LoginButton= (props)=>{
    const ToggleLogin = () =>
    {
        props.setLoginPage(true);
    }

    return(
      <>
      <div className="flex">
        <button className="m-2 px-4 py-2 text-lg rounded-lg bg-orange-600 border-2 text-white  border-orange-600 transition-transform transform hover:scale-105 hover:bg-transparent hover:text-orange-600 ease-in-out duration-300" onClick={ToggleLogin}>Login</button>
      </div></>
  
    )
  }

export default LoginButton;