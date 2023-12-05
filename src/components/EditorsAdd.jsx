import React from "react";
import Header from "./Header";
import {useNavigate} from "react-router-dom";
import axios from "axios";


const CreateMovie = (props)=>
{
    const navigate=useNavigate();
    
    function addEditorsChoice(adminID,ISAN){
        let data=JSON.stringify({
            ISAN: ISAN,
            adminID: adminID
        })
        let config={
            method: 'post',
            maxBodyLength: Infinity,
            headers:{
                'Content-Type': 'application/json'
            },
            url: 'http://localhost:5000/editors/',
            data: data
        }
        axios.request(config)
            .then((response)=>{
                console.log(response);
                return response.data;
            })
            .catch((error)=>{
                console.log(error);
                return [];
            })
        }

        const addToEditorsChoice = (event) =>
        {
            if(props.isAdmin === false)
            {
                navigate("/");
            }
            addEditorsChoice("R100",event.target[0].value);
            event.preventDefault();
    }
    
    return (
        <div>
        <Header
          isAuthenticated={props.isAuthenticated}
          setIsAuthenticated={props.setIsAuthenticated}
          isAdmin={props.isAdmin}
          setIsAdmin={props.setIsAdmin}
          setUserID={props.setUserID}
        />
            <section class="">
                <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                    <h2 class="mb-4 text-3xl font-bold text-gray-900 dark:text-white">Add movie</h2>
                    <form action="#" onSubmit={addToEditorsChoice}>
                        <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                            <div class="w-full">
                                <label for="ISAN" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ISAN</label>
                                <input type="text" name="ISAN" id="ISAN" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="ISAN" required="" />
                            </div>
                            <div class="w-full">
                                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Movie Name</label>
                                <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Movie" required="" />
                            </div>
                        </div>
                        <button type="submit" class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-red-800 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-red-700">
                            Add Movie to Editors Choice
                        </button>
                    </form>
                </div>
                </section>
        </div>
    )
}

export default CreateMovie;