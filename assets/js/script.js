var movieTitle = document.querySelector("#movie-title");
var movieOverview = document.querySelector("#movie-overview");
var watchInfo = document.querySelector("#where-to-watch");
var submitBtn = document.querySelector("#submit-button");
var genreMenu = document.querySelector("#genre-menu");
var trailerContainer = document.querySelector("#trailer-container");
var watchListButton = document.querySelector("#list-button");
var watchListContainer = document.querySelector("#watch-list");
var watchList = [];

var searchMovie = function(event) {
    // prevent Browser default refresh
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

        // Now we have Title Data --> 
        getVideo(title);
    })

    // This code would return before the async fetch method

};



function getVideo(query) {

    console.log(`Searching for ${query}`);

    $.ajax({
      type: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      data: {
          key: 'AIzaSyBvbJ-L8p9Ao3KqmIv5kfPY0NJeHN-1FcA',
          q: `${query}"trailer"`,
          part: 'snippet',
          maxResults: 1,
          type: 'video',
          videoEmbeddable: true,
      },
      success: function(data){
          console.log(data);
          embedVideo(data)
      },
      error: function(response){
          console.log("Request Failed");
      }
    });
  }

  function embedVideo(data) {
    $('iframe').attr('src', 'https://www.youtube.com/embed/' + data.items[0].id.videoId)
}

// save movie title to watch list into localStorage as object
var watchLaterListSave = function() {
    var title = movieTitle.innerHTML
    var watchList = JSON.parse(localStorage.getItem("watchList")) || [];
    watchList.push(title);
    var newTitle = JSON.stringify(watchList);
    localStorage.setItem("watchList", newTitle); 

    loadWatchList();
};

var loadWatchList = function() {
    watchListContainer.textContent = "";
    
}


watchListButton.addEventListener("click", watchLaterListSave);
submitBtn.addEventListener("click", searchMovie);

//submitBtn.addEventListener("click", getVideo);