import App from "./main.js"

export function showFooter() {
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
  }
