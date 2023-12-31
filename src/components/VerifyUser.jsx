import React from "react";
import Header from "./Header";
import axios from "axios";

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
        url: 'https://moviebase-jz8c.onrender.com/admin/verify/',
        data: data
    }
    axios.request(config)
        .then((response)=>{
            console.log(response);
            return response.data;
        })
        .catch((error)=>{
            console.log(error);
            return {"verification" : "failure"};
        })
}

const VerifyUser = (props)=>
{
    const verifyTheUser = (event) =>
    {
        console.log(event);
        const val=event.target[1].value==="true"? true:false;
        console.log(val);
        addVerification(event.target[0].value,val,"ADMIN R100")
        event.preventDefault();
    }

    return (
        <div>   
            <Header
            isAuthenticated={props.isAuthenticated}
            setIsAuthenticated={props.setIsAuthenticated}
            setIsAdmin={props.setIsAdmin}
            />
            <section class="">
                <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                    <h2 class="mb-4 text-3xl font-bold text-gray-900 dark:text-white">Verify user</h2>
                    <form action="#" onSubmit={verifyTheUser}>
                        <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                            <div class="w-full">
                                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                                <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Username" required="" />
                            </div>
                            <div class="w-full">
                                <label for="value" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Value</label>
                                <input type="text" name="value" id="value" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="value" required="" />
                            </div>
                        </div>
                        <button type="submit" class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-red-800 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-red-700">
                            Verify user
                        </button>
                    </form>
                </div>
                </section>
        </div>
    )
}

export default VerifyUser;