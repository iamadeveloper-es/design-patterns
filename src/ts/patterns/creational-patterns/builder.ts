enum CarBrand{
    Mercedes = 'Mercedes',
    BMW = 'BMW',
    Ferrari = 'Ferrari'
}

interface CarPlan{
    setBrand(brand: CarBrand): CarBrand,
    setModel(model: string): string,
    setNumDoors(numDoors: number): number,
    setSpeed(speed: number): number
}

class Car implements CarPlan{

    private brand: CarBrand
    private model: string
    private doors: number
    private speed: number

    setBrand(brand: CarBrand): CarBrand {
        return this.brand = brand
    }
    setModel(model: string): string {
        return this.model = model
    }
    setNumDoors(numDoors: number): number {
        return this.doors = numDoors
    }
    setSpeed(speed: number): number {
        return this.speed = speed
    }

}

interface AbstractCarBuilder{

    
    buildBrand();
    buildModel();
    buildNumDoors();
    buildSpeed();
    getCar(): Car;
}

export class FerrariCarBuilder implements AbstractCarBuilder{

    private car: Car

    constructor(){
        this.car = new Car()
    }

    buildBrand() {
        this.car.setBrand(CarBrand.Ferrari);
    }
    buildModel() {
        this.car.setModel('Testarrosa')
    }
    buildNumDoors() {
        this.car.setNumDoors(3)
    }
    buildSpeed() {
        this.car.setSpeed(290)
    }
    getCar(): Car {
        return this.car
    }
    
}

export class MercedesCarBuilder implements AbstractCarBuilder{

    private car: Car

    constructor(){
        this.car = new Car()
    }

    buildBrand() {
        this.car.setBrand(CarBrand.Mercedes);
    }
    buildModel() {
        this.car.setModel('SLK')
    }
    buildNumDoors() {
        this.car.setNumDoors(3)
    }
    buildSpeed() {
        this.car.setSpeed(280)
    }
    getCar(): Car {
        return this.car
    }
    
}

export class BMWCarBuilder implements AbstractCarBuilder{

    private car: Car

    constructor(){
        this.car = new Car()
    }

    buildBrand() {
        this.car.setBrand(CarBrand.BMW);
    }
    buildModel() {
        this.car.setModel('Serie B')
    }
    buildNumDoors() {
        this.car.setNumDoors(5)
    }
    buildSpeed() {
        this.car.setSpeed(310)
    }
    getCar(): Car {
        return this.car
    }
    
}


export class CarBuilderDirector{
    private carBuilder: AbstractCarBuilder

    constructor(carBuilder: AbstractCarBuilder){
        this.carBuilder = carBuilder
    }

    getCar(): Car{
        return this.carBuilder.getCar()
    }

    build(){
        this.carBuilder.buildBrand()
        this.carBuilder.buildModel()
        this.carBuilder.buildNumDoors()
        this.carBuilder.buildSpeed()
    }
}