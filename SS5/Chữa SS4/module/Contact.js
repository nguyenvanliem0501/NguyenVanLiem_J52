export default class Contact {
    name;
    numberPhone;
    address; 
    email;

    constructor(name, numberPhone, address, email) {
        this.name = name;
        this.numberPhone = numberPhone;
        this.address = address;
        this.email = email;
    }

    showInfo() {
        console.log(`
        name: ${this.name}
        numberPhone: ${this.numberPhone}
        address: ${this.address}
        email: ${this.email}
        `);
    }

    set sName(name){
        if(name.trim() === ""){
            return;
        }
        this.name = name;
    }
    set sNumberPhone(numberPhone) {
        if(numberPhone.trim() === "" || numberPhone.length != 10 || isNaN(Number(numberPhone))){
            return new Error;
        }
        this.numberPhone = numberPhone;
    }
    set sAddress(address) {
        if(address.trim() === "" ){
            return;
        }
        this.address = address;
    }
    set sEmail(email) {
        if(email.trim() === ""){
            return;
        }
        this.email = email;
    }
}