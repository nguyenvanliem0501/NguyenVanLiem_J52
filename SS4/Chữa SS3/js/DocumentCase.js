import Document from "./Document.js";

export default class DocumentCase {
    id;
    name; 
    documents;
    owner;
    dateModified;

    constructor(name, owner){
        this.name = name;
        this.owner = owner;
        this.documents = [];
        this.dateModified = new Date().toISOString();
    }

    addDocument(document) {
        if(document instanceof  Document) {
            this.documents.push(document);
        } else {
            console.log("Truyen linh tinh");
        }
        
    }

    findDocuments(name) {
        //cach 1:
        // let result = [];
        // for(let document of this.documents) {
        //     if(document.name == name) {
        //         result.push(document);
        //     }
        // }

        // return result;

        // cach 2:
        // filter là lọc
        let result = this.documents.filter(function(document){
            return document.name == name;
        });
        return result;
    }

    showDocuments() {
         this.documents.forEach(function(document){
             console.log(document.info);
         })
    }

    deleteDocument(id) {
        //cach 1:
        // let foundIndex = -1;
        // for(let i=0; i<this.documents.length; i++){
        //     if(this.documents[i].id == id){
        //         foundIndex = i;
        //     }
        // }

        //cach 2:
        let foudIndex = this.documents.findIndex(function(document){
            return document.id == id;

            // nếu mà ko tìm thấy thì r=trả về -1
        })
        if(foundIndex >= 0){
            this.documents.splice(foundIndex, 1);
        }
    }

    updateDocument(id, data) {
        let found = this.documents.find(function(document){
            return document.id == id;

            // nếu mà không tìm đc trả về null
        });

        if(found != null){
            found.info = data;  
        }
    }




}