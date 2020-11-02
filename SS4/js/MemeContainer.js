const $template = document.getElementById('meme-container-template');

// tạo ra shadow-dom
class Memecontainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'}); 
        this.shadowRoot.appendChild($template.content.cloneNode(true));
    }

    //được gọi khi component được sinh ra
    connectedCallback() {
            console.log("Thế á");
    }

    //được gọi khi thuộc tính của component thay đổi
    attributeChangedCallback(name, oldvalue, newvalue) {

    }

    // được gọi khi component bị mất đi
    disconnectedCallback() {
        console.log("Vừa mới có 1 meme bị xóa đi do quá nhàm chán");
    }
}

// tạo custom-element
window.customElements.define('meme-container', Memecontainer);

