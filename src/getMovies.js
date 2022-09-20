import App from "./main.js";
import { showMovies } from "./showMovies.js";

export function getMovies(url) {
  // request resources from tmdb
  fetch(url).then(res => res.json())
  .then(data => {
    // console.log(data.results)
    this.showMovies(data.results);
  })
}