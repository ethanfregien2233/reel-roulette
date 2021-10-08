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

gapi.load("client", loadClient);
  
function loadClient() {
    gapi.client.setApiKey("AIzaSyBvbJ-L8p9Ao3KqmIv5kfPY0NJeHN-1FcA");
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
                function(err) { console.error("Error loading GAPI client for API", err); }) };



