// Hãy cài đặt các class sau
/*
    Vehicle:
        - name
        - speed
        - Brand
        - about(): in ra console "Phương tiện `name` chạy với tốc độ `speed` "
    Car kế thừa Vehicle

    Bike kế thừa Vehicle

    Plane kế thừa Vehicle

*/

class Vehicle {
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

class Car extends Vehicle {
    static wheels = 4;
    about() {
        // super.about(); // ghi đè
        console.log(`Phuong tien ${this.name} chay voi toc do ${this.speed}`);
    }

    static aboutCar() {
        console.log('Day la xe hoi. xe hoi ra doi nam 2010');
    }

    get info() {
        return ` 
        Day la xe hoi. Ten cua no la ${this.name}.
        No chay voi toc do la ${this.speed}. 
        No duoc san xua boi hang ${this.brand}`
    }

    set preferedSpeed(preferedSpeed){
        if(isNaN(preferedSpeed)){ // neu khong phai la so => la chu
            console.log("Nhap vao 1 so");
        }else{
            this.speed = preferedSpeed;
        }
    }
}

class Bike extends Vehicle {
    static wheels = 2;
}

class Plane extends Vehicle {

}

// let mercedes = new Car('mercedes', 200, 'Mer');
// console.log(mercedes.name);
// console.log(Car.wheels);
// mercedes.about();
// console.log(Bike.wheels);
// Car.aboutCar();

//=======================================================================

// getter va setter : phương thức đặc biệt 

// let lexus2020 = new Car('lexus', 120, 'Toyota');
// console.log(lexus2020.info);
// lexus2020.preferedSpeed = 200;
// console.log(lexus2020.info);

//=========================================================

//module: chương trình javascript để giải quyết vấn đề 
//import/export
import {helloByVietNamese, helloByJapanese} from "./hello.js";
helloByVietNamese();
helloByJapanese();

import{Vehicle} from "./Vehicle.js";
Vehicle();