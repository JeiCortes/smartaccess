document.addEventListener('DOMContentLoaded', function() {
    // Obtener la información del usuario almacenada en el almacenamiento local
    const usuarioActual = JSON.parse(localStorage.getItem('usuarioActual'));

    // Verificar si el usuario está autenticado
    if (usuarioActual) {
        // Rellenar la información del perfil en la página
        document.getElementById('nombreUsuario').textContent = usuarioActual.nombres || '';
        document.getElementById('apellidosUsuario').textContent = usuarioActual.apellidos || '';
        document.getElementById('correoUsuario').textContent = usuarioActual.correo || '';
        document.getElementById('telefonoUsuario').textContent = usuarioActual.telefono || '';
    } else {
        // Redirigir al usuario a la página de inicio de sesión si no está autenticado
        window.location.replace('sesion.html');
    }
});


