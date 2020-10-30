 export class Vehicle {
    name;
    speed;
    brand;

    constructor(name, speed, brand){
        this.name = name;
        this.speed = speed;
        this.brand = brand;
    }

    about() {
        console.log(`Phuong tien ${this.name} chat voi toc do ${this.speed}`);
    }
}

