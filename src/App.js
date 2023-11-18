import React,{ useState, useEffect } from 'react';
import './App.css';
import SearchIcon from "./search.svg";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
const imgurl='https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg' ;
const API = "http://www.omdbapi.com?apikey=b6003d8a";
let moviex={
  "Poster":"https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  "Title":"Batman v Superman: Dawn of Justice",
  "Type":"movie",
  "Year":"2016",
  "imdbID": "tt2975590"
}

const App = ()=> {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm]=useState('');
  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  
  console.log(movies);
  return(
    <>
    
    <div className="app font-medium ">
        <div className="search">
          <div className="logo text-primary">NFX</div>
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
        <LoginButton/>
    </div>
    </>
  );
}
// const LoginButton
const MovieKard=({ movie: { imdbID, Year, Poster, Title, Type } })=>{
  return(
    <>
      <div className="flex-shrink-0 m-2 w-[220px] inline-block cursor-pointer group relative rounded-lg overflow-hidden hover:scale-105 ease-in-out duration-300">
        <div className="text-gray absolute top-2 left-2 bg-transparent opacity-0 group-hover:opacity-50">{Year}</div>
        <div  className='group-hover:opacity-50'>
          <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
        </div>
        <div className='absolute bottom-0 right-0 left-0 px-5 py-4 bg-zinc-600 group-hover:bg-transparent ease-in-out duration-500'>
          <span className='text-transform: uppercase text-sm'>{Type}</span>
          <h3 className="text-orange-200 whitespace-normal">{Title}</h3>
        </div>
      </div>
    </>
  );
}

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
          <MovieKard  movie={moviex}/>
          <MovieKard  movie={moviex}/>
          <MovieKard  movie={moviex}/>
          <MovieKard  movie={moviex}/>
          <MovieKard  movie={moviex}/>
          <MovieKard  movie={moviex}/>
          <MovieKard  movie={moviex}/>
          <MovieKard  movie={moviex}/>
          <MovieKard  movie={moviex}/>
          <MovieKard  movie={moviex}/>
          <MovieKard  movie={moviex}/>
        </div>
        
        <MdChevronRight className='z-2 sticky right-2 opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={80} />
      </div>
    </>
  );
}

const LoginButton= ()=>{
  return(
    <>
    <div className="flex">
      <button className="m-2 px-4 py-2 text-lg rounded-lg bg-orange-600 border-2 text-white  border-orange-600 transition-transform transform hover:scale-105 hover:bg-transparent hover:text-orange-600 ease-in-out duration-300">Login</button>
    </div></>

  )
}
export default App;
