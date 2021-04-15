import React from "react";
import { movies } from "../data";

function Movies() {

  const movieDisplay = movies.map(movie=>{
    return <div> <h3>{movie.title}</h3> 
                <p>{movie.time} mins</p> 
                  <ul>
                  {movie.genres.map((genre) => (
                     <li key={genre}>{genre}</li>
                     ))}
                  </ul>
            </div>
  })
  return (

    <div>
      <h1>Movies Page</h1>{movieDisplay}</div>
    )
}

export default Movies;
