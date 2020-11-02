export default class Person {
    name;
    age;
    phoneNumber;
    workplace;

    constructor(name, age, phoneNumber, workplace) {
        this.name = name;
        this. age = age;
        this.phoneNumber = phoneNumber;
        this.workplace = workplace;
    }

    get info() {
        return `
        name: ${this.name}
        age: ${this.ager}
        phoneNumber: ${this.phoneNumber}
        workplace: ${this.workplace}
        `
    }

    set info(data) {
        this.name = data.name;
        this.age = data.age;
        this.phoneNumber = data.phoneNumber;
        this.workplace= data.workplace;
    }
}