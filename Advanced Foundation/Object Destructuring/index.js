// Object Destructuring enables us to extract properties from objects into distinct variables
const favouriteFilm = {
    title: "The Green Book",
    year: 2018,
    genre: "Biographical Comedy-Drama",
    stars: "Viggo Mortensen and Mahershala Ali",
    director: "Peter Farelly"

}

const { title, year, genre, stars, director } = favouriteFilm

console.log(`have you watched ${title} ?, From ${year} ? The movie was state of the art directed by ${director} and played by ${stars}`)