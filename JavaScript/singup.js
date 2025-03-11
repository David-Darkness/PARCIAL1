function mostrarDatos1() {
    let nombre = document.getElementById("name").value.trim();
    let apellido = document.getElementById("lastname").value.trim();
    let email = document.getElementById("email").value.trim();
    let telefono = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value.trim();
    let estrato = document.getElementById("estrato").value.trim();
    let fecha = document.getElementById("fecha").value;
    let sangre = document.getElementById("sanguineo").value;

    // Validaciones
    let regexNombre = /^[A-Za-zÁáÉéÍíÓóÚúÑñ\s]+$/;
    let regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let regexTelefono = /^\d{7,10}$/;
    let regexEstrato = /^[1-9]$|^10$/;
    let regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!regexNombre.test(nombre) || !regexNombre.test(apellido)) {
        alert("Nombre y apellido solo pueden contener letras y espacios.");
        return;
    }
    if (!regexEmail.test(email)) {
        alert("Correo inválido.");
        return;
    }
    if (!regexTelefono.test(telefono)) {
        alert("Teléfono inválido.");
        return;
    }
    if (!regexEstrato.test(estrato)) {
        alert("Estrato inválido.");
        return;
    }
    if (!fecha) {
        alert("Selecciona una fecha de nacimiento.");
        return;
    }
    if (!sangre) {
        alert("Selecciona un grupo sanguíneo.");
        return;
    }
    if (!regexPassword.test(password)) {
        alert("La contraseña debe tener al menos 8 caracteres, incluyendo letras y números.");
        return;
    }

    // Obtener género
    let genero = document.querySelector('input[name="genero"]:checked')?.value || "No seleccionado";

    // Obtener actividades favoritas
    let actividades = [];
    document.querySelectorAll('.form-check-input[type="checkbox"]:checked').forEach(checkbox => {
        actividades.push(checkbox.nextElementSibling.textContent.trim());
    });

    // Mostrar todos los datos en un alert
    alert(
        "✅ Registro Exitoso ✅\n\n" +
        "👤 Nombre: " + nombre + "\n" +
        "🧑‍🤝‍🧑 Apellido: " + apellido + "\n" +
        "📧 Email: " + email + "\n" +
        "📞 Teléfono: " + telefono + "\n" +
        "🔑 Contraseña: " + password + "\n" +
        "🏡 Estrato: " + estrato + "\n" +
        "🎂 Fecha de Nacimiento: " + fecha + "\n" +
        "🩸 Grupo Sanguíneo: " + sangre + "\n" +
        "🚻 Género: " + genero + "\n" +
        "🎯 Actividades Favoritas: " + (actividades.length > 0 ? actividades.join(", ") : "Ninguna") + "\n\n" +
        "🔜 Serás redirigido al Login..."
    );

    // Redirigir al login después de mostrar el alert
    window.location.href = "../HTML/login.html";
}





