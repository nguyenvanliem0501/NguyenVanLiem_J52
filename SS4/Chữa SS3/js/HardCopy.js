import Documnet from "./Document.js";

export default class HardCopy extends Document {
    source;

    constructor(name, author, price, publishDate, source){
        super(name, author, price, publishDate);
        this.source = source;
    }

    get info() {
        return `
        id: ${this.id}
        name: ${this.name}
        author: ${this.author}
        price: ${this.price}
        publishDate: ${this.publishDate}
        source: ${this.source}
        `
    }
}