// --- LÓGICA DO MENU MOBILE ---
const toggleButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

if (toggleButton && menu) {
  toggleButton.addEventListener('click', () => {
    const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
    toggleButton.setAttribute('aria-expanded', String(!isExpanded));
    menu.classList.toggle('is-open');
  });

  document.addEventListener('click', (event) => {
    const clickedInsideMenu = menu.contains(event.target);
    const clickedToggle = toggleButton.contains(event.target);

    if (!clickedInsideMenu && !clickedToggle) {
      menu.classList.remove('is-open');
      toggleButton.setAttribute('aria-expanded', 'false');
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      menu.classList.remove('is-open');
      toggleButton.setAttribute('aria-expanded', 'false');
    }
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('is-open');
      toggleButton.setAttribute('aria-expanded', 'false');
    });
  });
}

// --- LÓGICA DO FORMULÁRIO (FORMSPREE) ---
const contactForm = document.querySelector('#contact-form');
const formFeedback = document.querySelector('#form-feedback');

if (contactForm && formFeedback) {
  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // Impede o redirecionamento da página

    const formData = new FormData(contactForm);

    // Feedback visual imediato (Status de carregamento)
    formFeedback.textContent = 'Enviando sua solicitação...';
    formFeedback.style.color = '#C8A04A'; // Cor Dourada da sua marca

    try {
      // Envia os dados para a URL que está no atributo 'action' do seu HTML
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        // SUCESSO
        formFeedback.textContent = 'Enviado. Em breve a equipe LinQ entrará em contato.';
        formFeedback.style.color = '#1F4E5F'; // Azul Petróleo da sua marca
        contactForm.reset(); // Limpa os campos do formulário
      } else {
        // ERRO VINDO DO SERVIDOR
        const data = await response.json();
        if (Object.hasOwn(data, 'errors')) {
          formFeedback.textContent = data['errors'].map(error => error['message']).join(", ");
        } else {
          throw new Error();
        }
      }
    } catch (error) {
      // ERRO DE CONEXÃO OU GERAL
      formFeedback.textContent = 'Oops! Ocorreu um problema ao enviar. Tente novamente mais tarde.';
      formFeedback.style.color = '#B22222'; // Vermelho para erro
    }
  });
}

// --- ATUALIZAÇÃO DO ANO NO FOOTER ---
const yearSpan = document.querySelector('#year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

const cookieBanner = document.getElementById('cookie-banner');
const acceptBtn = document.getElementById('accept-cookies');
const rejectBtn = document.getElementById('reject-cookies');


//COOKIES
// Mostra o banner se o usuário ainda não aceitou
if (!localStorage.getItem('cookies-aceitos')) {
    setTimeout(() => {
        cookieBanner.style.display = 'block';
    }, 2000);
}

// Botão Aceitar
acceptBtn.addEventListener('click', () => {
    localStorage.setItem('cookies-aceitos', 'true');
    cookieBanner.style.display = 'none';
});

// Botão Recusar (apenas fecha sem salvar no navegador)
rejectBtn.addEventListener('click', () => {
    cookieBanner.style.display = 'none';
});