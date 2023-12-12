import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import Movie from './components/Movie';
import VerifyUser from './components/VerifyUser';
import DeleteMovie from './components/DeleteMovie';
import Search from './components/Search';
import Error from './components/Error';
import CreateMovie from './components/CreateMovie';
import UpdateMovie from './components/UpdateMovie';
import EditorsAdd from './components/EditorsAdd';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userID, setUserID] = useState('');

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Home
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
                isAdmin={isAdmin}
                setIsAdmin={setIsAdmin}
                userID={userID}
                setUserID={setUserID}
              />
            }
          />
          <Route
            path="movie/:movie"
            element={
              <Movie
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
                isAdmin={isAdmin}
                setIsAdmin={setIsAdmin}
                userID={userID}
                setUserID={setUserID}
              />
            }
          />
          <Route
            path="verify"
            element={
              <VerifyUser
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
                isAdmin={isAdmin}
                setIsAdmin={setIsAdmin}
                userID={userID}
                setUserID={setUserID}
              />
            }
          />
          <Route
            path="addmovie"
            element={
              <CreateMovie
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
                isAdmin={isAdmin}
                setIsAdmin={setIsAdmin}
                userID={userID}
                setUserID={setUserID}
              />
            }
          />
          <Route
            path="deletemovie"
            element={
              <DeleteMovie
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
                isAdmin={isAdmin}
                setIsAdmin={setIsAdmin}
                userID={userID}
                setUserID={setUserID}
              />
            }
          />
          <Route
            path="search/:search"
            element={
              <Search
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
                isAdmin={isAdmin}
                setIsAdmin={setIsAdmin}
                userID={userID}
                setUserID={setUserID}
              />
            }
          />
          <Route
            path="updatemovie"
            element={
              <UpdateMovie
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
                isAdmin={isAdmin}
                setIsAdmin={setIsAdmin}
                userID={userID}
                setUserID={setUserID}
              />
            }
          />
          <Route
            path="addeditors"
            element={
              <EditorsAdd
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
                isAdmin={isAdmin}
                setIsAdmin={setIsAdmin}
                userID={userID}
                setUserID={setUserID}
              />
            }
          />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
    