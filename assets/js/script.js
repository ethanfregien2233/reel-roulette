var movieTitle = document.querySelector("#movie-title");
var movieOverview = document.querySelector("#movie-overview");
var watchInfo = document.querySelector("#where-to-watch");
var submitBtn = document.querySelector("#submit-button");
var genreMenu = document.querySelector("#genre-menu");
var trailerContainer = document.querySelector("#trailer-container");

var searchMovie = function(event) {
    event.preventDefault();
    var genreId = genreMenu.value;
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=e4a0fa8349dde042a07202bf3cbf39c6&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=" + genreId + "&with_watch_monetization_types=rent")
    .then(function(data) {
        return data.json()
    })
    .then(function(data) {
        console.log(data);
        var randomMovie = data.results[Math.floor(Math.random() * data.results.length)];
        console.log(randomMovie);
        var title = randomMovie.title.split(" ").join("");
        movieTitle.textContent = randomMovie.title;
        movieOverview.textContent = randomMovie.overview;
        console.log(title);
    })
};

var getWatchInfo = function(title) {
    // put your fetch request here using "title"
}

var getTrailer = function(title) {
    // put your fetch request for the trailer here using "title"
}

submitBtn.addEventListener("click", searchMovie);