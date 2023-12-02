import React from 'react';
import './Home.css';

const SearchResult = (props) =>
{
    return (
        <div>
            <div className="searchResult rounded-lg bg-white/25 scale-90">
                <div className="movieImg">
                    <img className="movieImage" src={props.movie.Poster} alt={props.movie.Title} />
                </div>
                <div className="movieDesc">
                    <h2 className="font-sans text-3xl font-semibold">{props.movie.Title}</h2>
                    <h2 className="font-sans text-lg">{props.movie.Year}</h2>
                    <h3 className="font-sans text-lg">{props.movie.Genre.map(genre=>
                        <span>{genre+"   "}</span>)}
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default SearchResult;