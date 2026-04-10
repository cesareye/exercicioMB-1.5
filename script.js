const themeBtn = document.getElementById('theme-toggle');

themeBtn.addEventListener('click', () => {
    // O toggle adiciona a classe se não existir, e remove se existir
    document.body.classList.toggle('dark-theme');
});

