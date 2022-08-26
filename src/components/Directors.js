import React from "react";
import { directors } from "../data";

function Directors() {
  const directorArray = directors.map((director) => {
    const movies = director.movies.map((movie) =>{
      return <li key = {director.movies.indexOf(movie)}>{movie}</li>
    })
    return <div key = {directors.indexOf(director)}>
      <h1>Name: {director.name}</h1>
      <p>Movies:
       
          {movies}
     
      </p>
    </div>
  })
  return <div><h1>Directors Page</h1>{directorArray}</div>;
}

export default Directors;
