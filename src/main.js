import { showHeader } from "./showHeader.js";
import { showBanner } from "./showBanner.js";
import { showReview } from "./showReview.js";
import {  getMovies } from "./getMovies.js";
import { showMovies } from "./showMovies.js";
import { showQuestions } from "./showQuestions.js";
import { showFooter } from "./showFooter.js";
import { API_KEY } from "./variable.js";

const App = {
  mainBody: document.getElementById("movie-container"),
  header: document.getElementById("header-container"),
  footer: document.getElementById("footer"),
  base_url: "https://api.themoviedb.org/3",
  api_url:  "/discover/movie?sort_by=popularity.desc&" + API_KEY,
  img_url: "https://image.tmdb.org/t/p/w500",

  // methods
  showHeader,
  showBanner,
  showReview,
  getMovies,
  showMovies,
  showQuestions,
  showFooter,
  // render page method
 renderPage() {
  this.showHeader();
  this.showBanner();
  this.showReview("blank.png", "right");
  this.showReview("jiraiya.png", "left");
  this.getMovies(this.base_url + this.api_url)
  this.showQuestions();
  this.showFooter();
}
};

App.renderPage();

export default App;