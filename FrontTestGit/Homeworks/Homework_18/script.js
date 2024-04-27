class Transport {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    displayMainInfo() {
      console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    }
  }
  
  class Car extends Transport {
    constructor(make, model, year, numDoors, isConvertible) {
      super(make, model, year);
      this.numDoors = numDoors;
      this.isConvertible = isConvertible;
    }
  }
  
  class Motorcycle extends Transport {
    constructor(make, model, year, numWheels, hasSideCar) {
      super(make, model, year);
      this.numWheels = numWheels;
      this.hasSideCar = hasSideCar;
    }
  }
  
  const car1 = new Car('Toyota', 'Camry', 2020, 4, false);
  const car2 = new Car('Ford', 'Mustang', 2018, 2, true);
  
  const motorcycle1 = new Motorcycle('Harley-Davidson', 'Sportster', 2019, 2, false);
  const motorcycle2 = new Motorcycle('Honda', 'CBR600RR', 2021, 2, true);
  
  car1.displayMainInfo();
  car2.displayMainInfo();
  motorcycle1.displayMainInfo();
  motorcycle2.displayMainInfo();
  