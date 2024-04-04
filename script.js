document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('unlock-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente
        console.log('Evento submit capturado');

        // Obtiene las fechas ingresadas en el formulario
        const userDate = new Date(document.getElementById('user-date').value);
        const passwordDate = new Date(document.getElementById('password-date').value);

        // Define las fechas correctas para los usuarios
        const correctDateUser1 = new Date('2001-04-15'); // Usuario 1
        const correctDateUser2 = new Date('2004-12-31'); // Usuario 2

        // Comprueba si las fechas ingresadas son correctas para alguno de los usuarios
        if ((userDate.getTime() === correctDateUser1.getTime()) || (userDate.getTime() === correctDateUser2.getTime())) {
            // Si la fecha es correcta para uno de los usuarios, redirige a la otra interfaz
            window.location.href = 'te_quiero.html';
        } else {
            // Si la fecha es incorrecta para ambos usuarios, muestra un mensaje de error
            alert('¡Error! Verifica que hayas ingresado la fecha correctamente.');
        }
    });
});


