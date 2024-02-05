document.addEventListener('DOMContentLoaded', function () {
    // Animación de desplazamiento suave para los enlaces internos
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    // Animación de aparición con desplazamiento
    const elementosAnimar = document.querySelectorAll('.animar');
    window.addEventListener('scroll', mostrarElementos);

    // Botón Ir arriba
    const botonIrArriba = document.querySelector('button');
    botonIrArriba.addEventListener('click', scrollToTop);

    function smoothScroll(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        window.scroll({
            top: targetElement.offsetTop - 50,
            behavior: 'smooth'
        });
    }

    function mostrarElementos() {
        elementosAnimar.forEach(elemento => {
            if (elemento.offsetTop < window.innerHeight + window.scrollY) {
                elemento.style.opacity = '1';
                elemento.style.transform = 'translateY(0)';
            }
        });

        // Mostrar u ocultar el botón Ir arriba
        if (window.scrollY > 200) {
            botonIrArriba.style.display = 'block';
        } else {
            botonIrArriba.style.display = 'none';
        }
    }

    // Función para mostrar el modal con la imagen y descripción
    function mostrarModal(nombre, imagen, descripcion) {
        const modal = document.getElementById('modal');
        const modalImagen = document.getElementById('modal-imagen');
        const modalDescripcion = document.getElementById('modal-descripcion');

        modalImagen.src = imagen;
        modalDescripcion.textContent = descripcion;

        modal.style.display = 'block';
    }

    // Función para cerrar el modal
    function cerrarModal() {
        const modal = document.getElementById('modal');
        modal.style.display = 'none';
    }

    function scrollToTop() {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Mostrar u ocultar el footer al llegar al final de la página
    window.addEventListener('scroll', toggleFooterVisibility);

    function toggleFooterVisibility() {
        const footer = document.querySelector('footer');
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = window.innerHeight;
        const scrollTop = window.scrollY;

        if (scrollHeight - clientHeight - scrollTop < 10) {
            footer.style.display = 'block';
        } else {
            footer.style.display = 'none';
        }
    }
});