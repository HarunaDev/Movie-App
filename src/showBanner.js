import App from "./main.js";

export function showBanner() {
  this.mainBody.innerHTML = "";
  const section = document.createElement('section')
  section.setAttribute('id', 'Banner')
  section.innerHTML = `
  <h1>Lorem ipsum dolor sit amet.</h1>

  <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, voluptates? Et possimus dolor numquam in.</h3>

  <button>Get started</button>
  `;
  this.mainBody.appendChild(section);
}