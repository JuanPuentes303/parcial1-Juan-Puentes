function cambiarTexto() {

    document.getElementById("descripcion").style.fontFamily = "Arial"

}

function modoOscuro() {

    document.body.style.backgroundColor = "black"
    document.body.style.backgroundcolor = "white"

}

let carrito = 0

function agregarCarrito() {

    carrito++
    console.log("Productos en carrito: " + carrito)
    alert("has añadido: "+carrito +" productos" );
}

function enviarFormulario() {

    let nombre = document.getElementById("nombre").value
    let edad = document.getElementById("edad").value
    let genero = document.getElementById("genero").value
    let direccion = document.getElementById("direccion").value
    let telefono = document.getElementById("telefono").value
    let correo = document.getElementById("correo").value
    let mensaje = document.getElementById("mensaje").value
    

    alert("la informacion enviada es:"+ nombre+ edad+ genero+ direccion+ telefono+ correo+ mensaje);

    console.log("Formulario enviado")

}