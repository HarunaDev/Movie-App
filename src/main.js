// Grab Elements and save api key and urls in variables

const API_KEY = `api_key=9e7c494fd02e35e1ec4a8f7145ca30b1`;
const BASE_URL = `https://api.themoviedb.org/3`
const API_URL = BASE_URL + `/discover/movie?sort_by=popularity.desc&` + API_KEY;
const IMG_URL = `https://image.tmdb.org/t/p/w500`
const searchURL = BASE_URL + `/search/movie?` + API_KEY

const main = document.getElementById("main")
const form = document.getElementById("form")
const search = document.getElementById("search")