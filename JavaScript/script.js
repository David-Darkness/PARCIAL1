function cambiarColor() {
    let colorActual = document.body.style.backgroundColor;
    
    if (colorActual === "lightblue") {
        
        document.body.style.backgroundColor = "";
        document.body.style.color = "";
    } else {
        
        document.body.style.backgroundColor = "lightblue";
        document.body.style.color = "darkblue";
    }
}


function cambiarContenido(id) {
    let newText = prompt(`Texto a cambiar en ${id}:`);
    if (newText !== null && newText.trim() !== '') {
        document.getElementById("texto-completo").innerText = newText;
    } else {
        alert('No se ha ingresado un texto válido.');
    }
}