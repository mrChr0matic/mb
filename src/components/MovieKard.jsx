import React from "react";

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
            <h3 className="text-orange-200 whitespace-normal">{Title.length>23?Title.substring(0,18)+"...":Title}</h3>
          </div>
        </div>
      </>
    );
  }

  export default MovieKard;