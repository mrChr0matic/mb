import axios from "axios";
import { AccordionSummaryClasses } from "@mui/joy";

function Register(userName,password,email){
    let data=JSON.stringify({
        userName: userName,
        email: email,
        password: password
    })
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        headers:{
            'Content-Type': 'application/json'
        },
        url: 'http://localhost:5000/user/register/',
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
        url: 'http://localhost:5000/user/login/',
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

function addVerification(userName,value,user){
    let data=JSON.stringify({
        val: value,
        userName: userName
    })
    let config={
        method: 'put',
        maxBodyLength: Infinity,
        headers:{
            'authorization': user,
            'Content-Type': 'application/json'
        },
        url: 'http://localhost:5000/admin/verify/',
        data: data
    }
    axios.request(config)
        .then((response)=>{
            return response.data;
        })
        .catch((error)=>{
            console.log(error);
            return {"verification" : "failure"};
        })
}



function getEditorsChoice(adminID,ISAN){
    let config={
        method: 'get',
        maxBodyLength: Infinity,
        headers:{
            'Content-Type': 'application/json'
        },
        url: 'http://localhost:5000/editors/find',
    }
    axios.request(config)
        .then((response)=>{
            return response.data;
        })
        .catch((error)=>{
            console.log(error);
            return [];
        })
}

function addReview(ISAN,review,rating,user){
    let data=JSON.stringify({
        ISAN: ISAN,
        Review: review,
        Rating: rating
    })
    let config={
        method: 'post',
        maxBodyLength: Infinity,
        headers:{
            'authorization':user,
            'Content-Type': 'application/json'
        },
        url: 'http://localhost:5000/review/',
        data: data
    }
    axios.request(config)
        .then((response)=>{
            return response.data;
        })
        .catch((error)=>{
            console.log(error);
            return {"status": "error_adding_review"};
        })
}
export {Register,userLogin};