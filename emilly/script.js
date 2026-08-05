// Inicializar Animações (AOS)
AOS.init({
    duration: 1000,
    once: true
});

// Efeito de mudar fundo da Navbar ao rolar
window.addEventListener('scroll', function() {
    const nav = document.querySelector('#mainNav');
    if (window.scrollY > 50) {
        nav.classList.add('shadow');
        nav.style.background = '#ffffff';
    } else {
        nav.classList.remove('shadow');
        nav.style.background = 'rgba(255, 255, 255, 0.9)';
    }
});

// Fechar menu mobile automaticamente ao clicar em um link
const navLinks = document.querySelectorAll('.nav-link');
const menuToggle = document.getElementById('navbarNav');
const navbar = document.getElementById('mainNav');
const navbarToggler = document.querySelector('.navbar-toggler');

navLinks.forEach((l) => {
    l.addEventListener('click', () => {
        if(window.innerWidth < 992) {
            const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle:false});
            bsCollapse.hide();
        }
    });
});

// Fechar menu ao clicar fora dele
document.addEventListener('click', (event) => {
    const isClickInsideNavbar = navbar.contains(event.target);
    const isClickOnToggle = navbarToggler.contains(event.target);
    const isMenuOpen = menuToggle.classList.contains('show');
    
    if (!isClickInsideNavbar && !isClickOnToggle && isMenuOpen) {
        const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle:false});
        bsCollapse.hide();
    }
});

/* ============================================ */
/* GESTÃO DE COOKIES (LGPD) */
/* ============================================ */
function acceptCookies() {
    localStorage.setItem('cookiesAccepted', 'true');
    document.getElementById('cookie-bar').style.display = 'none';
}

// Verifica se o usuário já aceitou ao carregar a página
window.onload = function() {
    if (!localStorage.getItem('cookiesAccepted')) {
        setTimeout(() => {
            document.getElementById('cookie-bar').style.display = 'block';
        }, 2000); // Aparece após 2 segundos para não assustar
    }
};