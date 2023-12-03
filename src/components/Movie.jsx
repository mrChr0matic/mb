import React,{ useState } from 'react';
import Header from './Header';
import '../App.css';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Avatar from '@mui/joy/Avatar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/joy/Divider';
import {red} from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import ScrollContainer from 'react-indiana-drag-scroll'
// import { Rating } from "@material-tailwind/react";
 
const URL="https://i.pinimg.com/474x/eb/68/de/eb68dea6b595d44c1f631e9233de0069.jpg"

const movie={
  "ISAN": "123456789",
  "title": "Peaky Blinders",
  "poster": URL,
  "trailer": "https://www.youtube.com/watch?v=oVzVdvGIC7U",
  "release_date": "2013-09-11T18:30:00.000Z",
  "description": " A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby. Thomas Shelby and his brothers return to Birmingham after serving in the British Army during WWI. Shelby and his gang, the Peaky Blinders, control the city of Birmingham.",
  "userRating": 9,
  "adminRating": 8.5,
  "lang": "en",
  "Reviews": [
      {   
        "user":{
          "verified":true,
          "userName": "Annie",
        },
        "Review": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat distinctio corporis nam aliquam maxime dignissimos? Esse perferendis ratione excepturi modi vitae a, error nobis vero fuga facilis voluptate iure ut nemo ullam, veritatis placeat reiciendis. Architecto pariatur fuga eligendi perferendis a asperiores eaque quis illo, libero maiores! Veniam, rerum laudantium.",
        "Rating": 9.8,
      },
      {
        "user":{
          "verified":true,
          "userName": "John Doe",
        },
        // "Review": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat distinctio corporis nam aliquam maxime dignissimos? Esse perferendis ratione excepturi modi vitae a, error nobis vero fuga facilis voluptate iure ut nemo ullam, veritatis placeat reiciendis. Architecto pariatur fuga eligendi perferendis a asperiores eaque quis illo, libero maiores! Veniam, rerum laudantium.",
        "Review": "good show fr",
        "Rating": 5,
      },
      {
        "user":{
          "verified":true,
          "userName": "Jane Doe",
        },
        "Review": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat distinctio corporis nam aliquam maxime dignissimos? Esse perferendis ratione excepturi modi vitae a, error nobis vero fuga facilis voluptate iure ut nemo ullam, veritatis placeat reiciendis. Architecto pariatur fuga eligendi perferendis a asperiores eaque quis illo, libero maiores! Veniam, rerum laudantium.",
        // "Review": "",
        "Rating": 5,
      }
  ],
  "Genres": ["Thriller","American","Vintage"],

}; 

const StyledRating= styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ffffff',
  },
});

const StyledRatingred= styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#EE4B2B',
  },
});
const ReviewCard= ({review})=>{
  return (
  <div className="sm:w-[600px] w-full p-6 border border-spacing-1 border-gray-400 rounded-lg shadow m-5">
    <div className="flex items-center mb-4 relative">
      <Avatar className="" sx={{ bgcolor: red[500] }}>{review.user.userName[0]}</Avatar>
      <div className="inline-block m-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{review.user.userName}</div>
      <div className="inline-block m-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white absolute right-0">{review.Rating}/10</div>
      <div className='p-0 m-0 flex items-center justify-center absolute right-20'><StyledRating name="read-only" value={movie.userRating/2} className="text-red-600" readOnly precision={0.1}/></div>
      
    </div>
    <p className="text-sm text-gray-400">{review.Review}</p>
  </div>);
}

const Movie = ()=> {
  
  const [value, setValue] = useState(5);
  return(
    <> 
      <Header />
      <img src={movie.poster} alt="" className="absolute bd h-[590px] object-cover top-[0px]"/>
      <div className="grid h-[450px] w-full grid-rows-5 grid-cols-12 grid-flow-col gap-4 mb-3 text-white"  >
        <div className="row-span-5 col-span-4 sm:col-span-3 xl:col-span-2 p-2 flex items-start justify-center">
          <img src={movie.poster} alt="poster" className="z-10"/>
        </div>

        <div className=" row-span-1 col-span-8 sm:col-span-5 xl:col-span-7 z-20 pt-5">
          <p className='text-xl sm:text-3xl pb-1'>{movie.title}</p>
          <ScrollContainer  className="flex row overflow-x-auto m-0 p-0 scrollbar-hide horizontal scroll-container">
            {movie.Genres.map((gen)=>{
              return (<Chip label={gen} variant="outlined" color="error" className="mx-1"/>);
            })}
          </ScrollContainer>
        </div>

        <div className="row-span-4 col-span-8 sm:col-span-5 xl:col-span-7 p-2 relative text-start mt-2">
          <div className='overflow-y-auto font-light'>{movie.description}</div>
          <div className='absolute bottom-3 flex row  justify-center w-full p-2 text-xs'>
            <button className="w-[200px] text-center bg-red-600 p-3 rounded-full hover:scale-105 hover:border hover:border-1 hover:border-red-700 hover:bg-transparent hover:text-red-600 mx-1 text-black transition ease-in-out duration-300" size="small" href={movie.trailer}>WATCH TRAILER</button>
            <button className="w-[200px] rounded-full hover:scale-105 border border-1 border-red-600 mx-1 text-red-600 font-semibold transition ease-in-out duration-300" size="small">Add to List</button>
          </div>
        </div>

        <div className="row-span-5 col-span-12 sm:col-span-4  xl:col-span-3 text-center backdrop-blur-sm bg-white/5 pt-3">
          <Stack spacing={1}>
            <Divider className="wht">User Ratings</Divider>
            <div className="pb-2">
              <Typography component="legend">{movie.userRating}/10</Typography>
              <StyledRatingred name="read-only" value={movie.userRating/2} readOnly precision={0.1}/>
            </div>
            <Divider>Admin Ratings</Divider>
            <div className="pb-2">
              <Typography component="legend">{movie.adminRating}/10</Typography>
              <StyledRatingred name="read-only" value={movie.adminRating/2} readOnly precision={0.1}/>
            </div>
            <hr />
            <br />
            <div className="">Language: {movie.lang}</div>
            <div className="">Release Date: {movie.release_date.substring(0,10)}</div>
          </Stack>
        </div>

      </div>

      {/* reviews */}
      <br />
      <Divider>Add Your Reviews</Divider> 
      
      <div className="text-gray-400 z-100 flex flex-col items-center m-5">
        <Typography component="legend">Reviewing as: $User</Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
            console.log(value);
          }}
        />
        <textarea name="" id="" cols="40" rows="5" className='bg-gblack border border-spacing-1 border-gray-400 rounded-lg shadow m-5 p-3'></textarea>
        <button>Submit</button>
      </div>



      <br/>
      <div className="w-full min-w-[425px] text-white z-100">
        <div className=" text-white z-100 flex flex-col items-center m-5">
          <Divider>Reviews</Divider> 
          {movie.Reviews.map((review)=>{
              return (<ReviewCard review={review}/>);
            })}
        </div>
      </div>
    </>
  );
}
// { ISAN, title, poster, trailer, release_date, description, userRating, adminRating, lang, { Reviews }[ ] , {Genre}[ ] }

export default Movie;