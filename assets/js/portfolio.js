const headerElement = document.getElementById('header'); // elemento alvo
const pixelsAmount = '100'; // Quantidade de pixels a contar do TOP até definir a cor

//Função que fica observando o scroll do usuário para alteração da cor do header
window.addEventListener('scroll', function() {
    if (window.scrollY > pixelsAmount) {
        headerElement.classList.add('change-style'); // adiciona classe "changeColor"
    } else {
        headerElement.classList.remove('change-style'); // remove classe "changeColor"
    }
});