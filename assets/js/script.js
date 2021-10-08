var searchMovie = function() {
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=e4a0fa8349dde042a07202bf3cbf39c6&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=5&with_watch_monetization_types=flatrate")
    .then(function(results) {
        return results.json()
    })
    .then(function(results) {
        console.log(results);
    })
}

searchMovie();