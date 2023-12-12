import React, { useState, useEffect } from 'react';
import './components/Home.css';
import './App.css';
import Slider from './components/Slider.jsx';
import Header from './components/Header.jsx';
import axios from 'axios';

const Home = (props) => {
  const [topRated, setTopRated] = useState([]);
  const [trending, setTrending] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [editorsChoice, setEditorsChoice] = useState([]);
  const [watchList, setWatchList] = useState([]);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch Top Rated movies
        const topRatedResponse = await axios.post(
          'https://moviebase-jz8c.onrender.com/movies/find/custom/',
          { type: { adminRating: 'desc' } }
        );
        setTopRated(topRatedResponse.data);

        // Fetch Trending movies
        const trendingResponse = await axios.post(
          'https://moviebase-jz8c.onrender.com/movies/find/custom/',
          { type: { userRating: 'desc' } }
        );
        setTrending(trendingResponse.data);

        // Fetch Upcoming movies
        const upcomingResponse = await axios.post(
          'https://moviebase-jz8c.onrender.com/movies/find/custom/',
          { type: { release_date: 'desc' } }
        );
        const tempUpcoming = upcomingResponse.data.filter(
          (movie) => new Date(movie.release_date) >= new Date()
        );
        setUpcoming(tempUpcoming);

        // Fetch Editors Choice
        const editorsChoiceResponse = await axios.get(
          'https://moviebase-jz8c.onrender.com/editors/find'
        );
        setEditorsChoice(editorsChoiceResponse.data);

        // Fetch Watchlist
        if (props.userID) {
          const watchListResponse = await axios.get(
            `https://moviebase-jz8c.onrender.com/user/watchlist/`,
            {
              headers: {
                authorization: `USER ${props.userID}`,
                'Content-Type': 'application/json',
              },
            }
          );
          setWatchList(watchListResponse.data);
        }

        // Fetch History
        if (props.userID) {
          const historyResponse = await axios.get(
            `https://moviebase-jz8c.onrender.com/user/history/`,
            {
              headers: {
                authorization: `USER ${props.userID}`,
                'Content-Type': 'application/json',
              },
            }
          );
          setHistory(historyResponse.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [props.userID]);

  return (
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
        <Slider movies={topRated} setMovie={props.setMovie} />

        <div className="homeSlider Trending">
          <h2 className="homeSliderText text-4xl">Trending</h2>
        </div>
        <Slider movies={trending} setMovie={props.setMovie} />

        <div className="homeSlider upcoming">
          <h2 className="homeSliderText text-4xl">Upcoming</h2>
        </div>
        <Slider movies={upcoming} setMovie={props.setMovie} />

        <div className="homeSlider Trending">
          <h2 className="homeSliderText text-4xl">Editors Choice</h2>
        </div>
        <Slider movies={editorsChoice} setMovie={props.setMovie} />

        {props.userID === '' ? (
          <></>
        ) : (
          <>
            <div className="homeSlider watchList">
              <h2 className="homeSliderText text-4xl">WatchList</h2>
            </div>
            <Slider movies={watchList} setMovie={props.setMovie} />

            <div className="homeSlider watchList">
              <h2 className="homeSliderText text-4xl">History</h2>
            </div>
            <Slider movies={history} setMovie={props.setMovie} />
          </>
        )}
      </div>
    </>
  );
};

export default Home;
