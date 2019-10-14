//STEP 1
var moviesArray = ["Holiday", "3 idiots", "Sanju", "Skyscrapper", "Rampage"];
window.console.log(moviesArray[1]);
window.console.log("\n");

//STEP 2
var movies = new Array(5);
movies[0] = "Tomorrow never dies";
movies[1] = "Baby";
movies[2] = "Baby driver";
movies[3] = "Die another day";
movies[4] = "Rustom";
window.console.log(movies[0]);
window.console.log("\n");

//STEP 3
movies.splice(2, 0, "John Wick");
window.console.log(movies.length);
window.console.log("\n");

//STEP 4
movies = ["Golmal", "Bala", "Hum", "Hum-tum", "Kesari"];
delete movies[0];
window.console.log(movies);
window.console.log("\n");

//STEP 5
movies = ["Salt", "John wick 2", "Kingsman", "Terminator", "Spy kids", "Everest", "Baby"];
for (var i = 0; i < movies.length; i++) {
    window.console.log(movies[i]);
}
window.console.log("\n");

//STEP 6
movies = ["Salt", "John wick 2", "Kingsman", "Terminator", "Spy kids", "Everest", "Baby"];
var x;
for (x in movies) {
    window.console.log(movies[x]);
}
window.console.log("\n");

//STEP 7
movies = ["Salt", "John wick 2", "Kingsman", "Terminator", "Spy kids", "Everest", "Baby"];
var x;
for (x in movies.sort()) {
    window.console.log(movies[x]);
}
window.console.log("\n");

//STEP 8
movies = ["Salt", "John wick 2", "Kingsman", "Terminator", "Spy kids", "Everest", "Baby"];
var leastFavMovies = ["Robot 2", "saaheb", "Peepli live"];
window.console.log("Movies I like:");
window.console.log("\n");
for (var i = 0; i < movies.length; i++) {
    window.console.log(movies[i]);
}
window.console.log("\n");
window.console.log("Movies I regret watching:");
window.console.log("\n");
for (var i = 0; i < leastFavMovies.length; i++) {
    window.console.log(leastFavMovies[i]);
}
window.console.log("\n");

//STEP 9
movies = ["Salt", "John wick 2", "Kingsman", "Terminator", "Spy kids", "Everest", "Baby"];
var leastFavMovies = ["Robot 2", "saaheb", "Peepli live"];
movies = movies.concat(leastFavMovies);
movies = movies.reverse();
for (var x in movies){
    window.console.log(movies[x]);
}
window.console.log("\n");

//STEP 10
movies = ["Salt", "John wick 2", "Kingsman", "Terminator", "Spy kids", "Everest", "Baby"];
var leastFavMovies = ["Robot 2", "saaheb", "Peepli live"];
movies = movies.concat(leastFavMovies);
movies = movies.reverse();
var lastItem = movies.slice((movies.length)-1)
window.console.log(lastItem);
window.console.log("\n");

