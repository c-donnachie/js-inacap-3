class GoBack extends HTMLElement {
    constructor() {
        super();

        // Creamos un shadow root
        this.attachShadow({ mode: 'open' });

        // Definimos el contenido inicial del componente con estilos
        this.shadowRoot.innerHTML = `
            <style>
                div {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 4px;
                    text-decoration: none;
                    padding: 10px 15px;
                    background-color: #7C7C7C;
                    color: white;
                    border-radius: 5px;
                    font-size: 16px;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                }
                a {
                    text-decoration: none;
                    color: white;
                    font-size: 16px;
                }
                div:hover {
                    background-color: #646464;
                }
            </style>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path d="M213.7 256L380.9 81.9c4.2-4.3 4.1-11.4-.2-15.8l-29.9-30.6c-4.3-4.4-11.3-4.5-15.5-.2L131.1 247.9c-2.2 2.2-3.2 5.2-3 8.1-.1 3 .9 5.9 3 8.1l204.2 212.7c4.2 4.3 11.2 4.2 15.5-.2l29.9-30.6c4.3-4.4 4.4-11.5.2-15.8L213.7 256z" fill="currentColor"/></svg> 
                <a href="#">   
                Atras</a>
            </div>
        `;

        // Agregamos el evento de clic al enlace
        this.shadowRoot.querySelector('div').addEventListener('click', this.goBack);
    }

    // Método para actualizar el contenido del enlace
    updateTitle(newText) {
        this.shadowRoot.querySelector('div').textContent = newText;
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

    // Método para manejar el evento de volver atrás
    goBack(event) {
        event.preventDefault();
        window.history.back();
    }
}

customElements.define('go-back', GoBack);
