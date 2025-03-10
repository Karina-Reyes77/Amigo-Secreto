let listaNombres = [];
let nombresDisponibles = [];

function agregarAmigo() {
    let nombreDeAmigo = document.getElementById('amigo').value.trim(); 

    if (nombreDeAmigo === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }

    if (listaNombres.includes(nombreDeAmigo)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }

    listaNombres.push(nombreDeAmigo);
    nombresDisponibles.push(nombreDeAmigo); 
    console.log("Lista de amigos: ", listaNombres);
    
    mostrarLista(nombreDeAmigo);
    document.getElementById('amigo').value = '';
}

function mostrarLista(nombre) {
    let lista = document.getElementById("listaAmigos");
    let nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = nombre;
    lista.appendChild(nuevoElemento);
}

function sortearAmigo() {
    if (nombresDisponibles.length === 0) {
        alert("Todos los nombres han sido sorteados. Reinicia el juego para jugar de nuevo.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * nombresDisponibles.length);
    let amigoSeleccionado = nombresDisponibles.splice(indiceAleatorio, 1)[0];

    document.getElementById("resultado").textContent = `El amigo secreto es: ${amigoSeleccionado}`;
}

function reiniciarSorteo() {
    nombresDisponibles = [...listaNombres]; // Restaura los nombres disponibles
    document.getElementById("resultado").textContent = "";
    alert("El juego ha sido reiniciado. Ahora puedes sortear de nuevo.");
}
function reiniciarJuegoDesdeCero() {
    let confirmar = confirm("¿Estás seguro de que quieres reiniciar todo el juego desde el principio? Se perderán todos los nombres.");

    if (confirmar) {
        listaNombres = [];
        nombresDisponibles = [];
        
        document.getElementById("resultado").textContent = "";
        document.getElementById("listaAmigos").innerHTML = ""; // Borra la lista en pantalla
        document.getElementById('amigo').value = ''; // Borra el input

        alert("El juego ha sido reiniciado. Ahora puedes empezar de nuevo.");
    }
}
/*addButton.addEventListener("click", () => {
    const nombres = input.value.trim();
   
    nombres.push(nombres);
    actualizarLista();
    input.value = "";
});*/