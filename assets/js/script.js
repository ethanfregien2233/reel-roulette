var searchMovie = function() {
    fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=e4a0fa8349dde042a07202bf3cbf39c6&language=en-US")
    .then(function(results) {
        return results.json()
    })
    .then(function(results) {
        console.log(results);
    })
}

searchMovie();