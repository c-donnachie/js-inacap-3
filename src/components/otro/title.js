// my-title.js

class MyTitle extends HTMLElement {
    constructor() {
        super();

        // Creamos un shadow root
        this.attachShadow({ mode: 'open' });

        // Definimos el contenido inicial del componente
        this.shadowRoot.innerHTML = `
            <nav>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </nav>
        `;
    }

    // Método para actualizar el contenido del título
    updateTitle(newText) {
        this.shadowRoot.innerHTML = `
            <nav>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </nav>
        `;
    }

    // Observamos los cambios en el atributo 'text'
    static get observedAttributes() {
        return ['text'];
    }

    // Método que se llama cuando se actualiza un atributo observado
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'text') {
            this.updateTitle(newValue);
        }
    }
}

customElements.define('my-title', MyTitle);
