document.addEventListener('DOMContentLoaded', function() {
    // Redirigir al hacer clic en el botón "ÚNETE AHORA"
    document.getElementById('unete-ahora')?.addEventListener('click', function() {
        window.location.href = 'unete.html'; // Cambiar 'unete.html' al archivo adecuado
    });

    // Redirigir al hacer clic en el botón "INICIAR SESIÓN"
    document.getElementById('iniciar-sesion')?.addEventListener('click', function() {
        window.location.href = 'ingresar.html'; // Cambiar 'ingresar.html' al archivo adecuado
    });

    // Redirigir al hacer clic en "Aquí" (Noticias)
    document.getElementById('noticias-button')?.addEventListener('click', function() {
        window.location.href = 'noticias.html'; // Cambiar 'noticias.html' al archivo adecuado
    });

    // Redirigir al hacer clic en el botón "Ver más" para Noticias Recientes
    document.getElementById('ver-mas-recientes')?.addEventListener('click', function() {
        window.location.href = 'recientes.html'; // Cambiar 'recientes.html' al archivo adecuado
    });

    // Redirigir al hacer clic en el botón "Ver más" para Historias de Starbucks
    document.getElementById('ver-mas-historias')?.addEventListener('click', function() {
        window.location.href = 'historias.html'; // Cambiar 'historias.html' al archivo adecuado
    });

    // Redirigir al hacer clic en el botón "Rewards"
    document.getElementById('rewards-button')?.addEventListener('click', function() {
        window.location.href = 'rewards.html'; // Cambiar 'rewards.html' al archivo adecuado
    });
});
