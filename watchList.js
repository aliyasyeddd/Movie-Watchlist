const watchList = document.querySelector("watchList-container")

// Get movies from localStorage
let storedMovies = JSON.parse(localStorage.getItem("movies")) || [];

console.log(storedMovies)


