import API_KEY from "./variable.js"

// Grab Elements and save api key and urls in variables

const BASE_URL = `https://api.themoviedb.org/3`;

const API_URL = `${BASE_URL}/discover/movie?sort_by=popularity.desc&${API_KEY}`;

const IMG_URL = `https://image.tmdb.org/t/p/w500`;

const searchURL = `${BASE_URL}/search/movie?${API_KEY}` 

const main = document.getElementById("movie-container")
const form = document.getElementById("form")
const search = document.getElementById("search")

getMovies(API_URL)

// get movies function
function getMovies(url) {
    // request resources from tmdb 
    fetch(url).then(res => res.json()).then(data => {
      // console.log(data.results)
      showMovies(data.results)
    })
  }

  

//   show movies function
function showMovies(data) {
    main.innerHTML = ""
  
    // loop through recources to get key-value pairs needed
    data.forEach(movie => {
      const {title, poster_path, vote_average, overview} = movie
      const movieEl = document.createElement("div")
      movieEl.classList.add("movie")
    //   created html to display resources 
      movieEl.innerHTML = `
         
      
        <img src="${IMG_URL + poster_path}" alt="${title}">
  
        <div class="movie-info">
          <h1>${title}</h1>
          <span class="${getColor(vote_average)}">${vote_average}</span>
        </div>
    
        <div class="overview">
  
          <h2>Overview</h2>
          ${overview}
        </div>
      
      `
    main.appendChild(movieEl)
    })
  }

// get color function for ratings
  const getColor = (vote) => (vote >= 8) ? "green": (vote >= 5) ? "orange" : "red"
  
// search field functionality 
  form.addEventListener("submit", (e) => {
    e.preventDefault()
  
    const searchTerm = search.value 
    searchTerm ? getMovies(`${searchURL}&query=${searchTerm}`) : getMovies(API_URL)
    
    search.value = ""
  })