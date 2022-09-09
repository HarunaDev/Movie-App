/* 
// Variables initialised from version 1 of app

// import API_KEY from "./variable"

// Grab Elements and save api key and urls in variables

// const BASE_URL = `https://api.themoviedb.org/3`;

// const API_URL = `${BASE_URL}/discover/movie?sort_by=popularity.desc&${API_KEY}`;

// const IMG_URL = `https://image.tmdb.org/t/p/w500`;

// const searchURL = `${BASE_URL}/search/movie?${API_KEY}` 

// const main = document.getElementById("rated-container")
// const form = document.getElementById("form")
// const search = document.getElementById("search") */


const App = {
  mainBody: document.getElementById("movie-container"),
  showBanner() {
    this.mainBody.innerHTML = `
    <section id="Banner">
    <h1>Lorem ipsum dolor sit amet.</h1>
  
    <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, voluptates? Et possimus dolor numquam in.</h3>
  
    <button>Get started</button>
    </section>
    `
  },
  renderPage() {
    this.showBanner()
  }
}

App.renderPage()

/*
version-1 code function

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
      movieEl.classList.add("movie-box")
    //   created html to display resources 
      movieEl.innerHTML = `

        // version 2 movie card template
      
        <img src="${IMG_URL + poster_path}" alt="${title}">

          <div class="movie-info">
            <h1>${title}</h1>
            <div class="info-right">
              <span class="${getColor(vote_average)}">${vote_average}</span>
              <p>like</p>
            </div>
          </div>

          <div class="overview">
            <h2>Overview</h2>
            <p>${overview}</p>
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
  }) */