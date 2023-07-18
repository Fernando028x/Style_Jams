

/* ********************************** */
/*              detalles image  */
/* ********************************** */


// Obtener referencia al botón "Detalles"
var detallesBtns = document.querySelectorAll('.details-btn');


detallesBtns.forEach(function(detallesBtn) {
  detallesBtn.addEventListener('click', function() {
    // Obtener referencia al modal
    var modal = new bootstrap.Modal(document.getElementById('imageGalleryModal'));

    // Mostrar el modal al hacer clic en el botón "Detalles"
    modal.show();
  });
});

// Obtener todas las miniaturas
var thumbnails = document.querySelectorAll('.thumbnail');
thumbnails.forEach(function(thumbnail) {
  thumbnail.addEventListener('click', function() {
    // Obtener la URL de la imagen grande desde el atributo "data-large"
    var largeImageSrc = this.getAttribute('data-large');
    
    // Actualizar la imagen grande con la URL seleccionada
    mainImage.src = largeImageSrc;
  });
});


// Obtener referencia al elemento de imagen grande
var mainImage = document.getElementById('main-image');

// Agregar event listeners a todas las miniaturas
thumbnails.forEach(function(thumbnail) {
  thumbnail.addEventListener('click', function() {
    // Obtener la URL de la imagen grande desde el atributo "data-large"
    var largeImageSrc = this.getAttribute('data-large');
    
    // Actualizar la imagen grande con la URL seleccionada
    mainImage.src = largeImageSrc;
  });
});


// Obtener referencia al botón de cierre del modal
var closeButton = document.querySelector('.btn-close');

// Agregar un event listener al botón de cierre
closeButton.addEventListener('click', function() {
  // Obtener referencia al modal
  var modal = document.getElementById('imageGalleryModal');
  
  // Cerrar el modal al hacer clic en el botón de cierre
  modal.classList.remove('show');
  modal.style.display = 'none';
});


/* ********************************** */
/*            inicio  */
/* ********************************** */

window.addEventListener('DOMContentLoaded', function () {
  var spans = document.querySelectorAll('#bienvenida span');
  spans.forEach(function (span, index) {
    span.style.animationDelay = (index * 1.5) + 's'; /* Ajusta el retraso de animación */
    span.style.animationPlayState = 'running';
  });
});






