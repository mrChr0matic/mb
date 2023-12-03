import React from "react";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import MovieKard from "./MovieKard";

const Slider=(props)=>{
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
            {props.movies.map((movie,index) => 
            <MovieKard 
                key={index}
                movie={movie}
            />)}
          </div>
          
          <MdChevronRight className='z-2 sticky right-2 opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={80} />
        </div>
      </>
    );
  }

  export default Slider;