const headerElement = document.getElementById('header'); // elemento alvo
const pixelsAmount = '100'; // Quantidade de pixels a contar do TOP até definir a cor

window.addEventListener('scroll', function() {
    if (window.scrollY > pixelsAmount) {
        headerElement.classList.add('change-style'); // adiciona classe "changeColor"
    } else {
        headerElement.classList.remove('change-style'); // remove classe "changeColor"
    }
});