import React, {useState} from 'react';
import "./App.css"
import Home from "./Home";
import Layout from "./Layout";
import Movie from "./components/Movie";
import VerifyUser from "./components/VerifyUser";
import DeleteMovie from "./components/DeleteMovie";
import Search from "./components/Search";
import Error from "./components/Error";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateMovie from './components/VerifyUser';

const App = () =>
{
    const [MovieISAN,setMovie] = useState("");

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={
                    <Home 
                        setMovie={setMovie}
                    />}/>
                    <Route path="movie/:movie" element={
                    <Movie
                        MovieISAN={MovieISAN}
                    />} />
                    <Route path="verify" element={<VerifyUser />} />
                    <Route path="addmovie" element={<CreateMovie />} />
                    <Route path="deletemovie" element={<DeleteMovie />} />
                    <Route path="search" element={<Search />} />
                    <Route path="*" element={<Error />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
