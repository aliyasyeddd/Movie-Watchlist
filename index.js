const apiKey = 63279049;

const res = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=batman`)
const data = await res.json();
console.log(data.Search);

for (const movie of data.Search) {
      const movieDetails = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&i=${movie.imdbID}`).then(res => res.json());
        console.log(movieDetails);
}