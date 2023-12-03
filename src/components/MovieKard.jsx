import React from "react";
import { useNavigate } from 'react-router-dom';

const MovieKard=(props)=>{

  const navigate = useNavigate();
  
  const goToMovie = () => {
    props.setMovie(props.movie.ISAN);
    navigate("/movie/"+props.movie.ISAN);
  }

    return(
      <>
        <div onClick={goToMovie} className="flex-shrink-0 m-2 w-[220px] inline-block cursor-pointer group relative rounded-lg overflow-hidden hover:scale-105 ease-in-out duration-300">
          <div className="text-gray absolute top-2 left-2 bg-transparent opacity-0 group-hover:opacity-50">2023</div>
          <div  className='group-hover:opacity-50'>
            <img  src={props.movie.poster !== "N/A" ? props.movie.poster : "https://via.placeholder.com/400"} alt={props.movie.title} />
          </div>
          <div className='absolute bottom-0 right-0 left-0 px-5 py-4 bg-zinc-600 group-hover:bg-transparent ease-in-out duration-500'>
            <span className='text-transform: uppercase text-sm'>Movie</span>
            <h3 className="text-orange-200 whitespace-normal">{props.movie.title.length>23?props.movie.title.substring(0,18)+"...":props.movietitle}</h3>
          </div>
        </div>
      </>
    );
  }

  export default MovieKard;