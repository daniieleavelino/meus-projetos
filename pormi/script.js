// Aguarda o carregamento completo do DOM
document.addEventListener("DOMContentLoaded", function() {

    // INICIALIZAR O AOS (Animações de luxo)
    AOS.init({
        duration: 1000, /* Duração da animação em milissegundos (1 segundo = suave) */
        once: true,     /* IMPORTANTE: true faz a animação acontecer só uma vez. Se for false, fica a piscar cada vez que rola a página (efeito "ioiô", nada elegante). */
        easing: 'ease-out-cubic', /* Efeito de travagem suave no final da animação */
        offset: 100     /* O elemento começa a animar quando está 100px dentro do ecrã */
    });
    
    // Efeito de rolagem na Navbar
    const navbar = document.getElementById("mainNav");
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            navbar.classList.add("nav-scrolled");
            // Se estiver no mobile, os textos já são escuros no menu hambúrguer, 
            // mas no desktop garantimos que fiquem visíveis no fundo claro.
        } else {
            navbar.classList.remove("nav-scrolled");
        }
    });

    // Fechar o menu mobile ao clicar em um link
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
            }
        });
    });
});

// =========================================
// LÓGICA DO BANNER DE COOKIES (LGPD)
// =========================================
document.addEventListener("DOMContentLoaded", function() {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptCookiesBtn = document.getElementById('accept-cookies');

    if (cookieBanner && acceptCookiesBtn) {
        // Verifica no LocalStorage se a noiva já clicou em aceitar no passado
        if (!localStorage.getItem('cookiesAccepted_PormiArt')) {
            // Se não aceitou, mostramos o banner. 
            // O setTimeout de 1.5 segundos cria uma experiência de luxo: a noiva entra, 
            // vê a capa linda, e só depois o aviso desliza suavemente.
            setTimeout(() => {
                cookieBanner.classList.add('show');
            }, 1500);
        }

        // Quando ela clica no botão dourado
        acceptCookiesBtn.addEventListener('click', () => {
            // Salva a permissão no navegador dela
            localStorage.setItem('cookiesAccepted_PormiArt', 'true');
            // Remove a classe para esconder o banner suavemente
            cookieBanner.classList.remove('show');
        });
    }
});