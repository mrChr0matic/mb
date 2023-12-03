import axios from "axios";
import { AccordionSummaryClasses } from "@mui/joy";

function Regitser(Data){
    let data=JSON.stringify({
        ...Data
    })
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:5000/user/register/',
        data: data
    };
    axios.request(config)
        .then((response)=>{
            return response.data; //{}
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
        url: 'http://localhost:5000/user/login/',
        data: data
    };
    axios.request(config)
        .then((response)=>{
            return response.data;
        })
        .catch((error)=>{
            console.log(error);
            return {};
        })
}


export {Regitser,userLogin};