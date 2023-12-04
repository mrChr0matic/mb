import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const SearchResult = (props) =>
{
    const navigate=useNavigate();

    const goToMovie = (event) => {
        console.log(props.movie.ISAN);
        navigate("/movie/"+props.movie.ISAN);
      }

    return (
        <div onClick={goToMovie} >
            <div className="z-50 searchResult rounded-lg bg-white/25 scale-90">
                <div className="movieImg">
                    <img className="movieImage" src={props.movie.poster} alt={props.movie.title} />
                </div>
                <div className="movieDesc">
                    <h2 className="font-sans text-3xl font-semibold">{props.movie.title}</h2>
                    <h3 className="font-sans text-lg">{props.movie.Genres.map(genre=>
                        <span>{genre.name+"   "}</span>)}
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default SearchResult;