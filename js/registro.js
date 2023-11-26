document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los valores del formulario de registro
    const nombres = document.getElementById('nombres').value;
    const apellidos = document.getElementById('apellidos').value;
    const correo = document.getElementById('correo').value;
    const telefono = document.getElementById('telefono').value;
    const contrasena = document.getElementById('contrasena').value;

    // Crear un objeto de usuario
    const usuario = {
        nombres: nombres,
        apellidos: apellidos,
        correo: correo,
        telefono: telefono,
        contrasena: contrasena
    };

    // Obtener la lista de usuarios registrados o inicializarla si aún no existe
    const usuariosRegistrados = JSON.parse(localStorage.getItem('usuariosRegistrados')) || [];

    // Agregar el nuevo usuario a la lista
    usuariosRegistrados.push(usuario);

    // Almacenar la lista de usuarios registrados en el almacenamiento local
    localStorage.setItem('usuariosRegistrados', JSON.stringify(usuariosRegistrados));

    // Redirigir al usuario a la página de perfil después del registro
    window.location.replace('perfil.html');
});
