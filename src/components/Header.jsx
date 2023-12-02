import React,{ useState, useEffect } from 'react';
import './Home.css';
import SearchIcon from "../search.svg";
import LoginButton from './LoginButton.jsx';

const API = "http://www.omdbapi.com?apikey=b6003d8a";

const Header = (props) =>
{
    
    const [movies, setMovies] = useState([]);
    console.log(movies);
    const [searchTerm, setSearchTerm]=useState('');
    useEffect(() => {
        searchMovies("Batman");
    }, []);

    const searchMovies = async (title) => {
        const response = await fetch(`${API}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    };

    return (
    <div className="mt-[4%] grid grid-flow-row grid-rows-1 grid-cols-6 justify-items-center align-middle mb-3 w-full gap-4">
        <div className="logo text-red-600 col-span-1 m-0">
            MB
        </div>
        <div className="relative col-span-4 align-middle w-full max-w-xl">
            <input type="text" placeholder="Search for movies" value={searchTerm} className='w-full rounded-full p-2 my-1 text-white bg-gblack focus:border-0 shadow-lg shadow-slate-600/10'
                onChange={(event)=>{
                setSearchTerm(event.target.value);
                }}
            />
            <img src={SearchIcon} alt="search" className="absolute top-[2px] right-0 scale-50" onClick={()=>{
                searchMovies(searchTerm);
            }}/>
        </div>
        <LoginButton
            setLoginPage={props.setLoginPage}
            className="col-span-1"
        />
    </div>
    );
}

export default Header;