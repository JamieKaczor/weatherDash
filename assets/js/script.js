const searchEl = document.getElementById("search-button");
const clearEl = document.getElementById("clear-history");
const cityEl = document.getElementById("enter-city");
const nameEl = document.getElementById("city-name");
const currentTempEl = document.getElementById("temperature");
const currentHumidityEl = document.getElementById("humidity");
const currentWindEl = document.getElementById("wind-speed");
const currentUVEl = document.getElementById("UV-index");
const currentPicEl = document.getElementById("current-pic");
const historyEl = document.getElementById("history");
var extendedEl = document.getElementById("extended");
var todayweatherEl = document.getElementById("today-weather");
let searchHistory = JSON.parse(localStorage.getItem("search")) || [];

// API key from openweather
const APIKey = "5220969d45bf815138dea8d912ed0803";