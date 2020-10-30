import Document from "./Document.js";

class EBook extends Document {
    discount;

    constructor(id, name, authour, price, publishDate, discount){
        super(id, name, authour, price, publishDate);
        this.discount = discount;
    }

    get info() {
        return `
        Tai lieu co id la ${this.id}.
        Ten la ${this.name}.
        Tac gia la ${this.author}.
        Gia la ${this.price - this.discount}.
        Ngay xuat ban la ${this.publishDate}.
        `
    }
}

export default EBook;