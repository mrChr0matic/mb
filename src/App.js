import React from "react";
import "./App.css"
import Home from "./Home";
import Login from "./components/Login";
import LoginAdmin from "./components/LoginAdmin";

const App = () =>
{
    const [LoginPage,setLoginPage] = React.useState(false);
    const [LoginAdminPage,setLoginAdminPage] = React.useState(false);


    return (
        <div>
            <Home
                setLoginPage={setLoginPage}
                setLoginAdminPage={setLoginAdminPage}
            />
            {LoginPage?<Login 
                setLoginPage={setLoginPage}
                setLoginAdminPage={setLoginAdminPage}
            />:LoginAdminPage?<LoginAdmin
                setLoginPage={setLoginPage}
                setLoginAdminPage={setLoginAdminPage}
             />:<></>}
        </div>
    )
}

export default App;
