import axios from "axios";
import { AccordionSummaryClasses } from "@mui/joy";

function Register(Data){
    let data=JSON.stringify({
        ...Data
    })
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        headers:{
            'Content-Type': 'application/json'
        },
        url: 'https://moviebase-jz8c.onrender.com/user/register/',
        data: data
    };
    axios.request(config)
        .then((response)=>{
            return response.data;   //{"userID": userID}
        })
        .catch((error)=>{
            console.log(error);
            return {};
        })
}

function userLogin(userName,password){
    let data=JSON.stringify({
        userName: userName,
        password: password
    })
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        headers:{
            'Content-Type': 'application/json'
        },
        url: 'https://moviebase-jz8c.onrender.com/user/login/',
        data: data
    };
    axios.request(config)
        .then((response)=>{
            return response.data; //{"userID": userID}
        })
        .catch((error)=>{
            console.log(error);
            return {};
        })
}

function adminLogin(adminID,password){
    let data=JSON.stringify({
        adminID: adminID,
        password: password
    })
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        headers:{
            'Content-Type': 'application/json'
        },
        url: 'http://localhost:5000/admin/register/',
        data: data
    };
    axios.request(config)
        .then((response)=>{
            return response.data;   //{"adminID": adminID}
        })
        .catch((error)=>{
            console.log(error);
            return {};
        })
}


function addWatchlist(ISAN,user){  //user ====> USER <userID>
    let data=JSON.stringify({
        ISAN: ISAN
    })
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        headers:{
            'authorization': user,
            'Content-Type': 'application/json'
        },
        url: 'http://localhost:5000/user/watchlist/',
        data: data
    };
    axios.request(config)
        .then((response)=>{
            return response.data;   
        })
        .catch((error)=>{
            console.log(error);
            return {"message":"errorWatchlist"};
        })
}

function deleteWatchlist(ISAN,user){
    let data=JSON.stringify({
        ISAN: ISAN
    })
    let config = {
        method: 'delete',
        maxBodyLength: Infinity,
        headers:{
            'authorization': user,
            'Content-Type': 'application/json'
        },
        url: 'http://localhost:5000/user/watchlist/',
        data: data
    };
    axios.request(config)
        .then((response)=>{
            return response.data;   
        })
        .catch((error)=>{
            console.log(error);
            return {"message":"errorDeleteWatchlist"};
        })
}

function getWatchlist(user){
    let data=JSON.stringify({
        userID: user,
    })
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        headers:{
            'authorization': user,
            'Content-Type': 'application/json'
        },
        url: 'http://localhost:5000/user/watchlist/',
        data: data
    };
    axios.request(config)
        .then((response)=>{
            return response.data;   
        })
        .catch((error)=>{
            console.log(error);
            return [];
        })
}

function addHistory(ISAN,user){
    let data=JSON.stringify({
        ISAN: ISAN,
    })
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        headers:{
            'authorization': user,
            'Content-Type': 'application/json'
        },
        url: 'http://localhost:5000/user/history/',
        data: data
    };
    axios.request(config)
        .then((response)=>{
            return response.data;   
        })
        .catch((error)=>{
            console.log(error);
            return {message:"errorHistoryAdd"};
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
            return response.data;
        })
        .catch((error)=>{
            console.log(error);
            return [];
        })
}

function addReview(ISAN, userID,Review,Rating){
    let data=JSON.stringify({
        
    })
}
export {Register,userLogin};