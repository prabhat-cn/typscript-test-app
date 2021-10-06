class Vehicle {
  color: string = 'red';
  public drive(): void {
    console.log('Hello Class Drive!!');
  }
  public hunk(): void {
    console.log('Class Hunk!!');
  }
  protected junk(): void {
    console.log('Class junk!!');
  }
}

class BigVehicle {
  color: string = 'red';
  // size: string;
  constructor(public size: string) {
    this.size = size;
  }
}

const bigvehicle = new BigVehicle('BIG');
console.log('bigvehicle.aize->', bigvehicle.size);

class BigCar extends BigVehicle {
  constructor(public wheel: number, color: string) {
    super(color);
  }
}

// inheritance
class Car extends Vehicle {
  private break(): void {
    console.log('Hello Break!!');
  }
  // child class function
  startDrivingProcess(): void {
    // car.break();
    this.break();
    // junk can accessed
    this.junk();
  }
}

const vehicle = new Vehicle();
console.log('vehicle.color->', vehicle.color);
// vehicle.drive();
// vehicle.hunk();

const car = new Car();
console.log('car.color->', car.color);
car.drive();
car.hunk();
// car.junk(); // Because it is protected
car.startDrivingProcess();
// car.break(); // Because it is private
