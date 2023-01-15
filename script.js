//Initial References
let movieNameRef = document.getElementById("movie-name");
let movieYearRef = document.getElementById("movie-year");
let searchBtn = document.getElementById("search-btn");
let result = document.getElementById("result");

//Function to fetch data from API
let getMovie = () => {
  let movieName = movieNameRef.value;
  let movieYear = movieYearRef.value;

  if (movieName == 0) {

    const Random_Movies = [
        'Iron Man',
        'The Incredible Hulk',
        'Iron Man 2',
        'Thor',
        'Captain America: The First Avenger',
        'The Avengers',
        'Iron Man 3',
        'Thor: The Dark World',
        'Captain America: The Winter Soldier',
        'Guardians of the Galaxy',
        'Avengers: Age of Ultron',
        'Ant-Man',
        'Captain America: Civil War',
        'Doctor Strange',
        'Guardians of the Galaxy Vol. 2',
        'Spider-Man: Homecoming',
        'Thor: Ragnarok',
        'Black Panther',
        'Avengers: Infinity War',
        'Ant-Man and the Wasp',
        'Captain Marvel',
        'Avengers: Endgame',
        'Spider-Man: Far From Home',
        'Jurassic World',
        'Furious 7',
        'Minions',
        'Jurassic Park',
        'Despicable Me 2',
        'The Secret Life of Pets',
        'The Fate of the Furious',
        'E.T. the Extra-Terrestrial',
        'Fast & Furious 6',
        'Sing',
        'Fast Five',
        'The Lost World: Jurassic Park',
        'Mamma Mia!',
        'Fifty Shades of Grey',
        'King Kong',
        'Ted',
        'Despicable Me',
        'Meet the Fockers',
        'Bruce Almighty',
        'Jaws',
        'Lucy',
        'The Bourne Ultimatum',
        'Les Miserables',
        'Warcraft',
        'The Mummy Returns',
        'The Mummy',
        'Jason Bourne',
        'The Mummy: Tomb of the Dragon Emperor',
        'Snow White and the Huntsman',
        'Back to the Future',
    ]
    let randomNumber = Math.floor(Math.random() * 52);
    movieName = Random_Movies[randomNumber];
    movieYear = "NA";
}
 
  let url = `http://www.omdbapi.com/?t=${movieName}&y=${movieYear}&apikey=aabc4e6b`;

  if (movieName.length <= 0) {
    result.innerHTML = `<h3 class="msg">Please Enter A Movie Name</h3>`;
  }
  else {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        //If movie exists in database
        if (data.Response == "True") {
          result.innerHTML = `
            <div class="info">
                <img src=${data.Poster} class="poster">
                <div>
                    <h2>${data.Title}</h2>
                    <div class="rating">
                        <img src="star-icon.svg">
                        <h4>${data.imdbRating}</h4>
                    </div>
                    <div class="details">
                        <span>${data.Rated}</span>
                        <span>${data.Year}</span>
                        <span>${data.Runtime}</span>
                    </div>
                    <div class="genre">
                        <div>${data.Genre.split(",").join("</div><div>")}</div>
                    </div>
                    <h3>Actors :</h3>
                    <p>${data.Actors}</p>
                    <h3>Director :</h3>
                    <p>${data.Director}</p>
                    <h3>Language :</h3>
                    <p>${data.Language}</p>
                    <h3>Plot :</h3>
                    <p>${data.Plot}</p>
                    
                </div>
            </div>
        `;
        }
        //If movie does NOT exists in database
        else {
          result.innerHTML = `<h3 class='msg'>${data.Error}</h3>`;
        }
      })
      //If error occurs
      .catch(() => {
        result.innerHTML = `<h3 class="msg">Error Occured</h3>`;
      });
  }
};
searchBtn.addEventListener("click", getMovie);
window.addEventListener("load", getMovie);
