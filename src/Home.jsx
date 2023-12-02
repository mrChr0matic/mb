import React,{ useState, useEffect } from 'react';
import './components/Home.css';
import "./App.css";
import Slider from './components/Slider.jsx';


const API = "http://www.omdbapi.com?apikey=b6003d8a";

const moviesTemp=[{
    "Poster":"https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_SX300.jpg",
    "Title":"Oppenheimer",
    "Type":"Movie",
    "Year":"2023",
    "imdbID": "tt15398776"
  },
  {
    "Poster":"https://m.media-amazon.com/images/M/MV5BYTI0ZmI4NDItZGFlZC00M2E4LWIyZWEtMTFhMjQwYmU4MGNlXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_SX300.jpg",
    "Title":"Five Nights at Freddy's",
    "Type":"Movie",
    "Year":"2023",
    "imdbID": "tt4589218"
  },
  {
    "Poster":"https://m.media-amazon.com/images/M/MV5BNjU3N2QxNzYtMjk1NC00MTc4LTk1NTQtMmUxNTljM2I0NDA5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
    "Title":"Barbie",
    "Type":"Movie",
    "Year":"2023",
    "imdbID": "tt1517268"
  },
  {
    "Poster":"https://m.media-amazon.com/images/M/MV5BOTZmMmY2MzctMjU2Yy00YjJlLTk1NjAtY2U4MmMxOWZkZWY4XkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SX300.jpg",
    "Title":"The Hunger Games: The Ballad of Songbirds & Snakes",
    "Type":"Movie",
    "Year":"2023",
    "imdbID": "tt10545296"
  },
  {
    "Poster":"https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_SX300.jpg",
    "Title":"Spider-Man: Across the Spider-Verse",
    "Type":"Movie",
    "Year":"2023",
    "imdbID": "tt9362722"
  },
  {
    "Poster":"https://m.media-amazon.com/images/M/MV5BMDExZGMyOTMtMDgyYi00NGIwLWJhMTEtOTdkZGFjNmZiMTEwXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SX300.jpg",
    "Title":"John Wick: Chapter 4",
    "Type":"Movie",
    "Year":"2023",
    "imdbID": "tt10366206"
  },
  {
    "Poster":"https://m.media-amazon.com/images/M/MV5BMDgxOTdjMzYtZGQxMS00ZTAzLWI4Y2UtMTQzN2VlYjYyZWRiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
    "Title":"Guardians of the Galaxy Vol. 3",
    "Type":"Movie",
    "Year":"2023",
    "imdbID": "tt6791350"
  },
  {
    "Poster":"https://m.media-amazon.com/images/M/MV5BYWQ4M2ZmODItNzZhYi00MzY1LTk2ZmItYTUwODI2NzJmN2JiXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
    "Title":"Wish",
    "Type":"Movie",
    "Year":"2023",
    "imdbID": "tt11304740"
  },
  {
    "Poster":"https://m.media-amazon.com/images/M/MV5BM2U2YWU5NWMtOGI2Ni00MGMwLWFkNjItMjgyZWMxNjllNTMzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
    "Title":"The Marvels",
    "Type":"Movie",
    "Year":"2023",
    "imdbID": "tt10676048"
  },
  {
    "Poster":"https://m.media-amazon.com/images/M/MV5BMmY1ODUzZGItNDllOS00MDBhLTg4NmUtYjU4YjUxMGNlYmMwXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
    "Title":"Blue Beetle",
    "Type":"Movie",
    "Year":"2023",
    "imdbID": "tt9362930"
  }
];





const topRated=[{
    "Poster":"https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg",
    "Title":"The Shawshank Redemption",
    "Type":"Movie",
    "Year":"1994",
    "imdbID": "tt0111161"
  },
  {
    "Poster":"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    "Title":"The Godfather",
    "Type":"Movie",
    "Year":"1972",
    "imdbID": "tt0068646"
  },
  {
    "Poster":"https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Title":"The Dark Knight",
    "Type":"Movie",
    "Year":"2008",
    "imdbID": "tt0468569"
  },
  {
    "Poster":"https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    "Title":"Schindler's List",
    "Type":"Movie",
    "Year":"1993",
    "imdbID": "tt0108052"
  },
  {
    "Poster":"https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    "Title":"Pulp Fiction",
    "Type":"Movie",
    "Year":"1994",
    "imdbID": "tt0110912"
  },
  {
    "Poster":"https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    "Title":"Forrest Gump",
    "Type":"Movie",
    "Year":"1994",
    "imdbID": "tt0109830"
  },
  {
    "Poster":"https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
    "Title":"Fight Club",
    "Type":"Movie",
    "Year":"1999",
    "imdbID": "tt0137523"
  },
  {
    "Poster":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Title":"Inception",
    "Type":"Movie",
    "Year":"2010",
    "imdbID": "tt1375666"
  },
  {
    "Poster":"https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    "Title":"The Matrix",
    "Type":"Movie",
    "Year":"1999",
    "imdbID": "tt0133093"
  }
];









const watchList=[{
    "Poster":"https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_SX300.jpg",
    "Title":"Oppenheimer",
    "Type":"Movie",
    "Year":"2023",
    "imdbID": "tt15398776"
  },
  {
    "Poster":"https://m.media-amazon.com/images/M/MV5BYTI0ZmI4NDItZGFlZC00M2E4LWIyZWEtMTFhMjQwYmU4MGNlXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_SX300.jpg",
    "Title":"Five Nights at Freddy's",
    "Type":"Movie",
    "Year":"2023",
    "imdbID": "tt4589218"
  },
  {
    "Poster":"https://m.media-amazon.com/images/M/MV5BNjU3N2QxNzYtMjk1NC00MTc4LTk1NTQtMmUxNTljM2I0NDA5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
    "Title":"Barbie",
    "Type":"Movie",
    "Year":"2023",
    "imdbID": "tt1517268"
  },
  {
    "Poster":"https://m.media-amazon.com/images/M/MV5BOTZmMmY2MzctMjU2Yy00YjJlLTk1NjAtY2U4MmMxOWZkZWY4XkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SX300.jpg",
    "Title":"The Hunger Games: The Ballad of Songbirds & Snakes",
    "Type":"Movie",
    "Year":"2023",
    "imdbID": "tt10545296"
  },
  {
    "Poster":"https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_SX300.jpg",
    "Title":"Spider-Man: Across the Spider-Verse",
    "Type":"Movie",
    "Year":"2023",
    "imdbID": "tt9362722"
  },
  {
    "Poster":"https://m.media-amazon.com/images/M/MV5BMDExZGMyOTMtMDgyYi00NGIwLWJhMTEtOTdkZGFjNmZiMTEwXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SX300.jpg",
    "Title":"John Wick: Chapter 4",
    "Type":"Movie",
    "Year":"2023",
    "imdbID": "tt10366206"
  },
  {
    "Poster":"https://m.media-amazon.com/images/M/MV5BMDgxOTdjMzYtZGQxMS00ZTAzLWI4Y2UtMTQzN2VlYjYyZWRiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
    "Title":"Guardians of the Galaxy Vol. 3",
    "Type":"Movie",
    "Year":"2023",
    "imdbID": "tt6791350"
  },
  {
    "Poster":"https://m.media-amazon.com/images/M/MV5BYWQ4M2ZmODItNzZhYi00MzY1LTk2ZmItYTUwODI2NzJmN2JiXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
    "Title":"Wish",
    "Type":"Movie",
    "Year":"2023",
    "imdbID": "tt11304740"
  },
  {
    "Poster":"https://m.media-amazon.com/images/M/MV5BM2U2YWU5NWMtOGI2Ni00MGMwLWFkNjItMjgyZWMxNjllNTMzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
    "Title":"The Marvels",
    "Type":"Movie",
    "Year":"2023",
    "imdbID": "tt10676048"
  },
  {
    "Poster":"https://m.media-amazon.com/images/M/MV5BMmY1ODUzZGItNDllOS00MDBhLTg4NmUtYjU4YjUxMGNlYmMwXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
    "Title":"Blue Beetle",
    "Type":"Movie",
    "Year":"2023",
    "imdbID": "tt9362930"
  }
];













const comingSoon=[{
    "Poster":"https://m.media-amazon.com/images/M/MV5BNzJiZGRkMDgtZWFlOS00MWRhLThhNTEtMjljZTJjYTljYTBjXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg",
    "Title":"Wonka",
    "Type":"Movie",
    "Year":"2023",
    "imdbID": "tt6166392"
  },
  {
    "Poster":"https://m.media-amazon.com/images/M/MV5BMTkxM2FiYjctYjliYy00NjY2LWFmOTEtMWZiYWRjNjA4MGYxXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_SX300.jpg",
    "Title":"Aquaman and the Lost Kingdom",
    "Type":"Movie",
    "Year":"2023",
    "imdbID": "tt9663764"
  },
  {
    "Poster":"https://m.media-amazon.com/images/M/MV5BMGI0ZDg3Y2EtYzIyYi00MGYwLThlOGItNWQ5MjMxNDU2ODUzXkEyXkFqcGdeQXVyMTEwMTcxOTAx._V1_SX300.jpg",
    "Title":"Deadpool 3",
    "Type":"Movie",
    "Year":"2024",
    "imdbID": "tt6263850"
  },
  {
    "Poster":"https://m.media-amazon.com/images/M/MV5BODI0YjNhNjUtYjM0My00MTUwLWFlYTMtMWI2NGUzYjNjNGQzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
    "Title":"Dune: Part Two",
    "Type":"Movie",
    "Year":"2024",
    "imdbID": "tt15239678"
  },
  {
    "Poster":"https://m.media-amazon.com/images/M/MV5BZmRkMGFjYWItNWZhZC00ZDY5LTk0ZTgtMDQ0MDE2N2MxNDVlXkEyXkFqcGdeQXVyMTE1NDM4ODk4._V1_SX300.jpg",
    "Title":"Mission: Impossible - Dead Reckoning Part Two",
    "Type":"Movie",
    "Year":"2024",
    "imdbID": "tt9603208"
  },
  {
    "Poster":"https://m.media-amazon.com/images/M/MV5BOGUwMTkwZjQtZTE1ZS00YWI0LWI0NTEtZjZjNDMzYjAwYjBjXkEyXkFqcGdeQXVyODI2Mjg5ODA@._V1_SX300.jpg",
    "Title":"Kung Fu Panda 4",
    "Type":"Movie",
    "Year":"2024",
    "imdbID": "tt21692408"
  },
  {
    "Poster":"https://m.media-amazon.com/images/M/MV5BNDcxM2RiOWMtMGEzMC00NDEyLTgzMjEtOWZjYzVhN2E2ZjcyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
    "Title":"Kingdom of the Planet of the Apes",
    "Type":"Movie",
    "Year":"2024    ",
    "imdbID": "tt11389872"
  },
  {
    "Poster":"https://m.media-amazon.com/images/M/MV5BYjdjNjUzMGEtNDExMC00NDk4LWExNjctNzE3ZTY1YmFiYWM5XkEyXkFqcGdeQXVyMTM1NjM2ODg1._V1_SX300.jpg",
    "Title":"Inside Out 2",
    "Type":"Movie",
    "Year":"2024",
    "imdbID": "tt22022452"
  },
  {
    "Poster":"https://m.media-amazon.com/images/M/MV5BYzkzZDliZmQtMTQzZS00ZTkzLTg5YjgtMzZlNGQyZTk2YWJhXkEyXkFqcGdeQXVyODgzMzg2MDg@._V1_SX300.jpg",
    "Title":"Singham Again",
    "Type":"Movie",
    "Year":"2024",
    "imdbID": "tt11976134"
  }
];

const Home = (props)=> {
    const [movies, setMovies] = useState([]);
    console.log(movies);
    const [searchTerm, setSearchTerm]=useState('');
    useEffect(() => {
        searchMovies("Batman");
    }, []);

    const searchMovies = async (title) => {
        const response = await fetch(`${API}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    };

  
  return(
    <>
    <div className="app font-medium ">  

        <div className="homeSlider Trending">
            <h2 className="homeSliderText text-4xl">Trending</h2>
        </div>
        <Slider
            movies={moviesTemp}
        />
        
        <div className="homeSlider Coming soon...">
                <h2 className="homeSliderText text-4xl">Coming soon...</h2>
            </div>
            <Slider
                movies={comingSoon}
            />
        
        <div className="homeSlider TopRated">
            <h2 className="homeSliderText text-4xl">Top Rated</h2>
        </div>
        <Slider
            movies={topRated}
        />
        
        <div className="homeSlider History">
            <h2 className="homeSliderText text-4xl">History</h2>
        </div>
        <Slider
            movies={movies}
        />

        <div className="homeSlider Watch List">
            <h2 className="homeSliderText text-4xl">Watch List</h2>
        </div>
        <Slider
            movies={watchList}
        />

    <div className="homeSlider EditorsChoice">
            <h2 className="homeSliderText text-4xl">Editor's Choice</h2>
        </div>
        <Slider
            movies={topRated}
        />
    </div>
    </>
  );
}

export default Home