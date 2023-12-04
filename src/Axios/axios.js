import { accordionSummaryClasses } from "@mui/joy";
import axios from "axios";


function fetchMovie(ISAN){
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://moviebase-jz8c.onrender.com/movies/find/'+ISAN,
    };
    axios.request(config)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
            return {};
        });

}

function getCastMovies(Name){
    let data=JSON.stringify({
        Name: Name
    })
    let config={
        method:'post',
        maxBodyLength: Infinity,
        url: 'locahost:5000/movies/crew/find',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
    }
    axios.request(config)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
            return {};
        });
}

function getGenreMovies(Name){
    let data=JSON.stringify({
        name: Name
    })
    let config={
        method:'post',
        maxBodyLength: Infinity,
        url: 'locahost:5000/genre/find',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
    }
    axios.request(config)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
            return {};
        });
}

async function fetchMultiple(searchType,searchItem){
    let data = JSON.stringify({
        searchType: searchType,
        searchItem: searchItem
    });
    let config = {  
        method: 'post',
        maxBodyLength: Infinity,
        url: 'localhost:5000/movies/find/',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
    };
    await axios.request(config)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
            return [];
        });
}

async function customSorted(type){
    let data = JSON.stringify({
      "userRating":"desc" 
    });
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://moviebase-jz8c.onrender.com/movies/find/custom/',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
    };
    await axios.request(config)
        .then((response)=>{
            return response.data;
        })
        .catch((error)=>{
            return [];
        })
}

async function addMovie(values,user){
    let data=values.stringify;
    let config={
        method: 'post',
        maxBodyLength:Infinity,
        url: 'https://moviebase-jz8c.onrender.com/movies/',
        headers:{
            'authorization': user,
            'Content-Type': 'application/json'
        },
        data:data
    };
    await axios.request(config)
        .then((response)=>{
            return {response};
        })
        .catch((error)=>{
            return {};
        })
}

async function deleteMovie(ISAN,user){
    let data=JSON.stringify({
        ISAN: ISAN
    });
    let config={
        method:'delete',
        maxBodyLength:Infinity,
        url: 'locahost:5000/movies/',
        headers:{
            'authorization': user,
            'Content-Type': 'application/json'
        },
        data:data
    }
    await axios.request(config)
        .then((response)=>{
            return response.data;
        })
        .catch((error)=>{
            return {"status":"couldnt_delete"};
        })
}

async function updateMovie(ISAN,user,Data){
    let data=JSON.stringify({
        ISAN:ISAN,
        ...Data
    });
    let config={
        method:'put',
        maxBodyLength: Infinity,
        url:'https://moviebase-jz8c.onrender.com/movies/',
        headers:{
            'authorization': user,
            'Content-Type': 'application/json'
        },
        data:data
    }
    await axios.request(config)
        .then((response)=>{
            return response.data;
        })
        .catch((error)=>{
            return {};
        })
}

export {addMovie,customSorted,deleteMovie,fetchMovie,fetchMultiple,updateMovie};