const menu = document.getElementById('menu');
const lista = document.getElementById('lista');
const botao = document.getElementById('botao');
const modo = document.querySelector('.navegacao__modo');

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

window.addEventListener('load', () => {
    botao.style.display = 'none';
})

window.addEventListener('scroll', () => {
    if(window.scrollY > 300){
        botao.style.display = 'block';
    } else {
        botao.style.display = 'none'
    }
});

modo.addEventListener('click', () => {
    const btnModo = document.querySelector('.modo__botao');
    const body = document.getElementById('body');
    btnModo.classList.toggle('claro');
    if(btnModo.classList.contains('claro')){
        body.style.backgroundColor = 'white';
    } else {
        body.style.backgroundColor = '';
    }
});