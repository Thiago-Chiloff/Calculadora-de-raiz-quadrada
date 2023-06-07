document.addEventListener('DOMContentLoaded',  () => {

const corpo = document.querySelector('body');
const resposta = document.querySelector('h3');

corpo.addEventListener  ('click' , (e) => {
    e.preventDefault();

    const nuemro = Number(corpo.querySelector('.numero').value);
    const raiz = Math.sqrt(nuemro);
    
    resposta.innerText = 'Seu resultado é: '  + raiz;

    document.querySelector('.numero').value = '';
})
})