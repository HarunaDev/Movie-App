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

const mainBody = document.getElementById("movie-container");

function displayBanner() {
  mainBody.innerHTML = `
  <section id="Banner">
  <h1>Lorem ipsum dolor sit amet.</h1>

  <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, voluptates? Et possimus dolor numquam in.</h3>

  <button>Get started</button>
</section>

<section id="review">
  <div class="left">
    <h1>Lorem ipsum dolor sit amet.</h1>

    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, facere! Quaerat, et nostrum?</h3>
  </div>

  <img src="./img/jiraiya.png" alt="">
</section>

<section id="review">
        <img src="./img/jiraiya.png" alt="">

        <div class="right">
          <h1>Lorem ipsum dolor sit amet.</h1>

          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, facere! Quaerat, et nostrum?</h3>
        </div>
      </section>

      <section id="alt-text">
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br> Harum, similique eligendi.</h3>
      </section>

      <section id="top-rated">
        <h1>Top rated</h1>

        <div id="rated-container">
          <div class="movie-box">
          <img src="img/jiraiya.png" alt="Title">

          <div class="movie-info">
            <h1>Movie Title</h1>
            <div class="info-right">
              <span class="green">9</span>
              <p>like</p>
            </div>
          </div>

          <div class="overview">
            <h2>Overview</h2>
            <p>The tale of jiraiya, lorem ipsum, just lorem ipsum that i typed out... blah blah blah!</p>
          </div>
          </div>

          <div class="movie-box">
          <img src="img/jiraiya.png" alt="Title">

          <div class="movie-info">
            <h1>Movie Title</h1>
            <div class="info-right">
              <span class="green">9</span>
              <p>like</p>
            </div>
          </div>

          <div class="overview">
            <h2>Overview</h2>
            <p>The tale of jiraiya, lorem ipsum, just lorem ipsum that i typed out... blah blah blah!</p>
          </div>
          </div>

          <div class="movie-box">
          <img src="img/jiraiya.png" alt="Title">

          <div class="movie-info">
            <h1>Movie Title</h1>
            <div class="info-right">
              <span class="green">9</span>
              <p>like</p>
            </div>
          </div>

          <div class="overview">
            <h2>Overview</h2>
            <p>The tale of jiraiya, lorem ipsum, just lorem ipsum that i typed out... blah blah blah!</p>
          </div>
          </div>

          <div class="movie-box">
          <img src="img/jiraiya.png" alt="Title">

          <div class="movie-info">
            <h1>Movie Title</h1>
            <div class="info-right">
              <span class="green">9</span>
              <p>like</p>
            </div>
          </div>

          <div class="overview">
            <h2>Overview</h2>
            <p>The tale of jiraiya, lorem ipsum, just lorem ipsum that i typed out... blah blah blah!</p>
          </div>
          </div>

          <div class="movie-box">
          <img src="img/jiraiya.png" alt="Title">

          <div class="movie-info">
            <h1>Movie Title</h1>
            <div class="info-right">
              <span class="green">9</span>
              <p>like</p>
            </div>
          </div>

          <div class="overview">
            <h2>Overview</h2>
            <p>The tale of jiraiya, lorem ipsum, just lorem ipsum that i typed out... blah blah blah!</p>
          </div>
          </div>

          <div class="movie-box">
          <img src="img/jiraiya.png" alt="Title">

          <div class="movie-info">
            <h1>Movie Title</h1>
            <div class="info-right">
              <span class="green">9</span>
              <p>like</p>
            </div>
          </div>

          <div class="overview">
            <h2>Overview</h2>
            <p>The tale of jiraiya, lorem ipsum, just lorem ipsum that i typed out... blah blah blah!</p>
          </div>
          </div>

        </div>
      </section>

      <section id="FAQ">
        <div class="questions">
          <h1 class="faq-header">Frequently Asked Questions</h1>

          <!-- questions section -->
          <div class="question-section">
            <!-- single question -->
            <article class="question">
              <div class="question-title">
                <p>do you like action movies</p>
                <button type="button" class="question-btn">
                  <span class="plus-icon">
                    <p>+</p>
                  </span>
                  <span class="minus-icon">
                    <p>-</p>
                  </span>
                </button>
              </div>
              <div class="question-text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident mollitia a officia explicabo, totam eveniet.</p>
              </div>
            </article>
            <!-- end single question -->

            <!-- single question -->
            <article class="question">
              <div class="question-title">
                <p>do you like comedy movies</p>
                <button type="button" class="question-btn">
                  <span class="plus-icon">
                    <p>+</p>
                  </span>
                  <span class="minus-icon">
                    <p>-</p>
                  </span>
                </button>
              </div>
              <div class="question-text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident mollitia a officia explicabo, totam eveniet.</p>
              </div>
            </article>
            <!-- end single question -->

            <!-- single question -->
            <article class="question">
              <div class="question-title">
                <p>do you like Romantic movies</p>
                <button type="button" class="question-btn">
                  <span class="plus-icon">
                    <p>+</p>
                  </span>
                  <span class="minus-icon">
                    <p>-</p>
                  </span>
                </button>
              </div>
              <div class="question-text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident mollitia a officia explicabo, totam eveniet.</p>
              </div>
            </article>
            <!-- end single question -->
          </div>
          <!-- questions section -->
        </div>
      </section>
  `

}

displayBanner()

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