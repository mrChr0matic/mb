import React, { useState, useEffect } from "react";
import SearchResult from "./SearchResult";
import Header from "./Header";
import axios from "axios";
import { useParams } from "react-router-dom";

const Search = (props) => {
  const [searchResults, setSearchResults] = useState([]);
  const searchValue = useParams().search;

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const data = JSON.stringify({
          searchType: "title",
          searchItem: searchValue,
        });

        const config = {
          method: "post",
          maxBodyLength: Infinity,
          url: "https://moviebase-jz8c.onrender.com/movies/find/",
          headers: {
            "Content-Type": "application/json",
          },
          data: data,
        };

        const response = await axios.request(config);
        setSearchResults(response.data);
      } catch (error) {
        console.error("Error fetching search results:", error);
        setSearchResults([]);
      }
    };

    fetchSearchResults();
  }, [searchValue]);

  return (
    <div>
      <Header
        isAuthenticated={props.isAuthenticated}
        setIsAuthenticated={props.setIsAuthenticated}
        setIsAdmin={props.setIsAdmin}
      />
      <div className="homeSlider TopRated">
        <h2 className="homeSliderText text-4xl text-center">Name</h2>
      </div>
      {searchResults.map((movie) => (
        <SearchResult key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Search;
