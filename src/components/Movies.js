import React from "react";
import { movies } from "../data";

function Movies() {

  const moviesArray = movies.map((movie)=>{
    const genres = movie.genres.map((genre)=>{
      return <li key = {movie.genres.indexOf(genre)}>{genre}</li>
    })
    return <div key = {movies.indexOf(movie)}>
      <h1>Name: {movie.title}</h1>
      <p>Time {movie.time}</p>
      <p>Genres:
        
         
            {genres}
       
      
      </p>
    </div>
  })

  return <div>
    <h1>Movies Page</h1>
    {moviesArray}
    
    </div>;
}

export default Movies;
