var oldCivic = {
    // property
    name: 'Civic',
    year: 2000,
    broken: true
};
// Type 1
var printVehicle = function (vehicle) {
    console.log("Name: " + vehicle.name);
    console.log("Year: " + vehicle.year);
    console.log("Broken: " + vehicle.broken);
};
printVehicle(oldCivic);
var printVehicles = function (vehicle) {
    console.log("Name1: " + vehicle.name);
    console.log("Year1: " + vehicle.year);
    console.log("Broken1: " + vehicle.broken);
};
printVehicles(oldCivic);
