function cambiarTexto() {

    document.getElementByID("descripcion").innerHTML = "Ahora estás viendo nuestras ofertas!"

}

function modoOscuro() {

    document.body.style.backgroundColor = "black"
    document.body.style.color = "white"

}

let carrito = 0

function agregarCarrito() {

    carrito++
    console.log("Productos en carrito: " + carrito)

}

function enviarFormulario() {

    let nombre = document.getElementById("nombre").value
    let correo = document.getElementById("correo").value
    let mensaje = document.getElementById("mensaje").value
    
    if (nombre == "") {
        alert("El nombre es obligatorio");
    } else if (correo == "") {
        alert("El correo es obligatorio");
    } else if (mensaje == ""){
        alert("El mensaje es obligatorio");
    }else {
        alert("Formulario enviado")
    }

    console.log("Formulario enviado")

}