import App from "./main.js";

export function showBanner() {
  this.mainBody.innerHTML = "";
  const section = document.createElement('section')
  section.setAttribute('id', 'Banner')
  section.innerHTML = `
  <h1>Unlimited movies, TV <br> shows and more.</h1>

  <h3>Create a watch-list, share with friends.</h3>

  <button>Get started</button>
  `;
  this.mainBody.appendChild(section);
}