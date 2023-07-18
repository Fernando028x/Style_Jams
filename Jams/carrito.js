
/* ********************************** */
/*               CARRITO MENU          */
/* ********************************** */



// Obtén todos los elementos con la clase "add-cart"
const addCartButtons = document.getElementsByClassName('add-cart');

// Agrega un controlador de eventos a cada botón "Agregar al carrito"
for (let i = 0; i < addCartButtons.length; i++) {
  addCartButtons[i].addEventListener('click', addToCart);
}

// Función addToCart para agregar el producto al carrito
function addToCart(event) {
  const button = event.target;
  const productId = button.getAttribute('data-id');
  const productName = button.getAttribute('data-nombre');
  const productPrice = button.getAttribute('data-precio');
  const productImage = button.getAttribute('data-img');

  const product = {
    id: productId,
    nombre: productName,
    precio: productPrice,
    img: productImage,
    cantidad: 1
  };

  let cartItems = JSON.parse(localStorage.getItem('carrito')) || [];
  cartItems.push(product);

  localStorage.setItem('carrito', JSON.stringify(cartItems));
}


// Obtén referencia al botón de "Agregar al carrito"
const addToCartButtons = document.querySelectorAll('.add-cart');

// Agrega manejador de eventos a los botones de "Agregar al carrito"
addToCartButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});

// Función para agregar producto al carrito
function addToCart(event) {
  // Obtén los valores de los atributos data del producto seleccionado
  const productId = event.target.getAttribute('data-id');
  const productName = event.target.getAttribute('data-nombre');
  const productPrice = event.target.getAttribute('data-precio');
  const productImage = event.target.getAttribute('data-img');

  // Crea un objeto que representa el producto
  const product = {
    id: productId,
    nombre: productName,
    precio: productPrice,
    img: productImage,
    cantidad: 1
  };

  // Verifica si ya existe un carrito en localStorage
  let cartItems = JSON.parse(localStorage.getItem('carrito')) || [];

  // Agrega el producto al carrito
  cartItems.push(product);

  // Guarda el carrito en localStorage
  localStorage.setItem('carrito', JSON.stringify(cartItems));
}

// Variables globales
var carrito = [];
var contadorCarrito = document.getElementById("contadorCarrito");
var ventanaEmergente = document.getElementById("ventanaEmergente");
var listaCarrito = document.getElementById("lista-carrito");
var totalPagar = document.getElementById("total-pagar");

// Función para actualizar el contador del carrito
function actualizarContadorCarrito() {
  contadorCarrito.textContent = carrito.length;
}

// Función para actualizar el contador del carrito
function actualizarContadorCarrito() {
  contadorCarrito.textContent = carrito.length;
}

// Obtén referencia al botón de "Procesar compra"
var btnProcesarCompra = document.getElementById("btn-pagar");

// Agrega un controlador de eventos al botón de "Procesar compra"
btnProcesarCompra.addEventListener('click', function() {
  // Obtén la lista de productos en el carrito
  var productosCarrito = obtenerProductosCarrito();

  if (productosCarrito.length === 0) {
    alert("Carrito vacío");
  } else {
    // Genera el mensaje con los productos seleccionados
    var mensaje = "Hola, estoy interesado en los siguientes productos:\n\n";
    productosCarrito.forEach(function(producto) {
      mensaje += "Nombre: " + producto.nombre + "\n";
      mensaje += "Precio: " + producto.precio + "\n";
      mensaje += "Cantidad: " + producto.cantidad + "\n\n";
    });

    // Reemplaza el número de teléfono por el que desees enviar el mensaje a través de WhatsApp
    var numeroTelefono = "998343538";

    // Genera la URL de WhatsApp con el mensaje
    var urlWhatsApp = "https://wa.me/998343538?text=" + encodeURIComponent(mensaje);

    // Abre la URL en una nueva pestaña o ventana
    window.open(urlWhatsApp, "_blank");
  }
});

// Función para obtener la lista de productos en el carrito
function obtenerProductosCarrito() {
  var productosCarrito = [];

  // Obtén los productos del carrito del localStorage
  var carrito = JSON.parse(localStorage.getItem('carrito')) || [];

  // Agrega cada producto al arreglo de productos en el carrito
  carrito.forEach(function(producto) {
    productosCarrito.push({
      nombre: producto.nombre,
      precio: producto.precio,
      cantidad: producto.cantidad
    });
  });

  return productosCarrito;
}


// Función para mostrar u ocultar la ventana emergente del carrito
function mostrarVentanaEmergente() {
  ventanaEmergente.classList.toggle("show");
}

// Función para actualizar el total a pagar
function actualizarTotalPagar() {
  var total = 0;
  carrito.forEach(function (producto) {
    total += producto.precio * producto.cantidad;
  });
  totalPagar.textContent = "$" + total.toFixed(2);
}

// Función para agregar un producto al carrito
function agregarAlCarrito(id, nombre, precio, imagen) {
  // Comprobar si el producto ya está en el carrito
  var productoExistente = carrito.find(function (producto) {
    return producto.id === id;
  });

  if (productoExistente) {
    // El producto ya está en el carrito, incrementar la cantidad
    productoExistente.cantidad++;
  } else {
    // El producto no está en el carrito, agregarlo
    carrito.push({
      id: id,
      nombre: nombre,
      precio: precio,
      cantidad: 1,
      imagen: imagen
    });
    actualizarContadorCarrito()
  }
  // Agrega esta línea al final de la función `addToCart()` y `eliminarDelCarrito()`
setInterval(actualizarContadorCarrito, 500); // Actualiza el contador medio segundo




  // Actualizar la lista del carrito
  actualizarListaCarrito();

  // Actualizar el total a pagar
  actualizarTotalPagar();

  // Mostrar mensaje de producto agregado
  mostrarMensajeAgregado();
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(id) {
  // Filtrar el producto a eliminar del carrito
  carrito = carrito.filter(function (producto) {
    return producto.id !== id;
  });

  // Actualizar el contador del carrito
  actualizarContadorCarrito();

  // Actualizar la lista del carrito
  actualizarListaCarrito();

  // Actualizar el total a pagar
  actualizarTotalPagar();
}

// Función para actualizar la lista del carrito
function actualizarListaCarrito() {
  listaCarrito.innerHTML = "";

  carrito.forEach(function (producto) {
    var itemCarrito = document.createElement("li");
    var imagenProducto = document.createElement("img");
    var nombreProducto = document.createElement("span");
    var precioProducto = document.createElement("span");
    var botonIncrementar = document.createElement("button");
    var cantidadProducto = document.createElement("input");
    var botonDisminuir = document.createElement("button");
    var botonEliminar = document.createElement("button");

    imagenProducto.src = producto.imagen;
    imagenProducto.classList.add("imagen-carrito"); // Agregar clase para estilos de imagen
    nombreProducto.textContent = producto.nombre;
    precioProducto.textContent = "$" + producto.precio.toFixed(2);
    cantidadProducto.type = "number";
    cantidadProducto.value = producto.cantidad;

    botonIncrementar.classList.add("incrementar-cantidad");
    botonIncrementar.dataset.id = producto.id;
    botonIncrementar.textContent = "+";

    botonDisminuir.classList.add("disminuir-cantidad");
    botonDisminuir.dataset.id = producto.id;
    botonDisminuir.textContent = "-";

    botonEliminar.classList.add("eliminar-producto");
    botonEliminar.dataset.id = producto.id;
    botonEliminar.textContent = "Eliminar";

    botonIncrementar.addEventListener("click", function (event) {
      var id = event.target.dataset.id;
      incrementarCantidad(id);
    });

    botonDisminuir.addEventListener("click", function (event) {
      var id = event.target.dataset.id;
      disminuirCantidad(id);
    });

    botonEliminar.addEventListener("click", function (event) {
      var id = event.target.dataset.id;
      eliminarDelCarrito(id);
    });

    itemCarrito.appendChild(imagenProducto);
    itemCarrito.appendChild(nombreProducto);
    itemCarrito.appendChild(precioProducto);
    itemCarrito.appendChild(botonIncrementar);
    itemCarrito.appendChild(cantidadProducto);
    itemCarrito.appendChild(botonDisminuir);
    itemCarrito.appendChild(botonEliminar);

    listaCarrito.appendChild(itemCarrito);
    
  });
  actualizarContadorCarrito();
}
// Agrega esta línea al final de la función `addToCart()` y `eliminarDelCarrito()`
setInterval(actualizarContadorCarrito, 500); // Actualiza el contador cada segundo


// Función para incrementar la cantidad de un producto en el carrito
function incrementarCantidad(id) {
  var producto = carrito.find(function (producto) {
    return producto.id === id;
  });

  if (producto) {
    producto.cantidad++;
    actualizarListaCarrito();
    actualizarTotalPagar();
  }
}

// Función para disminuir la cantidad de un producto en el carrito
function disminuirCantidad(id) {
  var producto = carrito.find(function (producto) {
    return producto.id === id;
  });

  if (producto && producto.cantidad > 1) {
    producto.cantidad--;
    actualizarListaCarrito();
    actualizarTotalPagar();
  }
}


// Función para mostrar el mensaje de producto agregado al carrito
function mostrarMensajeAgregado() {
  ventanaEmergente.classList.add("show");

  setTimeout(function () {
    ventanaEmergente.classList.remove("show");
  }, 2000);
}

function agregarProductoAlCarrito(producto) {
  // Obtener el carrito de compras del local storage
  var carrito = obtenerCarritoDelLocalStorage();

  // Verificar si el producto ya existe en el carrito
  var productoExistente = carrito.find(function (item) {
    return item.id === producto.id;
  });

  if (productoExistente) {
    // Si el producto ya está en el carrito, aumentar la cantidad
    productoExistente.cantidad++;
  } else {
    // Si el producto no está en el carrito, agregarlo
    producto.cantidad = 1;
    carrito.push(producto);
  }

  // Guardar el carrito actualizado en el local storage
  guardarCarritoEnLocalStorage(carrito);

  // Actualizar la lista del carrito en la ventana emergente
  actualizarListaCarrito(carrito);
  
}
function obtenerCarritoDelLocalStorage() {
  var carrito = localStorage.getItem("carrito");

  if (carrito) {
    return JSON.parse(carrito);
  }

  return [];

  
}
function actualizarListaCarrito() {
  // Obtener el carrito de compras del local storage
  var carrito = obtenerCarritoDelLocalStorage();

  // Obtener elementos del DOM
  var listaCarrito = document.getElementById("lista-carrito");
  var totalPagar = document.getElementById("total-pagar");

  // Limpiar la lista del carrito
  listaCarrito.innerHTML = "";

  // Calcular el total a pagar
  var total = 0;

  // Recorrer los productos del carrito
  carrito.forEach(function (producto) {
    // Crear elementos de la lista del carrito
    var li = document.createElement("li");
    li.textContent = producto.nombre + " x " + producto.cantidad;
    listaCarrito.appendChild(li);

    // Calcular el subtotal del producto
    var subtotal = producto.precio * producto.cantidad;
    total += subtotal;
  });

  // Mostrar el total a pagar
  totalPagar.textContent = "$" + total.toFixed(2);
}
function eliminarProductoDelCarrito(id) {
  // Obtener el carrito de compras del local storage
  var carrito = obtenerCarritoDelLocalStorage();

  // Filtrar los productos, eliminando el producto con el ID dado
  carrito = carrito.filter(function (producto) {
    return producto.id !== id;
  });

  // Guardar el carrito actualizado en el local storage
  guardarCarritoEnLocalStorage(carrito);

  // Actualizar la lista del carrito en la ventana emergente
  actualizarListaCarrito(carrito);
}
function disminuirCantidadProducto(id) {
  // Obtener el carrito de compras del local storage
  var carrito = obtenerCarritoDelLocalStorage();

  // Encontrar el producto en el carrito
  var producto = carrito.find(function (item) {
    return item.id === id;
  });

  if (producto) {
    // Disminuir la cantidad del producto
    if (producto.cantidad > 1) {
      producto.cantidad--;
    } else {
      // Si la cantidad es 1, eliminar el producto del carrito
      carrito = carrito.filter(function (item) {
        return item.id !== id;
      });
    }

    // Guardar el carrito actualizado en el local storage
    guardarCarritoEnLocalStorage(carrito);

    // Actualizar la lista del carrito en la ventana emergente
    actualizarListaCarrito(carrito);
  }
}
function aumentarCantidadProducto(id) {
  // Obtener el carrito de compras del local storage
  var carrito = obtenerCarritoDelLocalStorage();

  // Encontrar el producto en el carrito
  var producto = carrito.find(function (item) {
    return item.id === id;
  });

  if (producto) {
    // Aumentar la cantidad del producto
    producto.cantidad++;

    // Guardar el carrito actualizado en el local storage
    guardarCarritoEnLocalStorage(carrito);

    // Actualizar la lista del carrito en la ventana emergente
    actualizarListaCarrito(carrito);
  }
}



/* ********************************** */
/*  ventana emergente carrito         */
/* ********************************** */
// Obtener elementos del DOM
var botonCarrito = document.getElementById('boton-carrito');
var ventanaEmergente = document.getElementById('ventanaEmergente');
var btnCerrar = document.querySelector('.btn-cerrar');

// Evento de clic en el botón del carrito
botonCarrito.addEventListener('click', mostrarVentanaEmergente);

// Evento de clic en el botón de cerrar
btnCerrar.addEventListener('click', ocultarVentanaEmergente);

// Función para mostrar la ventana emergente
function mostrarVentanaEmergente() {
  ventanaEmergente.style.display = 'block';
}

// Función para ocultar la ventana emergente
function ocultarVentanaEmergente() {
  ventanaEmergente.style.display = 'none';
}



/* ********************************** */
/*  mostrar productos ventana emergente carrito         */
/* ********************************** */


// Obtener elementos del DOM
var listaCarrito = document.getElementById('lista-carrito');

// Obtener productos del localStorage
var productosLocalStorage = localStorage.getItem('carrito');
var productosSeleccionados = JSON.parse(productosLocalStorage) || [];

// Mostrar los productos en la ventana emergente
mostrarProductosEnCarrito();

// Función para mostrar los productos en el carrito
function mostrarProductosEnCarrito() {
  // Limpiar la lista de productos en el carrito
  listaCarrito.innerHTML = '';

  // Recorrer los productos seleccionados
  productosSeleccionados.forEach(function (producto, index) {
    // Crear elementos para mostrar la información del producto
    var li = document.createElement('li');
    var spanNombre = document.createElement('span');
    var spanPrecio = document.createElement('span');
    var btnEliminar = document.createElement('button');
    var btnDisminuir = document.createElement('button');
    var spanCantidad = document.createElement('span');
    var btnAumentar = document.createElement('button');

    // Asignar la información del producto a los elementos
    spanNombre.textContent = producto.nombre;
    spanPrecio.textContent = '$' + producto.precio;
    btnEliminar.textContent = 'Eliminar';
    btnDisminuir.textContent = '-';
    spanCantidad.textContent = producto.cantidad;
    btnAumentar.textContent = '+';
    

    // Agregar eventos a los botones de eliminar, disminuir y aumentar
    btnEliminar.addEventListener('click', function () {
      eliminarProducto(index);
    });

    btnDisminuir.addEventListener('click', function () {
      disminuirCantidad(index);
    });

    btnAumentar.addEventListener('click', function () {
      aumentarCantidad(index);
    });

    // Agregar los elementos al carrito
    li.appendChild(spanNombre);
    li.appendChild(spanPrecio);
    li.appendChild(btnEliminar);
    li.appendChild(btnDisminuir);
    li.appendChild(spanCantidad);
    li.appendChild(btnAumentar);
    listaCarrito.appendChild(li);
  });
}

// Función para eliminar un producto del carrito
function eliminarProducto(index) {
  productosSeleccionados.splice(index, 1);
  localStorage.setItem('carrito', JSON.stringify(productosSeleccionados));
  mostrarProductosEnCarrito();
}

// Función para disminuir la cantidad de un producto en el carrito
function disminuirCantidad(index) {
  if (productosSeleccionados[index].cantidad > 1) {
    productosSeleccionados[index].cantidad--;
    localStorage.setItem('carrito', JSON.stringify(productosSeleccionados));
    mostrarProductosEnCarrito();
  }
}

// Función para aumentar la cantidad de un producto en el carrito
function aumentarCantidad(index) {
  productosSeleccionados[index].cantidad++;
  localStorage.setItem('carrito', JSON.stringify(productosSeleccionados));
  mostrarProductosEnCarrito();
}






/* ********************************** */
/*  mostrar productos con imagen etc                 */
/* ********************************** */

// Obtener elementos del DOM
var listaCarrito = document.getElementById('lista-carrito');

// Obtener productos del localStorage
var productosLocalStorage = localStorage.getItem('carrito');
var productosSeleccionados = JSON.parse(productosLocalStorage) || [];

// Mostrar los productos en la ventana emergente
mostrarProductosEnCarrito();

// Función para mostrar los productos en el carrito
function mostrarProductosEnCarrito() {
  // Limpiar la lista de productos en el carrito
  listaCarrito.innerHTML = '';

  // Recorrer los productos seleccionados
  productosSeleccionados.forEach(function (producto, index) {
    // Crear elementos para mostrar la información del producto
    var li = document.createElement('li');
    var spanNombre = document.createElement('span');
    var imgProducto = document.createElement('img');
    var spanPrecio = document.createElement('span');
    var btnEliminar = document.createElement('button');
    var btnDisminuir = document.createElement('button');
    var spanCantidad = document.createElement('span');
    var btnAumentar = document.createElement('button');

    // Asignar la información del producto a los elementos
    spanNombre.textContent = producto.nombre;
    imgProducto.src = producto.img;
    spanPrecio.textContent = '$' + producto.precio;
    btnEliminar.textContent = 'Eliminar';
    btnDisminuir.textContent = '-';
    spanCantidad.textContent = producto.cantidad;
    btnAumentar.textContent = '+';

    // Agregar eventos a los botones de eliminar, disminuir y aumentar
    btnEliminar.addEventListener('click', function () {
      eliminarProducto(index);
    });

    btnDisminuir.addEventListener('click', function () {
      disminuirCantidad(index);
    });

    btnAumentar.addEventListener('click', function () {
      aumentarCantidad(index);
    });

    // Agregar los elementos al carrito
    li.appendChild(spanNombre);
    li.appendChild(imgProducto);
    li.appendChild(spanPrecio);
    li.appendChild(btnEliminar);
    li.appendChild(btnDisminuir);
    li.appendChild(spanCantidad);
    li.appendChild(btnAumentar);
    listaCarrito.appendChild(li);
  });
}


// Resto del código para eliminarProducto, disminuirCantidad y aumentarCantidad
// (se mantiene igual que el código anterior)


/* ********************************** */
/*  total a pagar                     */
/* ********************************** */

// Obtener elementos del DOM
var listaCarrito = document.getElementById('lista-carrito');
var totalPagar = document.getElementById('total-pagar');

// Obtener productos del localStorage
var productosLocalStorage = localStorage.getItem('carrito');
var productosSeleccionados = JSON.parse(productosLocalStorage) || [];

// Mostrar los productos en la ventana emergente
mostrarProductosEnCarrito();

// Función para mostrar los productos en el carrito
function mostrarProductosEnCarrito() {
  // Limpiar la lista de productos en el carrito
  listaCarrito.innerHTML = '';

  // Variable para almacenar el total a pagar
  var total = 0;

  // Recorrer los productos seleccionados
  productosSeleccionados.forEach(function (producto, index) {
    // Crear elementos para mostrar la información del producto
    var li = document.createElement('li');
    var spanNombre = document.createElement('span');
    var imgProducto = document.createElement('img');
    var spanPrecio = document.createElement('span');
    var btnEliminar = document.createElement('button');
    var btnDisminuir = document.createElement('button');
    var spanCantidad = document.createElement('span');
    var btnAumentar = document.createElement('button');

    // Asignar la información del producto a los elementos
    spanNombre.textContent = producto.nombre;
    imgProducto.src = producto.img;
    spanPrecio.textContent = '$' + producto.precio;
    btnEliminar.textContent = 'Eliminar';
    btnDisminuir.textContent = '-';
    spanCantidad.textContent = producto.cantidad;
    btnAumentar.textContent = '+';

    // Agregar eventos a los botones de eliminar, disminuir y aumentar
    btnEliminar.addEventListener('click', function () {
      eliminarProducto(index);
    });

    btnDisminuir.addEventListener('click', function () {
      disminuirCantidad(index);
    });

    btnAumentar.addEventListener('click', function () {
      aumentarCantidad(index);
    });

    // Calcular el subtotal del producto y sumarlo al total
    var subtotal = parseFloat(producto.precio) * producto.cantidad;
    total += subtotal;

    // Agregar los elementos al carrito
    li.appendChild(spanNombre);
    li.appendChild(imgProducto);
    li.appendChild(spanPrecio);
    li.appendChild(btnEliminar);
    li.appendChild(btnDisminuir);
    li.appendChild(spanCantidad);
    li.appendChild(btnAumentar);
    listaCarrito.appendChild(li);
  });

  // Actualizar el total a pagar
  totalPagar.textContent = '$' + total.toFixed(2);
}

/* ********************************** */
/*mostrar mensaje producto y contador carrito  */
/* ********************************** */



// Función para actualizar el contador del carrito
function actualizarContadorCarrito() {
  var contadorCarrito = document.getElementById("contadorCarrito");
  var productosSeleccionados = obtenerProductosSeleccionados();
  contadorCarrito.textContent = productosSeleccionados.length;
}

// Función para obtener los productos seleccionados del almacenamiento local
function obtenerProductosSeleccionados() {
  var productosSeleccionados = localStorage.getItem("carrito");
  if (productosSeleccionados) {
    return JSON.parse(productosSeleccionados);
  }
  return [];
}

// Función para agregar un producto al carrito
function agregarAlCarrito(producto) {
  var productosSeleccionados = obtenerProductosSeleccionados();

  // Verificar si el producto ya está en el carrito
  var productoExistente = productosSeleccionados.find(function (p) {
    return p.id === producto.id;
  });

  if (productoExistente) {
    mostrarMensajeAgregado();
  } else {
    productosSeleccionados.push(producto);
    localStorage.setItem("carrito", JSON.stringify(productosSeleccionados));
    mostrarMensajeAgregado();
    actualizarContadorCarrito();
  }
}

// Función para mostrar el mensaje de producto agregado al carrito
function mostrarMensajeAgregado() {
  var mensajeAgregado = document.getElementById("mensaje-agregado");
  mensajeAgregado.style.display = "block";
  setTimeout(function () {
    mensajeAgregado.style.display = "none";
  }, 2000);
}

// Función para mostrar el mensaje de producto existente en el carrito
function mostrarMensajeExistente() {
  var mensajeExistente = document.getElementById("mensaje-existente");
  mensajeExistente.style.display = "block";
  setTimeout(function () {
    mensajeExistente.style.display = "none";
  }, 2000);
}

// Evento click para agregar productos al carrito
var addButtons = document.querySelectorAll(".add-cart");
addButtons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    var id = event.target.getAttribute("data-id");
    var nombre = event.target.getAttribute("data-nombre");
    var precio = event.target.getAttribute("data-precio");
    var img = event.target.getAttribute("data-img");

    var producto = {
      id: id,
      nombre: nombre,
      precio: precio,
      img: img
    };

    agregarAlCarrito(producto);
  });
});

// Actualizar contador del carrito al cargar la página
actualizarContadorCarrito();










/* ********************************** */
/*          mostrar detalles  */
/* ********************************** */







/* ********************************** */
/*               CARROSEL           */
/* ********************************** */

const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let slidePosition = 0;
const slidesToShow = 3;
const slidesToScroll = 1;

const slides = Array.from(document.querySelectorAll('.slide'));
const slideWidth = slides[0].offsetWidth + parseInt(getComputedStyle(slides[0]).marginRight);
const totalSlides = slides.length;

function updateSlidePosition() {
  slider.style.transform = `translateX(${-slidePosition * slideWidth}px)`;
}

function moveToNextSlide() {
  if (slidePosition === totalSlides - slidesToShow) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  updateSlidePosition();
}

function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - slidesToShow;
  } else {
    slidePosition--;
  }
  updateSlidePosition();
}

function startSlider() {
  setInterval(moveToNextSlide, 1000); // Cambiar slide cada 5 segundos (5000 ms)
}

// Clonar los primeros slides y añadirlos al final
const firstSlides = slides.slice(0, slidesToShow);
const clonedSlides = firstSlides.map((slide) => slide.cloneNode(true));
clonedSlides.forEach((clonedSlide) => {
  slider.appendChild(clonedSlide);
});

prevBtn.addEventListener('click', moveToPrevSlide);
nextBtn.addEventListener('click', moveToNextSlide);

startSlider();









/* ********************************** */
/*               mi cuenta        */
/* ********************************** */

  // Obtén el icono y el menú
  const userIcon = document.getElementById('userIcon');
  const menu = document.getElementById('menu');

  // Agrega un evento de clic al icono
  userIcon.addEventListener('click', function() {
      // Obtén el enlace dentro del menú
      const accountLink = menu.querySelector('a');
      
      // Simula el clic en el enlace a "Mi cuenta"
      accountLink.click();
  });



/* ********************************** */
/*              pagar      */
/* ********************************** */
// Obtener referencia al botón de pago
const pagarButton = document.getElementById('btn-pagar');

// Agregar evento de clic al botón de pago
pagarButton.addEventListener('click', enviarPedidoPorWhatsApp);

// Función para enviar el pedido por WhatsApp
function enviarPedidoPorWhatsApp() {
  // Obtener los datos del pedido desde el local storage
  const datosPedido = localStorage.getItem('lista-carrito');

  // Verificar si se obtuvieron los datos del pedido
  if (datosPedido) {
    

    // Construir el enlace para redirigir a WhatsApp
    const enlaceWhatsApp = `https://api.whatsapp.com/send?text=${encodeURIComponent(mensajeWhatsApp)}`;

    // Abrir WhatsApp en una nueva pestaña
    window.open(enlaceWhatsApp);
  } else {
    console.log('No se encontraron datos de pedido en el almacenamiento local.');
  }
}



















