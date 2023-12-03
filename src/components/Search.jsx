import React from "react";
import SearchResult from "./SearchResult";
import Header from "./Header";

const Search = (props) =>
{
    return(<div>
        <Header />
        {props.searchArray.map(movie=>
        <SearchResult 
            movie={movie}
        />)}
    </div>)
}

export default Search;