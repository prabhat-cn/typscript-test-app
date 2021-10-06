class Vehicle {
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

// const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.hunk();

const car = new Car();
car.drive();
car.hunk();
// car.junk(); // Because it is protected
car.startDrivingProcess();
// car.break(); // Because it is private
