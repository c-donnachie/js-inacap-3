class MyNavbar extends HTMLElement {
    constructor() {
        super();

        // Creamos un shadow root
        this.attachShadow({ mode: 'open' });

        // Definimos los valores iniciales de los enlaces
        this.links = {
            home: this.getAttribute('home') || '#',
            tipo_gestion: this.getAttribute('tipo_gestion') || '#',
            clientes: this.getAttribute('clientes') || '#',
            usuarios: this.getAttribute('usuarios') || '#',
            resultados: this.getAttribute('resultados') || '#',
            gestiones: this.getAttribute('gestiones') || '#'
        };

        // Renderizamos el contenido inicial del componente
        this.render();
    }

    // Método para renderizar el contenido del componente
    render() {
        this.shadowRoot.innerHTML = `
            <style>
                .header {
                    top: 0;
                    left: 0;
                    width: 100%;
                    /* position: fixed; */
                    justify-content: center;
                    padding: 20px;
                    background-color: #333;
                    color: white;
                    z-index: 10;
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
                    color: #f5f5f5;
                }
            </style>
            <header class="header">
                <nav>
                    <a href="${this.links.home}">Inicio</a>
                    <a href="${this.links.tipo_gestion}">Tipo de gestion</a>
                    <a href="${this.links.clientes}">Clientes</a>
                    <a href="${this.links.usuarios}">Usuarios</a>
                    <a href="${this.links.resultados}">Resultados</a>
                    <a href="${this.links.gestiones}">Gestiones</a>
                </nav>
            </header>
        `;
    }

    // Método para actualizar los enlaces
    updateLinks(home, tipo_gestion, clientes, usuarios, resultados, gestiones) {
        this.links.home = home || '#';
        this.links.tipo_gestion = tipo_gestion || '#';
        this.links.clientes = clientes || '#';
        this.links.usuarios = usuarios || '#';
        this.links.resultados = resultados || '#';
        this.links.gestiones = gestiones || '#';
        this.render();
    }

    // Observamos los cambios en los atributos específicos
    static get observedAttributes() {
        return ['home', 'tipo_gestion', 'clientes', 'usuarios', 'resultados', 'gestiones'];
    }

    // Método que se llama cuando se actualiza un atributo observado
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'home' || name === 'tipo_gestion' || name === 'clientes' || name === 'usuarios' || name === 'resultados' || name === 'gestiones') {
            this.updateLinks(
                name === 'home' ? newValue : this.links.home,
                name === 'tipo_gestion' ? newValue : this.links.tipo_gestion,
                name === 'clientes' ? newValue : this.links.clientes,
                name === 'usuarios' ? newValue : this.links.usuarios,
                name === 'resultados' ? newValue : this.links.resultados,
                name === 'gestiones' ? newValue : this.links.gestiones
            );
        }
    }
}

customElements.define('my-navbar', MyNavbar);
