import React,{ useState, useEffect } from 'react';
import "./App.css"
import Home from "./Home";
import Login from "./components/Login";
import LoginAdmin from "./components/LoginAdmin";
import Header from "./components/Header";
import Movie from "./components/Movie";
import VerifyUser from "./components/VerifyUser";
import DeleteMovie from "./components/DeleteMovie";
import SearchResult from "./components/SearchResult";

const API = "http://www.omdbapi.com?apikey=b6003d8a";

const App = () =>
{
    const [LoginPage,setLoginPage] = React.useState(false);
    const [LoginAdminPage,setLoginAdminPage] = React.useState(false);

    const movies=[
        {
            "Title": "Batman Begins",
            "Year": "2005",
            "imdbID": "tt0372784",
            "Type": "movie",
            "Genre":["Action","Thriller"],
            "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
        },
        {
            "Title": "The Batman",
            "Year": "2022",
            "imdbID": "tt1877830",
            "Type": "movie",
            "Genre":["Action","Thriller"],
            "Poster": "https://m.media-amazon.com/images/M/MV5BM2MyNTAwZGEtNTAxNC00ODVjLTgzZjUtYmU0YjAzNmQyZDEwXkEyXkFqcGdeQXVyNDc2NTg3NzA@._V1_SX300.jpg"
        },
        {
            "Title": "Batman v Superman: Dawn of Justice",
            "Year": "2016",
            "imdbID": "tt2975590",
            "Type": "movie",
            "Genre":["Action","Thriller"],
            "Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
        },
        {
            "Title": "Batman",
            "Year": "1989",
            "imdbID": "tt0096895",
            "Type": "movie",
            "Genre":["Action","Thriller"],
            "Poster": "https://m.media-amazon.com/images/M/MV5BZWQ0OTQ3ODctMmE0MS00ODc2LTg0ZTEtZWIwNTUxOGExZTQ4XkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_SX300.jpg"
        },
        {
            "Title": "Batman Returns",
            "Year": "1992",
            "imdbID": "tt0103776",
            "Type": "movie",
            "Genre":["Action","Thriller"],
            "Poster": "https://m.media-amazon.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX300.jpg"
        },
        {
            "Title": "Batman & Robin",
            "Year": "1997",
            "imdbID": "tt0118688",
            "Type": "movie",
            "Genre":["Action","Thriller"],
            "Poster": "https://m.media-amazon.com/images/M/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_SX300.jpg"
        },
        {
            "Title": "Batman Forever",
            "Year": "1995",
            "imdbID": "tt0112462",
            "Type": "movie",
            "Genre":["Action","Thriller"],
            "Poster": "https://m.media-amazon.com/images/M/MV5BNDdjYmFiYWEtYzBhZS00YTZkLWFlODgtY2I5MDE0NzZmMDljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
        },
        {
            "Title": "The Lego Batman Movie",
            "Year": "2017",
            "imdbID": "tt4116284",
            "Type": "movie",
            "Genre":["Action","Thriller"],
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg"
        },
        {
            "Title": "Batman: The Animated Series",
            "Year": "1992–1995",
            "imdbID": "tt0103359",
            "Type": "series",
            "Genre":["Action","Thriller"],
            "Poster": "https://m.media-amazon.com/images/M/MV5BOTM3MTRkZjQtYjBkMy00YWE1LTkxOTQtNDQyNGY0YjYzNzAzXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_SX300.jpg"
        },
        {
            "Title": "Batman v Superman: Dawn of Justice (Ultimate Edition)",
            "Year": "2016",
            "imdbID": "tt18689424",
            "Type": "movie",
            "Genre":["Action","Thriller"],
            "Poster": "https://m.media-amazon.com/images/M/MV5BOTRlNWQwM2ItNjkyZC00MGI3LThkYjktZmE5N2FlMzcyNTIyXkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg"
        }
    ];

    return (
        <div>
            <Header 
                setLoginPage={setLoginPage}
            />
            <DeleteMovie />
            {LoginPage?<Login 
                setLoginPage={setLoginPage}
                setLoginAdminPage={setLoginAdminPage}
            />:LoginAdminPage?<LoginAdmin
                setLoginPage={setLoginPage}
                setLoginAdminPage={setLoginAdminPage}
             />:<></>}
        </div>
    )
}

export default App;
