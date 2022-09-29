import App from "./main.js"; 

export function showHeader() {
  // created show header method to display render header elements
  this.header.innerHTML = `<h1>Show<span>Plus<i class="fa-regular fa-plus"></i></span>  </h1>`;
  const header_left = document.createElement('div')
  header_left.setAttribute('class', 'left')
  header_left.innerHTML = `<h1>O</h1>`;
  this.header.appendChild(header_left);

  // created form & appended to header_left div
  const form = document.createElement('form')
  form.setAttribute('id', 'form');
  header_left.appendChild(form);

  // const search_icon = document.createElement('i')
  // search_icon.classList.add('fa-regular', '')

  // created input with attributes and appended to form
  const input = document.createElement('input')
  input.setAttribute('type', 'text')
  input.setAttribute('placeholder', 'Search')
  input.setAttribute('id', 'search')
  input.setAttribute('class', 'search');
  form.appendChild(input);
}

