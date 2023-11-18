import React,{ useState, useEffect } from 'react';
import './components/Home.css';
import SearchIcon from "./search.svg";
import Slider from './components/Slider.jsx';
import LoginButton from './components/LoginButton.jsx';


const API = "http://www.omdbapi.com?apikey=b6003d8a";

const Home = (props)=> {
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

  
  return(
    <>
    <div className="app font-medium ">  
        <div className="header">
            <div className="logo text-primary">NFX</div>
            <div></div>
            <LoginButton
                    setLoginPage={props.setLoginPage} 
            />
        </div>
        <div className="search">
                <input type="text" placeholder="Search for movies" value={searchTerm}
                    onChange={(event)=>{
                    setSearchTerm(event.target.value);
                    }}
                />
                <img src={SearchIcon} alt="search" onClick={()=>{
                    searchMovies(searchTerm);
                }}/>
            </div>
        {/* {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div> */}
        <Slider/>
    </div>
    </>
  );
}

export default Home