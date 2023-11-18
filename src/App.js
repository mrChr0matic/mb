import React from "react";
import "./App.css"
import Login from "./components/Login.jsx";
import Home from "./Home.jsx"

const App = () =>
{
    const [LoginPage,setLoginPage] = React.useState(false);


    return (
        <div>
            <Home
                setLoginPage={setLoginPage}
            />
            {LoginPage?<Login 
                setLoginPage={setLoginPage}
            />:<></>}
        </div>
    )
}

export default App;
