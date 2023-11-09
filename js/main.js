const productos = [
    
        {
            "id": "camiseta-01",
            "titulo": "Manchester City Actual",
            "imagen": "./img/temporadaActual/city-actual.webp",
            "categoria": {
                "nombre": "Temporada 2023/24",
                "id": "Camiseta Actual"
            },
            "precio": 10000
        },
        {
            "id": "camiseta-02",
            "titulo": "Liverpool Actual",
            "imagen": "./img/temporadaActual/liverpool-actual.webp",
            "categoria": {
                "nombre": "Temporada 2023/24",
                "id": "Camiseta Actual"
            },
            "precio": 10000
        },
        {
            "id": "camiseta-03",
            "titulo": "Real Madrid Actual",
            "imagen": "./img/temporadaActual/madrid-actual.webp",
            "categoria": {
                "nombre": "Temporada 2023/24",
                "id": "Camiseta Actual"
            },
            "precio": 10000
        },
        {
            "id": "camiseta-04",
            "titulo": "River Plate Actual",
            "imagen": "./img/temporadaActual/river-actual.webp",
            "categoria": {
                "nombre": "Temporada 2023/24",
                "id": "Camiseta Actual"
            },
            "precio": 10000
        },
        {
            "id": "camiseta-05",
            "titulo": "Manchester United Actual",
            "imagen": "./img/temporadaActual/united-actual.jpg",
            "categoria": {
                "nombre": "Temporada 2023/24",
                "id": "Camiseta Actual"
            },
            "precio": 10000
        },
        {
            "id": "seleccion-01",
            "titulo": "Argentina Actual",
            "imagen": "./img/SeleccionesNacionales/Argentina-actual.webp",
            "categoria": {
                "nombre": "Selecciones Nacionales",
                "id": "Selecciones Nacionales"
            },
            "precio": 10000
        },
        {
            "id": "seleccion-02",
            "titulo": "Italia Actual",
            "imagen": "./img/SeleccionesNacionales/Italia-actual.webp",
            "categoria": {
                "nombre": "Selecciones Nacionales",
                "id": "Selecciones Nacionales"
            },
            "precio": 10000
        },
        {
            "id": "seleccion-03",
            "titulo": "Marruecos Actual",
            "imagen": "./img/SeleccionesNacionales/Marruecos-actual.webp",
            "categoria": {
                "nombre": "Selecciones Nacionales",
                "id": "Selecciones Nacionales"
            },
            "precio": 10000
        },
        {
            "id": "seleccion-04",
            "titulo": "Polonia Actual",
            "imagen": "./img/SeleccionesNacionales/Polonia-actual.webp",
            "categoria": {
                "nombre": "Selecciones Nacionales",
                "id": "Selecciones Nacionales"
            },
            "precio": 10000
        },
        {
            "id": "seleccion-05",
            "titulo": "Brasil 3er Equipación",
            "imagen": "./img/SeleccionesNacionales/TerceraBrasil-acutal.webp",
            "categoria": {
                "nombre": "Selecciones Nacionales",
                "id": "Selecciones Nacionales"
            },
            "precio": 10000
        },
        {
            "id": "Retro-01",
            "titulo": "Argentina Retro",
            "imagen": "./img/camisetaRetro/Argentina-retro.webp",
            "categoria": {
                "nombre": "Camisetas Retro",
                "id": "Camisetas Retro"
            },
            "precio": 10000
        },
        {
            "id": "Retro-02",
            "titulo": "FC Barcelona Retro",
            "imagen": "./img/camisetaRetro/Barca-retro.jpg",
            "categoria": {
                "nombre": "Camisetas Retro",
                "id": "Camisetas Retro"
            },
            "precio": 10000
        },
        {
            "id": "Retro-03",
            "titulo": "Chelsea FC Retro",
            "imagen": "./img/camisetaRetro/Chelsea-retro.jpg",
            "categoria": {
                "nombre": "Camisetas Retro",
                "id": "Camisetas Retro"
            },
            "precio": 10000
        },
        {
            "id": "Retro-04",
            "titulo": "Paises Bajos Retro",
            "imagen": "./img/camisetaRetro/Holanda-retro.webp",
            "categoria": {
                "nombre": "Camisetas Retro",
                "id": "Camisetas Retro"
            },
            "precio": 10000
        },
        {
            "id": "Retro-05",
            "titulo": "AC Milan Retro",
            "imagen": "./img/camisetaRetro/Milan-retro.webp",
            "categoria": {
                "nombre": "Camisetas Retro",
                "id": "Camisetas Retro"
            },
            "precio": 10000
        }
    ];


const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numero = document.querySelector("#numero");


botonesCategorias.forEach(boton => boton.addEventListener("click", () => {
    aside.classList.remove("aside-visible");
}))


function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}


botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        // e.currentTarget.classList.add("active");
        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {


    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumero();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumero() {
    let nuevoNumero = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumero;
}