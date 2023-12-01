import React,{ useState, useEffect } from 'react';
import './Home.css';
import SearchIcon from "../search.svg";

const SearchResult = () =>
{

    const API = "http://www.omdbapi.com?apikey=b6003d8a";
    const movie={
        "Poster":"https://m.media-amazon.com/images/M/MV5BYTI0ZmI4NDItZGFlZC00M2E4LWIyZWEtMTFhMjQwYmU4MGNlXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_SX300.jpg",
        "imdbID":"tt4589218",
        "Year":"2023",
        "Type":"movie",
        "Title":"Five Nights at Freddy's",
        "Genre":["Horror","Comedy"]
    };
    
    const [searchTerm, setSearchTerm]=useState('');
  const [movies, setMovies] = useState([]);
    useEffect(() => {
        searchMovies("Batman");
    }, []);

    const searchMovies = async (title) => {
        const response = await fetch(`${API}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    };

    return (
        <div>
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
            <div className="searchResult rounded-lg bg-white/25">
                <div className="movieImg">
                    <img className="movieImage" src={movie.Poster} alt={movie.Title} />
                </div>
                <div className="movieDesc">
                    <h2 className="font-sans text-3xl font-semibold">{movie.Title}</h2>
                    <h2 className="font-sans text-lg">{movie.Year}</h2>
                    <h3 className="font-sans text-lg">{movie.Genre.map(genre=>
                        <span>{genre+"   "}</span>)}
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default SearchResult;