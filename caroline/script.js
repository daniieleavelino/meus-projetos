document.addEventListener("DOMContentLoaded", function () {
  const cookieBanner = document.getElementById("cookie-banner");
  const btnAceitar = document.getElementById("btn-aceitar-cookies");

  if (cookieBanner && btnAceitar) {
    if (!localStorage.getItem("cookiesAceitos")) {
      setTimeout(() => {
        cookieBanner.classList.add("show");
      }, 1000);
    }

    btnAceitar.addEventListener("click", function () {
      localStorage.setItem("cookiesAceitos", "true");
      cookieBanner.classList.remove("show");
    });
  }

  const elementosParaAnimar = document.querySelectorAll(".animar-scroll");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visivel");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    },
  );

  elementosParaAnimar.forEach((elemento) => {
    observer.observe(elemento);
  });

  const track = document.querySelector(".depo-track");
  const viewport = document.querySelector(".depo-viewport");
  const prevBtn = document.querySelector(".depo-prev");
  const nextBtn = document.querySelector(".depo-next");

  if (track && viewport && prevBtn && nextBtn) {
    const extraDepoimentos = [
      {
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
        alt: "Aluno 5",
        text: '"Passei a entender textos jurídicos com muito mais rapidez e segurança."',
        author: "Fernanda, Direito",
      },
      {
        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
        alt: "Aluno 6",
        text: '"As aulas me deram estratégia para a prova e leitura técnica no dia a dia."',
        author: "Carlos, Doutorado",
      },
      {
        image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
        alt: "Aluno 7",
        text: '"Hoje consigo ler papers com autonomia e sem depender de tradução o tempo todo."',
        author: "Camila, Pesquisa",
      },
    ];

    extraDepoimentos.forEach((item) => {
      const exists = track.querySelector(`img[alt="${item.alt}"]`);
      if (exists) return;

      const article = document.createElement("article");
      article.className = "depo-card";
      article.innerHTML = `
        <img src="${item.image}" alt="${item.alt}" class="depo-avatar">
        <div>
          <p class="depo-text">${item.text}</p>
          <p class="depo-author">${item.author}</p>
        </div>
      `;
      track.appendChild(article);
    });

    let cards = Array.from(track.querySelectorAll(".depo-card"));
    let index = 0;

    function getCardStep() {
      if (cards.length === 0) return 0;
      const card = cards[0];
      const gap = parseFloat(window.getComputedStyle(track).gap || "0");
      return card.getBoundingClientRect().width + gap;
    }

    function getMaxIndex() {
      const step = getCardStep();
      if (!step) return 0;
      const totalWidth = track.scrollWidth;
      const visibleWidth = viewport.clientWidth;
      return Math.max(0, Math.ceil((totalWidth - visibleWidth) / step));
    }

    function updateCarousel() {
      cards = Array.from(track.querySelectorAll(".depo-card"));
      const maxIndex = getMaxIndex();
      index = Math.max(0, Math.min(index, maxIndex));
      const offset = getCardStep() * index;
      track.style.transform = `translateX(${-offset}px)`;
      prevBtn.disabled = index === 0;
      nextBtn.disabled = index === maxIndex;
    }

    nextBtn.addEventListener("click", () => {
      index += 1;
      updateCarousel();
    });

    prevBtn.addEventListener("click", () => {
      index -= 1;
      updateCarousel();
    });

    window.addEventListener("resize", () => {
      updateCarousel();
    });

    updateCarousel();
  }
});
