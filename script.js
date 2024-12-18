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

    // Redirigir al hacer clic en los botones de menú
    const menuButtons = document.querySelectorAll('.menu-button a');
    menuButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault();  // Prevenir el comportamiento por defecto del enlace
            const targetPage = button.getAttribute('href');
            window.location.href = targetPage;  // Redirigir a la página de destino
        });
    });

    // Redirigir al hacer clic en el botón de recompensas
    const rewardsButton = document.querySelector('.rewards-button a');
    if (rewardsButton) {
        rewardsButton.addEventListener('click', function(event) {
            event.preventDefault();  // Prevenir el comportamiento por defecto del enlace
            window.location.href = rewardsButton.getAttribute('href');  // Redirigir a la página de recompensas
        });
    }
});
