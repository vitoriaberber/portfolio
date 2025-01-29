const menu = document.getElementById('menu');
const lista = document.getElementById('lista');
const botao = document.getElementById('botao');
const modo = document.querySelector('.navegacao__modo');
const idioma = document.querySelector('.navegacao__idioma');
const containerIdioma = document.querySelector('.navegacao__lista-idioma');
const listaIdioma = document.querySelector('.navegacao__idioma ul');
const traducoes = {
  en: {
    portuguese: 'Portuguese',
    english: 'English',
    home: 'Home',
    aboutMe: 'About me',
    skills: 'Skills',
    projectsHeader: 'Projects',
    experiences: 'Experiences',
    contacts: 'Contacts',
    greeting: 'Hello, I am',
    student: 'Student of Systems Analysis and Development',
    resume: 'Resume',
    aboutMeTitle: 'About me',
    aboutMeText: [
      '🎓 Systems Analysis and Development (third semester) at Universidade Municipal de São Caetano do Sul',
      '📚 Studying web development',
      '🗣️ B2 intermediate level in English',
      '🚀 Looking for opportunities as an IT intern or in the development area.',
    ],
    skillsTitle: 'Skills',
    projectsTitle: 'Projects',
    projects: {
      calculator: 'Calculator',
      imc: 'BMI Calculator',
      loginPage: 'Login Page',
      registerPage: 'Registration Page',
      nikePage: 'Nike Page',
      seriesPage: 'Series Recommendations Page',
      newsPage: 'News Page',
      friendsPage: 'Friends Page',
    },
    experiencesTitle: 'Experiences',
    experiencesData: '2024 - now',
    experiencesRole: 'IT Intern',
    experienceText: 'As an intern, my tasks involve organizing and managing digital documents, including file indexing and using Excel spreadsheets.',
    contactsTitle: 'Contacts',
    copyright: 'Copyright © 2025 Vitória Berber. All rights reserved.',
  },
  pt: {
    portuguese: 'Português',
    english: 'Inglês',
    home: 'Home',
    aboutMe: 'Sobre mim',
    skills: 'Habilidades',
    projectsHeader: 'Projetos',
    experiences: 'Experiências',
    contacts: 'Contatos',
    greeting: 'Olá, eu sou',
    student: 'Estudante de Análise e Desenvolvimento de Sistemas',
    resume: 'Currículo',
    aboutMeTitle: 'Sobre mim',
    aboutMeText: [
      '🎓 Análise e Desenvolvimento de Sistemas (terceiro semestre) na Universidade Municipal de São Caetano do Sul',
      '📚 Estudando desenvolvimento web',
      '🗣️ B2 nível de inglês intermediário',
      '🚀 Estou em busca de oportunidades como estagiária de tecnologia da informação ou na área de desenvolvimento.',
    ],
    skillsTitle: 'Habilidades',
    projectsTitle: 'Projetos',
    projects: {
      calculator: 'Calculadora',
      imc: 'Calculadora de IMC',
      loginPage: 'Página de Login',
      registerPage: 'Página de Cadastro',
      nikePage: 'Página Nike',
      seriesPage: 'Página de dicas de séries',
      newsPage: 'Página de Notícias',
      friendsPage: 'Página Friends',
    },
    experiencesTitle: 'Experiências',
    experiencesData: '2024 - presente',
    experiencesRole: 'Estagiária de TI',
    experienceText: 'Como estagiária, minhas funções envolvem a organização e gestão de documentos digitais, incluindo a indexação de arquivos e o uso de planilhas no Excel.',
    contactsTitle: 'Contatos',
    copyright: 'Copyright © 2025 de Vitória Berber. Todos os direitos reservados.',
  },
};

  

menu.addEventListener('click', () => {
    lista.classList.toggle('aparecer');
}
);

window.addEventListener('scroll', () => {
    lista.classList.remove('aparecer');
    containerIdioma.classList.remove('escolher');
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
    const imagemIdioma = document.querySelector('.navegacao__idioma img');
    const favicon = document.querySelector("link[rel='shortcut icon']");

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
        imagemIdioma.setAttribute('src', 'assets/traducao-preto.svg')
        favicon.setAttribute('href', 'favicon_io-claro/favicon-32x32.png');
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
        imagemIdioma.setAttribute('src', 'assets/traducao-branco.svg')
        favicon.setAttribute('href', 'favicon_io-escuro/favicon-32x32.png');
    }
});

idioma.addEventListener('click', () => {
    containerIdioma.classList.toggle('escolher');
});

function changeLanguage(idio) {
    document.querySelector('.navegacao__lista-idioma li:nth-child(1)').innerText = traducoes[idio].portuguese;
    document.querySelector('.navegacao__lista-idioma li:nth-child(2)').innerText = traducoes[idio].english;
    document.querySelector("a[href='#home']").innerText = traducoes[idio].home;
    document.querySelector("a[href='#sobre-mim']").innerText = traducoes[idio].aboutMe;
    document.querySelector("a[href='#habilidades']").innerText = traducoes[idio].skills;
    document.querySelector("a[href='#projetos']").innerText = traducoes[idio].projectsHeader;
    document.querySelector("a[href='#experiencias']").innerText = traducoes[idio].experiences;
    document.querySelector("a[href='#contatos']").innerText = traducoes[idio].contacts;
  
    document.querySelector(".sessao-principal__texto").textContent = traducoes[idio].greeting;
    document.querySelector(".sessao-principal__titulo-dois").innerHTML = `<strong>${traducoes[idio].student}</strong>`;
    document.querySelector(".sessao-principal__texto-dois a").innerText = traducoes[idio].resume;
  
    document.querySelector('.container__titulo').innerText = traducoes[idio].aboutMeTitle;
    const aboutMeLista = document.querySelector(".container__lista");
    aboutMeLista.innerHTML = traducoes[idio].aboutMeText.map(item => `<li>${item}</li>`).join("");
  
    document.querySelector(".habilidades__titulo").innerText = traducoes[idio].skillsTitle;
  
    document.querySelector(".projetos__titulo").innerText = traducoes[idio].projectsTitle;
    document.querySelector(".container-pai__container-filho:nth-child(1) .container-filho__titulo").textContent = traducoes[idio].projects.calculator;
    document.querySelector(".container-pai__container-filho:nth-child(2) .container-filho__titulo").textContent = traducoes[idio].projects.imc;
    document.querySelector(".container-pai__container-filho:nth-child(3) .container-filho__titulo").textContent = traducoes[idio].projects.loginPage;
    document.querySelector(".container-pai__container-filho:nth-child(4) .container-filho__titulo").textContent = traducoes[idio].projects.registerPage;
    document.querySelector(".container-pai__container-filho:nth-child(5) .container-filho__titulo").textContent = traducoes[idio].projects.nikePage;
    document.querySelector(".container-pai__container-filho:nth-child(6) .container-filho__titulo").textContent = traducoes[idio].projects.seriesPage;
    document.querySelector(".container-pai__container-filho:nth-child(7) .container-filho__titulo").textContent = traducoes[idio].projects.newsPage;
    document.querySelector(".container-pai__container-filho:nth-child(8) .container-filho__titulo").textContent = traducoes[idio].projects.friendsPage;
  
    document.querySelector(".experiencias__titulo").innerText = traducoes[idio].experiencesTitle;
    document.querySelector(".profissao__duracao").innerText = traducoes[idio].experiencesData;
    document.querySelector(".profissao__titulo span").innerText = traducoes[idio].experiencesRole;
    document.querySelector(".profissao__paragrafo").innerText = traducoes[idio].experienceText;
  
    document.querySelector(".contatos__titulo").innerText = traducoes[idio].contactsTitle;
  
    document.querySelector(".rodape__texto").innerText = traducoes[idio].copyright;
}

listaIdioma.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    const selectedLang = (event.target.innerText === 'Português' || event.target.innerText === 'Portuguese') ? 'pt' : 'en';
    changeLanguage(selectedLang);
  }
});