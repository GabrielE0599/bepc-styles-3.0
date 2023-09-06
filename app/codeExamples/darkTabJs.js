const darkTabJs = `
const buttons = document.querySelectorAll('.btn-tab-dark');
const menuOption = document.querySelectorAll('.tab-menu-option-dark');
const contents = document.querySelectorAll('.tab-content-dark');

buttons.forEach((button, index) => {
    button.addEventListener('click', function () {
        
        contents.forEach(content => content.style.display = 'none');
        
        
        contents[index].style.display = 'block';
        
        
        menuOption.forEach(menOpt => menOpt.classList.remove('tab-menu-selected-dark'));
        
        
        menuOption[index].classList.add('tab-menu-selected-dark');
    });
});`;

export default darkTabJs;