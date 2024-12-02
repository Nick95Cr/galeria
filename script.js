// Función para manejar el evento "mouseover"
function upDate(previewPic) {
    console.log("Mouse sobre imagen:", previewPic.alt, previewPic.src); // Para depuración
  
    // Seleccionar el div principal
    const mainImage = document.getElementById("image");
  
    // Cambiar el texto al contenido del atributo alt
    mainImage.innerHTML = previewPic.alt;
  
    // Cambiar la imagen de fondo al contenido del atributo src
    mainImage.style.backgroundImage = `url(${previewPic.src})`;
  }
  
  // Función para manejar el evento "mouseout"
  function unDo() {
    console.log("Mouse fuera de la imagen"); // Para depuración
  
    const mainImage = document.getElementById("image");
  
    // Restaurar el texto original
    mainImage.innerHTML = "Pase el ratón por encima de una imagen para mostrarla aquí";
  
    // Restaurar el fondo vacío
    mainImage.style.backgroundImage = "";
  }
  
  // Asignar eventos a todas las miniaturas
  const thumbnails = document.querySelectorAll(".thumbnail");
  
  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("mouseover", () => upDate(thumbnail));
    thumbnail.addEventListener("mouseout", unDo);
  });
  