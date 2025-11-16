let movies = [
    "Asterdes",
    "Infinity-War",
    "DR.Doom",
    "Iron Man",
    "Spider-Man",
    "Dead-pool",
    "Ethernal-war",
    "The Batman",
    "End-game",
    "Gangs of Wasseypur",
    "Three-idiots",
    "Sholay"
];

let searchInput = document.getElementById("search");
let movieList = document.getElementById("movieList");

displayMovies(movies);

searchInput.addEventListener("keyup", function () {
    let text = searchInput.value.toLowerCase();

    let filtered = movies.filter(movie => 
        movie.toLowerCase().includes(text)
    );

    displayMovies(filtered);
});

function displayMovies(list) {
    movieList.innerHTML = "";

    list.forEach(movie => {
        let li = document.createElement("li");
        li.textContent = movie;
        movieList.appendChild(li);
    });
}
