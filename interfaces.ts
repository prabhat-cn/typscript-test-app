const oldCivic = {
  // property
  name: 'Civic',
  year: 2000,
  broken: true,
};

// Type 1
const printVehicle = (vehicle: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
};

printVehicle(oldCivic);

// Type 2
interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}
const printVehicles = (vehicle: Vehicle): void => {
  console.log(`Name1: ${vehicle.name}`);
  console.log(`Year1: ${vehicle.year}`);
  console.log(`Broken1: ${vehicle.broken}`);
};

printVehicles(oldCivic);
