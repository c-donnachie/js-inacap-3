// import { loadNavbar } from '../components/navbar/navbar';

// document.addEventListener('DOMContentLoaded', () => {
//   loadNavbar('navbar-container');
// });

// Obtener el modal
const modal = document.getElementById("myModal");

// Función para abrir el modal
function handleOpenModal() {
  modal.style.display = "block";
}

// Función para cerrar el modal
function handleCloseModal() {
  modal.style.display = "none";
}

// Cuando el usuario haga clic fuera del modal, lo cierra
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Añadir evento al botón de cierre cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', (event) => {
  const span = document.getElementsByClassName("close")[0];
  span.onclick = handleCloseModal;
});
