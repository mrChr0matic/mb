import React from "react";
import SearchResult from "./SearchResult";
import Header from "./Header";
import axios from "axios";
import { useParams } from "react-router-dom";

let searchbyName=[];

async function fetchMultiple(searchType,searchItem){
    let data = JSON.stringify({
        searchType: searchType,
        searchItem: searchItem
    });
    let config = {  
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:5000/movies/find/',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
    };
    await axios.request(config)
        .then((response) => {
            searchbyName=response.data;
        })
        .catch((error) => {
            console.log(error);
            return [];
        });
}

const Search = (props) =>
{    
    console.log(searchbyName);
    const searchValue=useParams().search;
    fetchMultiple("title",searchValue);
    return(<div>
        <Header
          isAuthenticated={props.isAuthenticated}
          setIsAuthenticated={props.setIsAuthenticated}
          setIsAdmin={props.setIsAdmin}
        />
        <div className="homeSlider TopRated">
            <h2 className="homeSliderText text-4xl text-center">Name</h2>
        </div>
        {searchbyName.map(movie=>
        <SearchResult 
            movie={movie}
        />)}
    </div>)
}

export default Search;