import React from "react";
import { directors } from "../data";

function Directors() {

  const directorInfo = directors.map(director => {
    return <div><h3>{director.name}</h3>
    <ul>
      {director.movies.map(movie => <li key={movie}>{movie}</li>)}</ul></div>
  })

  return (<div>
  <h1>Directors Page</h1>{directorInfo}</div>
  )
}

export default Directors;
