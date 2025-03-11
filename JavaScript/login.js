function validarFormulario() {
    let nombre = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    // Expresiones regulares
    let regexNombre = /^[A-Za-z\s]{3,20}$/; // Solo letras y espacios, entre 3 y 20 caracteres
    let regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Formato de correo válido
    let regexPassword = /^.{6,12}$/; // Contraseña entre 6 y 12 caracteres

    // Validaciones
    if (!regexNombre.test(nombre)) {
        alert("⚠️ Nombre inválido. Debe contener solo letras y espacios (3-20 caracteres).");
        return;
    }
    
    if (!regexEmail.test(email)) {
        alert("⚠️ Correo inválido. Ingrese un formato correcto (ejemplo@correo.com).");
        return;
    }
    
    if (!regexPassword.test(password)) {
        alert("⚠️ Contraseña inválida. Debe tener entre 6 y 12 caracteres.");
        return;
    }

    // Mensaje en alert
    let mensaje = "✅ Formulario válido. ¡Bienvenido!\n" +
                  "👤 Nombre: " + nombre + "\n" +
                  "📧 Correo: " + email + "\n" +
                  "🔑 Contraseña: " + password;

    alert(mensaje);

    // Imprimir en consola
    console.log("=== Registro Exitoso ===");
    console.log("Nombre: " + nombre);
    console.log("Correo: " + email);
    console.log("Contraseña: " + password);
}

// Función para redirigir
function redirectToRegister() {
    window.location.href = "../index.html";
}

