class DocumentCase {
    id;
    name; 
    documents = [];
    owner;
    dateModified;

    constructor(id, name, documents, owner, dateModified){
        this.id = id;
        this.name = name;
        this.documents = documents;
        this.owner = owner;
        this.dateModified = dateModified;
    }

    addDocument(document) {
        this.documents.push(document);
    }

    findDocuments(name) {

    }
    
    deleteDocument(id) {

    }

    showDocuments() {
        this.documents.forEach(function(document, index){
            console.log(`Tai lieu co id la ${document.id} name la ${document.name} author la ${document.author} price la ${document.price}`);
        });
    }

    updateDocument(id, data) {

    }
}

export default DocumentCase;