const lightTabJs = `
const buttons = document.querySelectorAll('.btn-tab');
const menuOption = document.querySelectorAll('.tab-menu-option');
const contents = document.querySelectorAll('.tab-content');

buttons.forEach((button, index) => {
    button.addEventListener('click', function () {
        
        contents.forEach(content => content.style.display = 'none');
        
        
        contents[index].style.display = 'block';
        
        
        menuOption.forEach(menOpt => menOpt.classList.remove('tab-menu-selected'));
        
        
        menuOption[index].classList.add('tab-menu-selected');
    });
});`;

export default lightTabJs;