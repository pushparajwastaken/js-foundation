// let teaFlavors = ["green tea", "black tea", "oolong tea"];
// let firstTea = teaFlavors[0];
// console.log(firstTea);
// let cities = ["London", "Tokyo", "Paris", "New York"];
// let favouriteCity = cities[2];
// console.log(favouriteCity);
// let teatypes = ["herbal tea", "white tea", "masala chai"];
// teatypes[1] = "jasmine tea";
// console.log(teatypes[1]);
// citiesvisited = ["Mumbai", "Sydney"];
// citiesvisited.push("Berlin");
// console.log(citiesvisited);
// let popularteas = ["green tea", "black tea", "oolong tea"];
// let softcopyteas = popularteas;
// popularteas.pop();
// console.log(softcopyteas);
// console.log(popularteas);
let topcitites = ["London", "Tokyo", "Paris", "New York"];
let hardcopycities = [...topcitites];
let worldcities = topcitites.concat(hardcopycities);
console.log(worldcities);
let islondoninlist = worldcities.includes("London");
console.log(islondoninlist);
