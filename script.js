function toggleDescripcion(id) {
    const descripcion = document.getElementById(id);
    if (descripcion.style.display === "none" || descripcion.style.display === "") {
        descripcion.style.display = "block";
    } else {
        descripcion.style.display = "none";
    }
}

function filtrarProductos(categoria) {
    // Obtiene todos los productos
    const productos = document.querySelectorAll('.producto-card');
    const botones = document.querySelectorAll('.filtro-boton');

    // Recorre y oculta todos los productos
    productos.forEach(producto => {
        producto.style.display = 'none';
    });

    // Muestra los productos de la categoría seleccionada
    if (categoria === 'todos') {
        productos.forEach(producto => {
            producto.style.display = 'block';
        });
    } else {
        const productosFiltrados = document.querySelectorAll(`.${categoria}`);
        productosFiltrados.forEach(producto => {
            producto.style.display = 'block';
        });
    }

    // Actualiza el estilo del botón activo
    botones.forEach(boton => {
        boton.classList.remove('activo');
    });
    document.querySelector(`.filtro-boton[onclick="filtrarProductos('${categoria}')"]`).classList.add('activo');
}

function toggleDescripcion(boton) {
    const descripcion = boton.nextElementSibling;
    if (descripcion.style.display === 'none' || !descripcion.style.display) {
        descripcion.style.display = 'block';
        boton.textContent = 'Ocultar Descripción';
    } else {
        descripcion.style.display = 'none';
        boton.textContent = 'Ver Descripción';
    }
}