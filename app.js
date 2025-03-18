// Etiqueta para guardar el nombre de nuestros amigos
let listaDeAmigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value;

    if (nombre === "") {
        alert("Por favor, ingresa un nombre.");
        return;
    }

    if (listaDeAmigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    listaDeAmigos.push(nombre);
    mostrarLista();
    input.value = ""; // Limpiar el campo de texto
}

// Función para mostrar la lista de amigos
function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar lista previa

    for (let i = 0; i < listaDeAmigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = listaDeAmigos[i];
        lista.appendChild(item);
    }
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert("La lista está vacía. Agrega amigos primero.");
        return;
    }

    let indice = Math.floor(Math.random() * listaDeAmigos.length);
    let amigoSorteado = listaDeAmigos[indice];
    document.getElementById("resultado").textContent = "El amigo secreto es: " + amigoSorteado;
}

// Función para limpiar la lista
function limpiarLista() {
    listaDeAmigos = [];
    mostrarLista();
    document.getElementById("resultado").textContent = "La lista ha sido limpiada."; // Mensaje de confirmación
}
