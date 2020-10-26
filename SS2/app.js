// let arr = [1,2,3,4,5,6];
// let result = arr.map(function(item){
//     return item * item;
// });
// console.log(result);

// let input = prompt("Nhập vào dãy số: ");
// let arr = input.split(',').map(function(item){
//     return Number(item);
// })

// let x = Number(prompt("Nhập vào số x: "));
// for(let i=0; i<arr.length-1;i++){
//     for(let j=i+1; j<arr.length;j++){
//         if(arr[i]+ arr[j] == x){
//             console.log(`(${i}, ${j})`);
//         }
//     }
// }

// =======Class - Object======

// Class: bản thiết kế để tạo nên 1 đối tượng
// Object: được tạo từ class

// // Tạo class
// class Person {
//     name;
//     age;
//     address;
//     sex;
//     isMariage;

//     // được gọi khi gọi new Person () được gọi
//     constructor (name, age, address, sex, isMariage) {
//         this.name = name;
//         this.age = age;
//         this.address = address;
//         this.sex = sex;
//         this.isMariage = isMariage;
//         console.log(this);
//     }


//     run() {
//         console.log("I'm running");
//     }

//     walk() {
//         console.log("I'm walking");
//     }

//     goTo(destination) {
//         console.log(`I'm going to ${destination}`);
//     }

//     calculateSum(a, b){
//         console.log(`${a} + ${b} = ${a + b}`);
//     }

//     sleep = function() {
    
//     }

//     laugh = () => {

//     }

//     introducetion() {
//         console.log(`Hello everyone. 
//         My name is ${this.name}. 
//         I'm ${this.age} year old. 
//         I'm from ${this.address}. `);
//     }

// }

// // Tạo object (được tạo tư class)
// let vanLiem = new Person('van liem', 20, 'bac giang', 'male', false);
// vanLiem.goTo('nha nguoi yeu');
// vanLiem.introducetion();

// // let long = new Person();
// // long.name = "Long Vit";
// // long.age = 20;
// // long.address = "Ha Tay";
// // long.sex = "Male";
// // long.isMariage = false;
// // console.log(long);

// // let liem = new Person();

// class Animal {
//     name;
//     gender;
//     species;
//     color;
//     legs;

//     constructor(name, gender, species, color, legs){
//         this.name = name;
//         this.gender = gender;
//         this.species = species;
//         this.color = color;
//         this.legs = legs;
//         console.log(this);

//         speak() {


//         }
//     }
// }

// let fish = new Animal('Chep', 'female', 'ca', 'while', 'khong chan');


//  ===== Kế thừa ======
class Person {
    name;
    age;
    sex;
    slogan;

    constructor(name, age, sex, slogan) {
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.slogan = slogan;
    }
}

class GoodBoy extends Person {
    poor;

    constructor(name, age, sex, slogan, poor) {
        super(name, age, sex, slogan);
        this.poor = poor;
        console.log(this);
    }
}

let long = new GoodBoy('Long', 20, 'male', 'Em an com chua', 'rot momg toi');
// console.log(long);

class BigcityBoy extends Person {
    rich;

    constructor(name, age, sex, slogan, rich){
        super(name, age, sex, slogan)
        this.rich = rich;
        console.log(this);
    }
}
let liem = new BigcityBoy('Liem', 20, 'male', 'Em tam xong chua', 'anh nhieu tien');
// console.log(liem);

//===========================================

class Person {
    name;
    age;
    address;

    constructor(name, age, address){
        this.name = name;
        this.age = age;
        this.address = address;
    }

}

class Boy extends Person {
    sex = male;
    strength;

    constructor(name, age, address, strength) {
        super(name, age, address);
        this.sex = sex;
        this.strength = strength;
        // console.log(this);
    }
}

class GoodBoy extends Boy {
    poor;

    constructor(name, age, address, sex, strength, poor){
        super(name, age, address, sex, strength);
        this.poor = poor;
        // console.log(this);
    }

}
let hoangAnh = new GoodBoy('hoang anh', 20, 'bac giang', 'male', 'tan gai', 'rot mong toi');
console.log(hoangAnh);

class BadBoy extends Boy {
    rich;

    constructor(name, age, address, sex, strength, rich){
        super(name, age, address, sex, strength);
        this.rich = rich;
        // console.log(this);
    }
}