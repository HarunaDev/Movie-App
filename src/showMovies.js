import { API_KEY } from "./variable.js";
import  App  from "./main.js"

const base_url = `https://api.themoviedb.org/3`;
const api_url = `${base_url}/discover/movie?sort_by=popularity.desc&${API_KEY}`;
const img_url = `https://image.tmdb.org/t/p/w500`;

getMovies(api_url)

function getMovies(url) {
  // request resources from tmdb
  fetch(url).then(res => res.json())
  .then(data => {
    console.log(data.results)
  })
}

export function showMovies(data) {
  // display create section and display h1
  const section = document.createElement('section')
  section.setAttribute('id', 'top-rated')
  section.innerHTML = `<h1>Top rated</h1>`
  this.mainBody.appendChild(section)

}
