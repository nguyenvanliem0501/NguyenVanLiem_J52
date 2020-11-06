const $template = document.getElementById('meme-container-template');

// tạo ra shadow-dom
class Memecontainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'}); 
        this.shadowRoot.appendChild($template.content.cloneNode(true));
    }

    // xét những thuộc tính có ảnh hưởng đến nội dung
    static get observedAttributes() {
        return ['name', 'date-modifiled', 'image', 'description'];
    }
    
    //được gọi khi component được sinh ra
    connectedCallback() {
            console.log("Thế á");
    }

    //được gọi khi thuộc tính của component thay đổi
    attributeChangedCallback(attName, oldvalue, newvalue) {
        console.log(attName, newvalue);
        if(attName == 'name'){
            this.shadowRoot.querySelector('.meme-name').innerHTML = newvalue;
        } else if(attName == 'date-modifiled'){
            this.shadowRoot.querySelector('.meme-date-modifiled').innerHTML = newvalue;
        } else if(attName == 'image'){
            this.shadowRoot.querySelector('.photo').src = newvalue;
        } else if(attName == 'description'){
            this.shadowRoot.querySelector('.meme-description').innerHTML = newvalue;
        }
    }

    // được gọi khi component bị mất đi
    disconnectedCallback() {
        console.log("Vừa mới có 1 meme bị xóa đi do quá nhàm chán");
    }
}

// tạo custom-element
window.customElements.define('meme-container', Memecontainer);

