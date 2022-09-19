import { showHeader } from "./showHeader.js";
import { showBanner } from "./showBanner.js";
import { showReview } from "./showReview.js";
import { showQuestions } from "./showQuestions.js";

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
  showMovies() {

  },
  // show questions method
  showQuestions,
  // show footer method
  showFooter() {
    // created section with footer elements and appended it to footer
    const section = document.createElement('section')
    section.setAttribute('class', 'footer')
    section.innerHTML = `
    <h1 class="footer-header">Questions? Contact Us</h1>
    <div class="footer-links">
      <div class="first-col">
        <ul>
          <li>Investor Relations</li>
          <li>FAQ</li>
          <li>Privacy</li>
          <li>Speed Test</li>
        </ul>
      </div>

      <div class="first-col">
        <ul>
          <li>Help Center</li>
          <li>Cookies</li>
          <li>Jobs</li>
          <li>Legal Notice</li>
        </ul>
      </div>

      <div class="first-col">
        <ul>
          <li>Accounts</li>
          <li>Media Center</li>
          <li>Terms of Use</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
    `;
    this.footer.appendChild(section);
  },
  // render page method
 renderPage() {
  this.showHeader();
  this.showBanner();
  this.showReview("blank.png", "right");
  this.showReview("jiraiya.png", "left");
  this.showQuestions();
  this.showFooter();
}
};

App.renderPage();

export default App;