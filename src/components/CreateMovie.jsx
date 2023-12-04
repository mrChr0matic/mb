import React from "react";
import DynamicForm from "./DynamicForm";
import Header from "./Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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

const CreateMovie = (props)=>
{
    const navigate=useNavigate();

    const submitMovie=(event)=>
    {
        if(props.isAdmin === false)
        {
            navigate("/");
        }
        console.log(event);
        addMovie({},"ADMIN")
        event.preventDefault();
    }

    return (
        <div>
            <Header
                isAuthenticated={props.isAuthenticated}
                setIsAuthenticated={props.setIsAuthenticated}
                setIsAdmin={props.setIsAdmin}
            />
            <section className="">
                <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                    <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">Add movie</h2>
                    <form action="#" onSubmit={submitMovie}>
                        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                            <div className="sm:col-span-2">
                                <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Movie Name</label>
                                <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Movie" required="" />
                            </div>
                            <div className="w-full">
                                <label for="release-date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Release date</label>
                                <input type="text" name="release-date" id="release-date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Release date" required="" />
                            </div>
                            <div className="w-full">
                                <label for="duration" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Duration</label>
                                <input type="text" name="duration" id="duration" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Duration" required="" />
                            </div>
                            <div>
                                <label for="poster" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Poster link</label>
                                <input type="text" name="poster" id="poster" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Poster" required="" />
                            </div>
                            <div>
                                <label for="trailer" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Trailer link</label>
                                <input type="text" name="trailer" id="trailer" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Trailer" required="" />
                            </div> 
                            <div className="sm:col-span-2">
                                <label for="language" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Language</label>
                                <input type="text" name="language" id="language" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Language" required="" />
                            </div>
                            <div className="sm:col-span-2">
                                <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                <textarea id="description" rows="8" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Movie description"></textarea>
                            </div>                           
                            <div>
                                <label for="genre" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Genre</label>
                                <DynamicForm
                                    placeholder="Genre"    
                                />
                            </div>
                            <div>
                                <label for="cast" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cast</label>
                                <DynamicForm
                                    placeholder="Cast"
                                />
                            </div>
                        </div>
                        <button type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-red-800 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-red-700">
                            Add Movie
                        </button>
                    </form>
                </div>
                </section>
        </div>
    )
}

export default CreateMovie;