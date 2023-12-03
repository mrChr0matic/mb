import React,{ useState, useEffect } from 'react';
import './Home.css';
import SearchIcon from "../search.svg";
import LoginButton from './LoginButton.jsx';
import Login from './Login.jsx';
import LoginAdmin from './LoginAdmin.jsx';
import Register from "./Register.jsx";
import { useNavigate } from 'react-router-dom';

const API = "http://www.omdbapi.com?apikey=b6003d8a";

const Header = (props) =>
{
    const [LoginPage,setLoginPage] = React.useState(false);
    const [LoginAdminPage,setLoginAdminPage] = React.useState(false);
    const [RegisterPage,setRegisterPage] = React.useState(false);
    const [searchValue,setSearchValue] = React.useState("");
    const navigate=useNavigate();

    const searchMovies=()=>
    {
        navigate("/search");
    }

    return (
    <div>
        <div className="mt-[4%] grid grid-flow-row grid-rows-1 grid-cols-6 justify-items-center align-middle mb-3 w-full gap-4">
            <div className="logo text-red-600 col-span-1 m-0">
                MB
            </div>
            <div className="relative col-span-4 align-middle w-full max-w-xl">
                    <input type="text" placeholder="Search for movies" value={searchValue} className='w-full rounded-full p-2 my-1 text-white bg-gblack focus:border-0 shadow-lg shadow-slate-600/10'
                        onChange={(event)=>{
                        setSearchValue(event.target.value);
                        }}
                    />
                    <button type="submit"><img src={SearchIcon} alt="search" className="absolute top-[2px] right-0 scale-50" onClick={()=>{
                        searchMovies(searchValue);
                    }}/></button>
            </div>
            <LoginButton
                setLoginPage={setLoginPage}
                className="col-span-1"
            />
        </div>
        {LoginPage?<Login setLoginPage={setLoginPage} setLoginAdminPage={setLoginAdminPage} setRegisterPage={setRegisterPage} />:LoginAdminPage?<LoginAdmin setLoginPage={setLoginPage} setLoginAdminPage={setLoginAdminPage} setRegisterPage={setRegisterPage} />:RegisterPage?<Register setLoginPage={setLoginPage} setLoginAdminPage={setLoginAdminPage} setRegisterPage={setRegisterPage} />:<></>}
    </div>
    );
}

export default Header;