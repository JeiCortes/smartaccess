document.getElementById('inicioSesionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los valores del formulario de inicio de sesión
    const correoInicio = document.getElementById('correoInicio').value;
    const contrasenaInicio = document.getElementById('contrasenaInicio').value;

    // Obtener la lista de usuarios registrados
    const usuariosRegistrados = JSON.parse(localStorage.getItem('usuariosRegistrados')) || [];

    // Buscar el usuario en la lista por el correo y la contraseña
    const usuarioRegistrado = usuariosRegistrados.find(user => user.correo === correoInicio && user.contrasena === contrasenaInicio);

    if (usuarioRegistrado) {
        // Almacenar la información del usuario actual en el almacenamiento local
        localStorage.setItem('usuarioActual', JSON.stringify(usuarioRegistrado));

        // Redirigir al usuario a la página de opciones después del inicio de sesión exitoso
        window.location.replace('opciones.html');
    } else {
        // Mostrar un mensaje de error si los datos son incorrectos
        alert('Correo o contraseña incorrectos. Inténtalo de nuevo.');
    }

    // Limpiar el formulario después de intentar iniciar sesión
    document.getElementById('inicioSesionForm').reset();
});


