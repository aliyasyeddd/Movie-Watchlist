// const watchList = document.querySelector(".watchList-container")
// const exploreBox = document.querySelector('.explore-box');

// // Get movies from localStorage
// let storedMovies = JSON.parse(localStorage.getItem("movies")) || [];

// if (storedMovies.length === 0) {
//     exploreBox.style.display = "block";
// } else {
//     exploreBox.style.display = "none";
//     renderWatchList();
// }

// function renderWatchList() {
//     storedMovies.forEach(movie => {
//         let movieCard = ""
//         movieCard += `
//                       <div class="movie-card">
//                                 <img 
//                                  src="${movie.Poster}"
//                                  alt="Movie Poster"
//                                  class="movie-poster"
//                                  onerror="this.src='https://placehold.co/300x450?text=No+Poster&font=roboto';"
//                                 />
//                     <div class="movie-info">
//             <div class="movie-info1">
//                 <h2 class="movie-title">${movie.Title}</h2>
//                  <div class="rating-box">
//                      <i class="fa-solid fa-star"></i>
//                      <p class="movie-rating">${movie.imdbRating}</p>
//                   </div>
//             </div>
//             <div class="movie-info2">
//                  <p class="movie-runtime">${movie.Runtime}</p>
//                  <p class="movie-genre">${movie.Genre}</p>
//                  <div class="watchList-btn">
//                     <i class="fa-solid fa-minus-circle"  data-minus="${movie.imdbID}"></i>
//                     <p class="watchList-text">watchList</p>
//                  </div>
//             </div>
//             <p class="movie-description">${movie.Plot}</p>
//         </div>
//     </div>
//     `
//         watchList.innerHTML += movieCard
//     });
// }


