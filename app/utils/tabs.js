    /*---------- Seleccion de tab ------------*/
    const buttons = document.querySelectorAll('.btn-tab');
    const menuOption = document.querySelectorAll('.tab-menu-option');
    const contents = document.querySelectorAll('.tab-content');
    
    buttons.forEach((button, index) => {
        button.addEventListener('click', function () {
            // Oculta todos los contenidos
            contents.forEach(content => content.style.display = 'none');
            
            // Muestra el contenido correspondiente al botón
            contents[index].style.display = 'block';
            
            // Remueve la clase 'tab-menu-selected' de todos los elementos
            menuOption.forEach(menOpt => menOpt.classList.remove('tab-menu-selected'));
            
            // Agrega la clase 'tab-menu-selected' al elemento actual
            menuOption[index].classList.add('tab-menu-selected');
        });
    });