function cerrarSesion() {
    // Limpiar la información del usuario actual en el almacenamiento local
    localStorage.removeItem('usuarioActual');
    
    // Redirigir al usuario a la página de inicio (index.html)
    window.location.replace('index.html');
}


