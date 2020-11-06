import Contact from "./Contact.js";

export default class Contacts {
    lists = [];

    constructor(lists = []) {
        this.lists = lists;
    }

    addContact(name, numberPhone, address = "", email = "") {
        if(name.trim() === "" || numberPhone.length != 10 || Number(numberPhone == NaN)){
            return new Error;
        }
        let contact = new Contact(name, numberPhone, address, email);
        this.lists.push(contact);
    }

    editContact(numberPhone, contact = {}) {
        let index = this.lists.findIndex(function(contact){
            return contact.numberPhone == numberPhone;
        });
        
        /*
        contact = {} =>
        contact = {
            name: "Liem",
            numberPhone: "0359051598",
        }
        */
        if(index != -1){
            // this.lists[index].name = "name" in contact ? contact.name : ""  kiểm tra 
            if("name" in contact){
                this.lists[index].sName = contact.name;
            } 
            if("numberPhone" in contact){
                this.lists[index].sNumberPhone = contact.numberPhone;
            }
            if("address" in contact){
                this.lists[index].sAddress = contact.address;
            }
            if("email" in contact){
                this.lists[index].sEmail = contact.email;
            }
        }
    }

    deleteContact(numberPhone) {
        let contactsFilter = this.lists = this.lists.filter(function(contact){
            return contact.numberPhone != numberPhone;
        });
        this.lists = contactsFilter;

    }

    showContact() {
        console.log(this.lists);
    }

    searchContact(keywork) {
        let contactsFilter = this.lists.filter(function(contact){
            return contact.name.indexOf(keywork) != -1 || contact.numberPhone.indexOf(keywork) != -1;
        });
        console.log(contactsFilter);
    }
}