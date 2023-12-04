import React from "react";
import { useNavigate } from "react-router-dom";

const CreateMovie = ()=>
{
    const navigate=useNavigate();

    const goHome = () =>
    {
        navigate("/");
    }

    return (
        <div>
            <h2>ERROR</h2>
            <button onClick={goHome}>CLICK HERE TO GO BACK HOME</button>
        </div>
    )
}

export default CreateMovie;