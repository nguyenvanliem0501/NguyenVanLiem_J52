import Document from "./Document.js";
export default class EBook extends Document {
    discount;
    
    constructor(name, author, price, publishDate, discount){
        super(name, author, price, publishDate);
        this. discount = discount;
    }

    get info() {
        return `
        id: ${this.id}
        name: ${this.name}
        author: ${this.author}
        price: ${this.price * (100 - this.discount) / 100}
        publishDate: ${this.publishDate}
        `
    }
}