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
const newCivic = {
  // property
  name: 'Civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

const Drink = {
  // property
  color: 'brown',
  carbonated: true,
  suger: 40,
  summary(): string {
    return `My drink has ${this.suger} grams of suger`;
  },
};
const printVehicles = (vehicle: Vehicle): void => {
  //   console.log(`Name1: ${vehicle.name}`);
  //   console.log(`Year1: ${vehicle.year}`);
  //   console.log(`Broken1: ${vehicle.broken}`);
  //   console.log('summary', items.summary());
  console.log('summary', vehicle.summary());
};

printVehicles(newCivic);
