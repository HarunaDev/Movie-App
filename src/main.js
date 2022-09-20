import { showHeader } from "./showHeader.js";
import { showBanner } from "./showBanner.js";
import { showReview } from "./showReview.js";
import { showMovies } from "./showMovies.js";
import { showQuestions } from "./showQuestions.js";
import { showFooter } from "./showFooter.js";

const App = {
  mainBody: document.getElementById("movie-container"),
  header: document.getElementById("header-container"),
  footer: document.getElementById("footer"),

  // methods
  // show header method
  showHeader,
  // show banner method
  showBanner,
  // show review method
  showReview,
  // show movies method
  showMovies,
  // show questions method
  showQuestions,
  // show footer method
  showFooter,
  // render page method
 renderPage() {
  this.showHeader();
  this.showBanner();
  this.showReview("blank.png", "right");
  this.showReview("jiraiya.png", "left");
  this.showMovies();
  this.showQuestions();
  this.showFooter();
}
};

App.renderPage();

export default App;