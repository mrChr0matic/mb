import React from "react";
import DynamicForm from "./DynamicForm";
import Header from "./Header";

const CreateMovie = ()=>
{
    return (
        <div>
            <Header />
            <section class="">
                <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                    <h2 class="mb-4 text-3xl font-bold text-gray-900 dark:text-white">Update movie</h2>
                    <form action="#">
                        <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                            <div class="w-full">
                                <label for="ISAN" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ISAN</label>
                                <input type="text" name="ISAN" id="ISAN" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="ISAN" required="" />
                            </div>
                            <div class="w-full">
                                <label for="movie-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Movie Name</label>
                                <input type="text" name="movie-name" id="movie-name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Movie Name" required="" />
                            </div>
                            <div class="w-full">
                                <label for="release-date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Release date</label>
                                <input type="text" name="release-date" id="release-date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Release date" required="" />
                            </div>
                            <div class="w-full">
                                <label for="duration" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Duration</label>
                                <input type="text" name="duration" id="duration" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Duration" required="" />
                            </div>
                            <div>
                                <label for="poster" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Poster link</label>
                                <input type="text" name="poster" id="poster" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Poster" required="" />
                            </div>
                            <div>
                                <label for="trailer" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Trailer link</label>
                                <input type="text" name="trailer" id="trailer" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Trailer" required="" />
                            </div> 
                            <div>
                                <label for="genre" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Genre</label>
                                <input type="text" name="genre" id="genre" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Genres" required="" />
                            </div>
                            <div>
                                <label for="language" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Language</label>
                                <input type="text" name="language" id="language" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Language" required="" />
                            </div>
                            <div class="sm:col-span-2">
                                <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                <textarea id="description" rows="8" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Movie description"></textarea>
                            </div>                           
                            <div>
                                <label for="genre" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Genre</label>
                                <DynamicForm
                                    placeholder="Genre"    
                                />
                            </div>
                            <div>
                                <label for="cast" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cast</label>
                                <DynamicForm
                                    placeholder="Cast"
                                />
                            </div>
                        </div>
                        <button type="submit" class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-red-800 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-red-700">
                            Add Movie
                        </button>
                    </form>
                </div>
                </section>
        </div>
    )
}

export default CreateMovie;