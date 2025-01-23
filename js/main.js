const menu = document.getElementById('menu');
const lista = document.getElementById('lista');
const botao = document.getElementById('botao');

menu.addEventListener('click', () => {
    lista.classList.toggle('aparecer');
}
);

window.addEventListener('scroll', () => {
    lista.classList.remove('aparecer');
});

window.addEventListener('resize', () => {
    if (window.innerWidth >= 912) {
        lista.classList.remove('aparecer');
    }
});

window.addEventListener('scroll', () => {
    if(window.scrollY > 300){
        botao.style.display = 'block';
    } else {
        botao.style.display = 'none'
    }
});