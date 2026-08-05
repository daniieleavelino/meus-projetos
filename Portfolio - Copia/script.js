// ==================== VARIÁVEIS GLOBAIS ====================
const SIGN = document.getElementById('sign');
const POWER_BTN = document.getElementById('powerBtn');
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

let isPoweredOn = false;
let randomFlickerTimeout = null;
let startupTimeouts = [];

// ==================== LÓGICA DO MENU MOBILE ====================
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menuBtn');
    const navLinks = document.getElementById('navLinks');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('active'); // Abre/fecha o menu
            menuBtn.classList.toggle('active');  // <--- ESSA LINHA FAZ A COR MUDAR
            
            const isExpanded = navLinks.classList.contains('active');
            menuBtn.setAttribute('aria-expanded', isExpanded);
        });

        // Fechar ao clicar em um link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuBtn.classList.remove('active'); // <--- Remove a cor ao clicar no link
                menuBtn.setAttribute('aria-expanded', 'false');
            });
        });

        // Fechar ao clicar fora do menu
        document.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuBtn.classList.remove('active'); // <--- Remove a cor ao clicar fora
            menuBtn.setAttribute('aria-expanded', 'false');
        });

        // Fechar com Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuBtn.classList.remove('active');
                menuBtn.setAttribute('aria-expanded', 'false');
            }
        });
    }

    const homeSection = document.getElementById('home');
    const bgOverlay = document.querySelector('.bg-overlay');

    if (homeSection && bgOverlay) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    bgOverlay.classList.add('default-bg');
                    bgOverlay.classList.remove('alt-bg');
                } else {
                    bgOverlay.classList.remove('default-bg');
                    bgOverlay.classList.add('alt-bg');
                }
            });
        }, { threshold: 0.3 });

        observer.observe(homeSection);
    }
});

// ==================== FUNÇÕES DE EFEITO NEON ====================
function clearAllTimers() {
    if (randomFlickerTimeout) clearTimeout(randomFlickerTimeout);
    startupTimeouts.forEach(id => clearTimeout(id));
    startupTimeouts = [];
}

function flicker() {
    const neonText = SIGN ? SIGN.querySelector('.neon-text') : null;
    if (!neonText) return;
    neonText.classList.add('flicker-effect');
    setTimeout(() => neonText.classList.remove('flicker-effect'), 70);
}

function runStartupSequence() {
    clearAllTimers();
    if (!SIGN) return;
    SIGN.classList.remove('neon-on');
    let delay = 0;
    const steps = [50, 150, 300, 450, 600, 700];

    steps.forEach((time, index) => {
        const state = index % 2 === 0 ? 'add' : 'remove';
        const id = setTimeout(() => SIGN.classList[state]('neon-on'), time);
        startupTimeouts.push(id);
        delay = time;
    });

    const finalId = setTimeout(() => {
        if (isPoweredOn) {
            SIGN.classList.add('neon-on');
            triggerRandomFlicker();
        }
    }, delay + 150);
    startupTimeouts.push(finalId);
}

function triggerRandomFlicker() {
    if (!isPoweredOn || !SIGN || !SIGN.classList.contains('neon-on')) return;
    const timeToNext = Math.random() * 7000 + 3000;
    randomFlickerTimeout = setTimeout(() => {
        flicker();
        if (Math.random() < 0.33) setTimeout(() => flicker(), 250);
        triggerRandomFlicker();
    }, timeToNext);
}

// ==================== LÓGICA DO INTERRUPTOR ====================
if (POWER_BTN) {
    POWER_BTN.addEventListener('change', () => {
        if (POWER_BTN.checked) {
            isPoweredOn = true;
            runStartupSequence();
        } else {
            isPoweredOn = false;
            clearAllTimers();
            if (SIGN) SIGN.classList.remove('neon-on');
            flicker();
        }
    });
}

// ==================== FUNÇÃO DE COPIAR E-MAIL ====================
function copyEmail() {
    const email = 'daniele.avelino@outlook.com';
    const btn = document.querySelector('.btn-copy-pill');
    const btnText = btn.querySelector('span');
    const statusDiv = document.getElementById('copy-status');
    navigator.clipboard.writeText(email).then(() => {
        const originalText = btnText.textContent;
        btn.classList.add('copied');
        btnText.textContent = 'Copiado!';
        statusDiv.textContent = 'E-mail copiado para a área de transferência';
        setTimeout(() => {
            btn.classList.remove('copied');
            btnText.textContent = originalText;
            statusDiv.textContent = '';
        }, 2000);
    }).catch(() => {
        statusDiv.textContent = 'Erro ao copiar e-mail';
        setTimeout(() => {
            statusDiv.textContent = '';
        }, 2000);
    });
}  

