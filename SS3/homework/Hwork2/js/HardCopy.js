import Document from "./Document.js";

class  HardCopy extends Document {
    source;

    constructor(id, name, author, price, publishDate, source){
        super(id, name, authour, price, publishDate);
        this.source = source;
    }

    get info() {
        return `
        Tai lieu co id la ${this.id}.
        Ten la ${this.name}.
        Tac gia la ${this.author}.
        Gia la ${this.price}.
        Ngay xuat ban la ${this.publishDate}.
        Ten sach duoc sao chep la ${this.source}.
        `
    }

}

export default HardCopy;