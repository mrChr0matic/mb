//Reviews add
//Admin functionality
//Fix create and delete by tmrw with help of abishek
//Order of history
//admin login not working?
//abishek must make a verify user
//REVIEWS BRO WHERE ARE THE AXIOS FUNCTIONS
//Register as well adgsjkmhksn hm


import React, {useState} from 'react';
import "./App.css"
import Home from "./Home";
import Layout from "./Layout";
import Movie from "./components/Movie";
import VerifyUser from "./components/VerifyUser";
import DeleteMovie from "./components/DeleteMovie";
import Search from "./components/Search";
import Error from "./components/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateMovie from './components/CreateMovie';
import UpdateMovie from "./components/UpdateMovie";
import EditorsAdd from "./components/EditorsAdd";

const App = () =>
{
    const [isAuthenticated,setIsAuthenticated] = useState(false);
    const [isAdmin,setIsAdmin] = useState(false);
    const [userID,setUserID] = useState("");

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={
                    <Home 
                        isAuthenticated={isAuthenticated}
                        setIsAuthenticated={setIsAuthenticated}
                        isAdmin={isAdmin}
                        setIsAdmin={setIsAdmin}
                        userID={userID}
                        setUserID={setUserID}
                    />}/>
                    <Route path="movie/:movie" element={
                    <Movie
                        isAuthenticated={isAuthenticated}
                        setIsAuthenticated={setIsAuthenticated}
                        isAdmin={isAdmin}
                        setIsAdmin={setIsAdmin}
                        userID={userID}
                        setUserID={setUserID}
                    />} />
                    <Route path="verify" element={
                    <VerifyUser
                        isAuthenticated={isAuthenticated}
                        setIsAuthenticated={setIsAuthenticated}
                        isAdmin={isAdmin}
                        setIsAdmin={setIsAdmin}
                        userID={userID}
                        setUserID={setUserID}
                    />} />
                    <Route path="addmovie" element={
                    <CreateMovie
                        isAuthenticated={isAuthenticated}
                        setIsAuthenticated={setIsAuthenticated}
                        isAdmin={isAdmin}
                        setIsAdmin={setIsAdmin}
                        userID={userID}
                        setUserID={setUserID}
                    />} />
                    <Route path="deletemovie" element={
                    <DeleteMovie
                        isAuthenticated={isAuthenticated}
                        setIsAuthenticated={setIsAuthenticated}
                        isAdmin={isAdmin}
                        setIsAdmin={setIsAdmin}
                        userID={userID}
                        setUserID={setUserID}
                    />} />
                    <Route path="search/:search" element={
                    <Search
                        isAuthenticated={isAuthenticated}
                        setIsAuthenticated={setIsAuthenticated}
                        isAdmin={isAdmin}
                        setIsAdmin={setIsAdmin}
                        userID={userID}
                        setUserID={setUserID}
                     />} />
                    <Route path="updatemovie" element={
                    <UpdateMovie
                        isAuthenticated={isAuthenticated}
                        setIsAuthenticated={setIsAuthenticated}
                        isAdmin={isAdmin}
                        setIsAdmin={setIsAdmin}
                        userID={userID}
                        setUserID={setUserID}
                    />} />
                    <Route path="addeditors" element={
                    <EditorsAdd
                        isAuthenticated={isAuthenticated}
                        setIsAuthenticated={setIsAuthenticated}
                        isAdmin={isAdmin}
                        setIsAdmin={setIsAdmin}
                        userID={userID}
                        setUserID={setUserID}
                    />} />
                    <Route path="*" element={<Error />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
