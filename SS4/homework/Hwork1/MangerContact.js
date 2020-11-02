import  Person from "./Person.js";

export default class ManagerContact {
    listContact;

    constructor(listContact) {
        this.listContact = [];
    }

    addPerson(person) {
        if(person instanceof Person){
            this.listContact.push(person);
        }else {
            console.log("NO no no .....");
        }
    }

    updatePerson(phoneNumber, data) {
        let found = this.listContact.find(function(person){
            return person.phoneNumber == phoneNumber
        });

        if(found != null){
            found.info = data;
        }

    }

    deletePerson(phoneNumber) {
        let foundindex = this.listContact.findIndex(function(person){
            return person.phoneNumber == phoneNumber;
        });

        if(foundindex >= 0){
            this.listContact.splice(foundindex, 1);
        }
    }

    showManagerContact() {
        this.listContact.forEach(function(person){
            console.log(`
            name: ${person.name}.
            age: ${person.age}.
            phoneNumber: ${person.phoneNumber}.
            workplace: ${person.workplace}.
            `);
        })
    }

    findPerson(phoneNumber) {
        let result = this.listContact.filter(function(person){
            return person.phoneNumber == phoneNumber;

        });
        return result;
    }

    searchPerson(phoneNumber) {
        for(let i=0; i<this.listContact.length;i++){
            if(this.listContact.phoneNumber == phoneNumber){
                console.log(`name: ${this.listContact[i].name}
                            age: ${this.listContact[i].age}
                            workplace: ${this.listContact[i].workplace}
                            `);
            }
        }
    }

}