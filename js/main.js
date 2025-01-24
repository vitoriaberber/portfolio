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
    const fundo = document.querySelector('.principal__sessao-principal');
    const fundoContainer = document.querySelectorAll('.fundo');
    const fundoTexto = document.querySelectorAll('.texto__modo');
    const fundoBotao = document.querySelector('.fundo-botao');
    const imagemMenu = document.querySelector('.container__imagem-menu');

    btnModo.classList.toggle('claro');
    if(btnModo.classList.contains('claro')){
        body.style.backgroundColor = '#E0E0E0';
        fundo.classList.add('invertido');
        fundoContainer.forEach(item => {
            item.style.backgroundColor = 'white';
        });
        fundoTexto.forEach(item => {
            item.style.color = 'black';
        });
        fundoBotao.style.backgroundColor = 'black';
        imagemMenu.setAttribute('src', 'assets/menu-preto.svg');
    } else {
        body.style.backgroundColor = '';
        fundo.classList.remove('invertido');
        fundoContainer.forEach(item => {
            item.style.backgroundColor = '';
        });
        fundoTexto.forEach(item => {
            item.style.color = '';
        });
        fundoBotao.style.backgroundColor = '';
        imagemMenu.setAttribute('src', 'assets/menu-branco.svg');
    }
});