import React from "react";
import { actors } from "../data";

function Actors() {
  const actorArray = actors.map((actor) =>{
    const movies = actor.movies.map((movie) =>{
      return <li key = {actor.movies.indexOf(movie)}>{movie}</li>
    })
    return <div key = {actors.indexOf(actor)}>
      <h1>Name: {actor.name}</h1>
      <p>Movies:
       
        
            {movies}
         
       
        
      </p>
    </div>
  })
  return <div><h1>Actors Page</h1>{actorArray}</div>;
}

export default Actors;
