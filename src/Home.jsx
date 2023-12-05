import React from 'react';
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

topRatedfn({"adminRating":"desc"})
TrendingFn({"userRating":"desc"});
 upcomingMovies({"release_date":"desc"});


 function getWatchlist(user){
  // console.log("hi");
  let config = {
      method: 'get',
      maxBodyLength: Infinity,
      headers:{
          'authorization': user,
          'Content-Type': 'application/json'
      },
      url: 'http://localhost:5000/user/watchlist/',
  };
  axios.request(config)
      .then((response)=>{
          watchList=response.data;   
      })
      .catch((error)=>{
          console.log(error);
          return [];
      })
}
function getHistory(user){
  let config = {
      method: 'get',
      maxBodyLength: Infinity,
      headers:{
          'authorization': user,
          'Content-Type': 'application/json'
      },
      url: 'http://localhost:5000/user/history/',
  };
  axios.request(config)
      .then((response)=>{
          History=response.data;
      })
      .catch((error)=>{
          console.log(error);
          return [];
      })
}

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
            console.log(response.data);
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
        const cutoffDate = new Date();
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

    if(props.userID !== "")
    {
      getWatchlist("USER "+props.userID)
      getHistory("USER "+props.userID)
    }
























    
  
  return(
    <>
    <Header
      isAuthenticated={props.isAuthenticated}
      setIsAuthenticated={props.setIsAuthenticated}
      isAdmin={props.isAdmin}
      setIsAdmin={props.setIsAdmin}
      setUserID={props.setUserID}
    />
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

        <div className="homeSlider upcoming">
            <h2 className="homeSliderText text-4xl">Upcoming</h2>
        </div>
        <Slider
            movies={upcoming}
            setMovie={props.setMovie}
        />
        {props.userID===""?<></>:<><div className="homeSlider watchList"><h2 className="homeSliderText text-4xl">WatchList</h2></div>
        <Slider
            movies={watchList}
            setMovie={props.setMovie}
        />
        <div className="homeSlider watchList">
            <h2 className="homeSliderText text-4xl">History</h2>
        </div>
        <Slider
            movies={History}
            setMovie={props.setMovie}
        /></>}

    </div>
    </>
  );
}

export default Home