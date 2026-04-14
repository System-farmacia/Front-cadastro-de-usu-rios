let loginButton = document.getElementById('login');
let cadastrarButton = document.getElementById('cadastrar');

let body = document.querySelector('body');

// Adicionar evento de clique para o botão de login
loginButton.addEventListener('click', () => {
    body.className = 'login-js';
});

// Adicionar evento de clique para o botão de cadastro
cadastrarButton.addEventListener('click', () => {
    body.className = 'cadastrar-js';
});