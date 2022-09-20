import { API_KEY } from "./variable.js";
import  App  from "./main.js"

export const base_url = `https://api.themoviedb.org/3`;
export const api_url = `${base_url}/discover/movie?sort_by=popularity.desc&${API_KEY}`;
export const img_url = `https://image.tmdb.org/t/p/w500`;

getMovies(api_url)

 export function getMovies(url) {
  // request resources from tmdb
  fetch(url).then(res => res.json())
  .then(data => {
    // console.log(data.results)
    App.showMovies(data.results)
  })
}


export function showMovies(data) {
  // display create section and display h1
  const section = document.createElement('section')
  section.setAttribute('id', 'top-rated')
  section.innerHTML = `<h1>Top rated</h1>`
  this.mainBody.appendChild(section)

  // create wrapper and append to section
  const wrapper = document.createElement('div')
  wrapper.setAttribute('id', 'rated-container')
  section.appendChild(wrapper);

  // loop through resources to get key-value pairs needed

  console.log(data)
  

  // data.forEach(movie => {
  //   const {title, poster_path, vote_average, overview} = movie;
  //   const movieEl = document.createElement('div')
  //   movieEl.classList.add('movie-box')

  //   movieEl.innerHTML = `
  //   <img src="${img_url + poster_path}" alt="${title}">
  //   <div class="movie-info">
  //     <h1>${title}</h1>
  //     <div class="info-right">
  //       <span class="green">${vote_average}</span>
  //       <p>like</p>
  //     </div>
  //   </div>
  //   <div class="overview">
  //     <h2>Overview</h2>
  //     <p>${overview}</p>
  //   </div>
  //   `;
  //  wrapper.appendChild(movieEl)
  // })
  
}



