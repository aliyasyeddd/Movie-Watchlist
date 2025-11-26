const apiKey = 63279049;
const searchBtn = document.getElementById('search-button');
const movieInput = document.getElementById('search-input');
const exploreBox = document.querySelector('.explore-box');
const moviesContainer = document.querySelector('.movies-container');


searchBtn.addEventListener('click', fetchMovies);

async function fetchMovies() {
    const query = movieInput.value.trim()

    // If input empty → reset UI and stop
    if (!query) {
        moviesContainer.innerHTML = "";
        exploreBox.style.display = "block";
    }

    // Clear previous results
    moviesContainer.innerHTML = "";

    const res = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${query}`)
    const data = await res.json();

    //if no movies found
    if (!data.Search) {
        moviesContainer.innerHTML = "<p class='no-results'>No movies found.</p>";
        exploreBox.style.display = "none"
        return
    }


    exploreBox.style.display = "none"


    for (const movie of data.Search) {
        const movieDetails = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&i=${movie.imdbID}`).then(res => res.json());
        renderMovies(movieDetails);
    }
}

function renderMovies(movie) {
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
                 <div class="Watchlist-btn">
                    <i class="fa-solid fa-plus-circle"></i>
                    <p class="watchlist-text">Watchlist</p>
                 </div>
            </div>
            <p class="movie-description">${movie.Plot}</p>
        </div>
    </div>
    `
    moviesContainer.innerHTML += movieCard;
}




