window.onload = () => {
    const excusaTexto = document.querySelector('#excuse');
    const boton = document.querySelector('#btn');

    let quien = ['Mi perro', 'Mi abuela', 'Un repartidor de pizza', 'Un marciano', 'Mi gato'];
    let accion = ['se comió', 'quemó', 'robó', 'escondió', 'lanzó por la ventana'];
    let que = ['mis llaves', 'mi computadora', 'mi tarea', 'el examen', 'mi café'];
    let cuando = ['justo cuando terminé', 'mientras dormía', 'mientras yo rezaba', 'durante el almuerzo', 'cuando salí de casa'];

    function generarExcusa() {
        // Seleccionamos un índice aleatorio para cada lista
        let r_quien = quien[Math.floor(Math.random() * quien.length)];
        let r_accion = accion[Math.floor(Math.random() * accion.length)];
        let r_que = que[Math.floor(Math.random() * que.length)];
        let r_cuando = cuando[Math.floor(Math.random() * cuando.length)];

    
        let fraseCompleta = `${r_quien} ${r_accion} ${r_que} ${r_cuando}.`;
        excusaTexto.innerHTML = fraseCompleta;
    }

   
    boton.addEventListener('click', generarExcusa);
};