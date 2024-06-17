class MyTitle extends HTMLElement {
    constructor() {
        super();

        // Creamos un shadow root
        this.attachShadow({ mode: 'open' });

        // Definimos los valores iniciales de los enlaces
        this.links = {
            home: this.getAttribute('home') || '#',
            resultado: this.getAttribute('resultado') || '#',
            contact: this.getAttribute('contact') || '#'
        };

        // Renderizamos el contenido inicial del componente
        this.render();
    }

    // Método para renderizar el contenido del componente
    render() {
        this.shadowRoot.innerHTML = `
            <style>
                .header {
                    text-align: center;
                    padding: 20px;
                    background-color: #333;
                    color: white;
                }
                nav {
                    background-color: #333;
                    overflow: hidden;
                }
                
                nav a {
                    color: white;
                    text-decoration: none;
                    padding: 10px;
                }

                nav a:hover {
                    background-color: #555;
                }
            </style>
            <header class="header">
                <nav>
                    <a href="${this.links.home}">Inicio</a>
                    <a href="${this.links.resultado}">Gestiones</a>
                    <a href="${this.links.contact}">Tipos de gestión</a>
                </nav>
            </header>
        `;
    }

    // Método para actualizar los enlaces
    updateLinks(home, resultado, contact) {
        this.links.home = home || '#';
        this.links.resultado = resultado || '#';
        this.links.contact = contact || '#';
        this.render();
    }

    // Observamos los cambios en los atributos específicos
    static get observedAttributes() {
        return ['home', 'resultado', 'contact'];
    }

    // Método que se llama cuando se actualiza un atributo observado
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'home' || name === 'resultado' || name === 'contact') {
            this.updateLinks(
                name === 'home' ? newValue : this.links.home,
                name === 'resultado' ? newValue : this.links.resultado,
                name === 'contact' ? newValue : this.links.contact
            );
        }
    }
}

customElements.define('my-navbar', MyTitle);
