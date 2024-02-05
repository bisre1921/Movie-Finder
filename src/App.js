import { useEffect, useState } from "react";
import MovieCard from "./movieCard";
import searchIcon from './images/search-icon.png';


const API_URL = "https://www.omdbapi.com?apikey=b0d2140a";

const App = () => {
  const [movies , setMovies] = useState([]);
  const [searchItem , setSearchItem] = useState("");

  useEffect(() => {
    fetchMovies("spiderman");
  } , [])


  const fetchMovies = async(title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);// refers to a property named Search within the JSON response object returned from the OMDB API. 
  }
  
  return (
    <div className="app">
      <h1>Movie Finder</h1>
      <div className="search">
        <input type="text" 
          value={searchItem}
          placeholder="search for movies"
          onChange={(e) => {setSearchItem(e.target.value)}}
        />
        <img 
          src={searchIcon} 
          alt="search" 
          onClick={() => {fetchMovies(searchItem)}}
        />

      </div>

      {movies.length  > 0 ? (
        <div className="container">
        {movies.map((movie) => {
          return (
            <MovieCard movie = {movie} />
          )
          
        })} 
        </div> ) : (
        <div className="empty">
            <h1>no movies</h1>
        </div>
      )}
      
        
      
    </div>
  )
}

export default App;
