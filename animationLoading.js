document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById('loading-screen').style.opacity = 0;
        setTimeout(function() {
            document.getElementById('loading-screen').style.display = 'none';
        }, 500); // Tempo para a animação de fade-out
    }, 3000); // Tempo total de exibição da tela de loading
});