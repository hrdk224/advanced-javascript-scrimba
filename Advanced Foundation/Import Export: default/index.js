import { interplanetaryDestinationsArr, shortSpaceTripsArr } from "./data.js";
import filter from "./getMatchingTripsArr.js"; // because defualt keyword was used function named can be changed to anything 

console.log(filter(interplanetaryDestinationsArr, 'exotic'))

//NOTE: One file can have only one default export