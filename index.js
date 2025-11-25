const apiKey = 63279049;

fetch(`http://img.omdbapi.com/?apikey=${apiKey}`)
.then(res => res.json())
.then(data => console.log(data));