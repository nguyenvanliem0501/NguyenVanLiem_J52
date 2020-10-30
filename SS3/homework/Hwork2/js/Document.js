class Document {
    id;
    name;
    author;
    price;
    publishDate;

    constructor(id, name, author,price, publishDate){
        this.id = id;
        this.name = name;
        this.author = author;
        this.price = price;
        this.publishDate = publishDate;
    }

    get info() {
        return `
        Tai lieu co id la ${this.id}.
        Ten la ${this.name}.
        Tac gia la ${this.author}.
        Gia la ${this.price}.
        Ngay xuat ban la ${this.publishDate}.
        `
    }

    set info() {

    }
}

export default Document;