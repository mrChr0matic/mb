import React,{ useState, useEffect } from 'react';
import './components/Home.css';
import "./App.css";
import Slider from './components/Slider.jsx';
import Header from './components/Header.jsx';
import axios from "axios"


var topRated=[];
var Trending=[];
var watchList=[];
var History=[];
var upcoming=[];

const API = "http://www.omdbapi.com?apikey=b6003d8a";

topRatedfn({"adminRating":"desc"})
TrendingFn({"userRating":"desc"});
 upcomingMovies({"release_date":"desc"});

function topRatedfn(obj){
    let data = JSON.stringify({
      type: obj
    });
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: "http://localhost:5000/movies/find/custom/",
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
    };
    axios.request(config)
        .then((response)=>{
            topRated = response.data;
        })
        .catch((error)=>{
            return [];
        })
}

function TrendingFn(obj){
  let data = JSON.stringify({
    type: obj
  });
  let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: "http://localhost:5000/movies/find/custom/",
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
  };
  axios.request(config)
      .then((response)=>{
          Trending = response.data;
      })
      .catch((error)=>{
          return [];
      })
}

function upcomingMovies(obj){
  let data = JSON.stringify({
    type: obj
  });
  let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: "http://localhost:5000/movies/find/custom/",
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
  };
  axios.request(config)
      .then((response)=>{
        upcoming = response.data;
        let temp = [];
        const cutoffDate = new Date("December 20, 2022");
        for (let i = 0; i < upcoming.length; i++) {
          if (new Date(upcoming[i].release_date) >= cutoffDate) {
            temp.push(upcoming[i]);
          }
        }        
        upcoming=temp;
        console.log(upcoming);
      })
      .catch((error)=>{
          return [];
      })
}


const Home = (props)=> {
    const [movies, setMovies] = useState([]);
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
    <Header />
    <div className="app font-medium ">  
        
        <div className="homeSlider TopRated">
            <h2 className="homeSliderText text-4xl">Top Rated</h2>
        </div>
        <Slider
            movies={topRated}
            setMovie={props.setMovie}
        />

      <div className="homeSlider Trending">
            <h2 className="homeSliderText text-4xl">Trending</h2>
        </div>
        <Slider
            movies={Trending}
            setMovie={props.setMovie}
        />

      <div className="homeSlider Trending">
            <h2 className="homeSliderText text-4xl">Trending</h2>
        </div>
        <Slider
            movies={upcoming}
            setMovie={props.setMovie}
        />
    </div>
    </>
  );
}

export default Home