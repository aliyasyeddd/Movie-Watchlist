const watchList = document.querySelector(".watchList-container")
const exploreBox = document.querySelector('.explore-box');

// Get movies from localStorage
let storedMovies = JSON.parse(localStorage.getItem("movieInfo")) || [];


(storedMovies.length === 0)
    ? (exploreBox.style.display = "block")
    : (exploreBox.style.display = "none", renderWatchList(storedMovies));

    
document.addEventListener("click", handleRemoveMovieFromWatchList)


function renderWatchList(movies) {
    movies.forEach(movie => {
        let movieCard = ""
        movieCard += `
                      <div class="movie-card">
                                <img 
                                 src="${movie.Poster}"
                                 alt="Movie Poster"
                                 class="movie-poster"
                                 onerror="this.src='https://placehold.co/300x450?text=No+Poster&font=roboto';"
                                />
                                <div class="movie-info">
                                  <div class="movie-info1">
                                       <h2 class="movie-title">${movie.Title}</h2>
                                       <div class="rating-box">
                                           <i class="fa-solid fa-star"></i>
                                           <p class="movie-rating">${movie.imdbRating}</p>
                                        </div>
                                  </div>
                                  <div class="movie-info2">
                                         <p class="movie-runtime">${movie.Runtime}</p>
                                         <p class="movie-genre">${movie.Genre}</p>
                                         <button class="watchList-btn">
                                            <i class="fa-solid fa-minus-circle"  data-remove="${movie.imdbID}"></i>
                                            <span class="remove-text">Remove</span>
                                         </button>
                                  </div>
                                  <p class="movie-description">${movie.Plot}</p>
                                </div>
                      </div>
    `
        watchList.innerHTML += movieCard
    });
}

function handleRemoveMovieFromWatchList(e) {
    if(e.target.dataset.remove) {
        console.log(e.target.dataset.remove)
    }
}


