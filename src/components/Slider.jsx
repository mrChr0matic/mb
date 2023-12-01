import React from "react";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import MovieKard from "./MovieKard";


const movies=[{
    "Poster":"https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    "Title":"Batman v Superman: Dawn of Justice",
    "Type":"movie",
    "Year":"2016",
    "imdbID": "tt2975590"
  },
  {
    "Poster":"https://m.media-amazon.com/images/M/MV5BYTI0ZmI4NDItZGFlZC00M2E4LWIyZWEtMTFhMjQwYmU4MGNlXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_SX300.jpg",
    "Title":"Five Nights at Freddy's",
    "Type":"movie",
    "Year":"2023",
    "imdbID": "tt4589218"
  },
  {
    "Poster":"https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    "Title":"Interstellar",
    "Type":"movie",
    "Year":"",
    "imdbID": "tt0816692"
  },
  {
    "Poster":"https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    "Title":"Forrest Gump",
    "Type":"movie",
    "Year":"1994",
    "imdbID": "tt0109830"
  },
  {
    "Poster":"https://m.media-amazon.com/images/M/MV5BODQ0OWJiMzktYjNlYi00MzcwLThlZWMtMzRkYTY4ZDgxNzgxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    "Title":"Fight Club",
    "Type":"movie",
    "Year":"1999",
    "imdbID": "tt0137523"
  },
  {
    "Poster":"https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    "Title":"Batman v Superman: Dawn of Justice",
    "Type":"movie",
    "Year":"2016",
    "imdbID": "tt2975590"
  },
  {
    "Poster":"https://m.media-amazon.com/images/M/MV5BYTI0ZmI4NDItZGFlZC00M2E4LWIyZWEtMTFhMjQwYmU4MGNlXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_SX300.jpg",
    "Title":"Five Nights at Freddy's",
    "Type":"movie",
    "Year":"2023",
    "imdbID": "tt4589218"
  },
  {
    "Poster":"https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    "Title":"Interstellar",
    "Type":"movie",
    "Year":"",
    "imdbID": "tt0816692"
  },
  {
    "Poster":"https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    "Title":"Forrest Gump",
    "Type":"movie",
    "Year":"1994",
    "imdbID": "tt0109830"
  },
  {
    "Poster":"https://m.media-amazon.com/images/M/MV5BODQ0OWJiMzktYjNlYi00MzcwLThlZWMtMzRkYTY4ZDgxNzgxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    "Title":"Fight Club",
    "Type":"movie",
    "Year":"1999",
    "imdbID": "tt0137523"
  }
];

const Slider=()=>{
    const slideLeft = () => {
      var slider = document.getElementById('sliderw');
      slider.scrollLeft = slider.scrollLeft - 500;
    };
  
    const slideRight = () => {
      var slider = document.getElementById('sliderw');
      slider.scrollLeft = slider.scrollLeft + 500;
    };
    return(
      <>
        <div className='relative w-full flex items-center'>
          <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100 ' onClick={slideLeft} size={80} />
          <div id="sliderw" className='grid grid-flow-col grid-col-1 overflow-x-auto gap-2 whitespace-nowrap scroll scroll-smooth scrollbar-hide'>
            {movies.map(movie => 
            <MovieKard 
                movie={movie}
            />)};
          </div>
          
          <MdChevronRight className='z-2 sticky right-2 opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={80} />
        </div>
      </>
    );
  }

  export default Slider;