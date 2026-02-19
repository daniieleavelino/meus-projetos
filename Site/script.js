// ==================================================
// LEGENDAS E ORGANIZAÇÃO (Site/script.js)
// - Banco de dados: `database` com objetos de estilo
// - Router SPA: função `router` para alternar seções
// - Renderização: `init()` monta cards de estilos e inspirações
// - Event listeners e helpers: controle de menu e busca
// Observação: adicionei apenas comentários organizacionais, sem alterar lógica.
// ==================================================
// ==================== BANCO DE DADOS DE ESTILOS ====================
// Array contendo 20 estilos aesthetic com suas características e inspirações de doramas
const database = [
    {
        id: "korean-aesthetic",
        style: "Korean Aesthetic",
        desc: "O equilíbrio perfeito entre o minimalismo moderno e a sofisticação de Seoul. Uma estética polida e atemporal.",
        pieces: ["Blazer Oversized", "Tênis Plataforma", "Bolsa Baguete"],
        img: "imagens-estilos/korean.webp",
        dorama: { char: "Hong Cha-young", title: "Vincenzo", dimg: "imagens-inspiracoes/korean.webp" }
    },
    {
        id: "japandi",
        style: "Japandi",
        desc: "A fusão serena do minimalismo japonês com a funcionalidade escandinava. Tons terrosos e orgânicos.",
        pieces: ["Linho Rústico", "Sandálias de Tiras", "Tons de Areia"],
        img: "imagens-estilos/japandi.webp",
        dorama: { char: "Yoo Na-bi", title: "Nevertheless", dimg: "imagens-inspiracoes/japandi.webp" }
    },
    {
        id: "cyberpunk",
        style: "Cyberpunk",
        desc: "Um visual futurista distópico. Pense em luzes neon, tecidos tecnológicos e uma vibe high-tech.",
        pieces: ["Jaqueta neon", "Calça cargo", "Óculos LED"],
        img: "imagens-estilos/cyberpunk.webp",
        dorama: { char: "Gang Seo-hae", title: "Sisyphus: The Myth", dimg: "imagens-inspiracoes/cyberpunk.webp" }
    },
    {
        id: "vaporwave",
        style: "Vaporwave",
        desc: "Nostalgia digital dos anos 90. Glitch art, estátuas gregas e tons de rosa e ciano neon.",
        pieces: ["Camisa Estampada", "Óculos Retrô", "Cores Pastel Neon"],
        img: "imagens-estilos/vaporwave.webp",
        dorama: { char: "Baek Yi-jin", title: "Twenty-Five Twenty-One", dimg: "imagens-inspiracoes/vaporwave.webp" }
    },
    {
        id: "dark-aesthetic",
        style: "Dark Aesthetic",
        desc: "Elegância sombria e gótica moderna. Rendas pretas e silhuetas dramáticas com mistério.",
        pieces: ["Sobretudo Preto", "Coturnos", "Correntes Prateadas"],
        img: "imagens-estilos/dark-aesthetic.webp",
        dorama: { char: "Ko Mun-yeong", title: "It's Okay to Not Be Okay", dimg: "imagens-inspiracoes/dark-aesthetic.webp" }
    },
    {
        id: "y2k",
        style: "Y2K",
        desc: "O otimismo vibrante dos anos 2000. Brilhos, cinturas baixas e estéticas futuristas retrô.",
        pieces: ["Top Borboleta", "Saia Plissada", "Bolsa Baguette"],
        img: "imagens-estilos/y2k.webp",
        dorama: { char: "Na Hee-do", title: "Twenty-Five Twenty-One", dimg: "imagens-inspiracoes/y2k.webp" }
    },
    
    {
        id: "softgirl",
        style: "Soft Girl",
        desc: "A estética da delicadeza extrema. Tons pastéis e acessórios que transmitem doçura.",
        pieces: ["Cardigan lilás", "Presilhas de pérola", "Meias Brancas"],
        img: "imagens-estilos/softgirl.webp",
        dorama: { char: "Im Ju-kyung", title: "True Beauty", dimg: "imagens-inspiracoes/softgirl.webp" }
    },
    {
        id: "grunge",
        style: "Grunge",
        desc: "Rebeldia urbana e conforto desleixado. Camisas de flanela e atitude punk moderna.",
        pieces: ["Camisa Xadrez", "Calça Rasgada", "Tênis surrado"],
        img: "imagens-estilos/grunge.webp",
        dorama: { char: "Jo Yi-seo", title: "Itaewon Class", dimg: "imagens-inspiracoes/grunge.webp" }
    },
    {
        id: "indie",
        style: "Indie",
        desc: "Individualidade e cores retrô. Uma mistura vibrante de vintage com atitude moderna.",
        pieces: ["Bucket Hat", "Calça Patchwork", "Óculos Coloridos"],
        img: "imagens-estilos/indie.webp",
        dorama: { char: "Kim Mi-so", title: "Secretary Kim", dimg: "imagens-inspiracoes/indie.webp" }
    },
    {
        id: "minimal",
        style: "Minimal",
        desc: "O luxo silencioso. Cortes impecáveis e tons neutros que provam que menos é mais.",
        pieces: ["Alfaiataria", "Cores Neutras", "Camisa Branca"],
        img: "imagens-estilos/minimal.webp",
        dorama: { char: "Yoon Hye-jin", title: "Hometown Cha-Cha-Cha", dimg: "imagens-inspiracoes/minimal.webp" }
    },
    {
        id: "retro",
        style: "Retro",
        desc: "Nostalgia charmosa das décadas passadas. Cores quentes e cortes clássicos de Seoul.",
        pieces: ["Pólo Vintage", "Saia Midi", "Lenços"],
        img: "imagens-estilos/retro.webp",
        dorama: { char: "Sung Deok-mi", title: "Her Private Life", dimg: "imagens-inspiracoes/retro.webp" }
    },
    {
        id: "gothic",
        style: "Gothic",
        desc: "Elegância sombria. Rendas pretas e silhuetas dramáticas para uma alma misteriosa.",
        pieces: ["Corset", "Rendas", "Plataformas"],
        img: "imagens-estilos/gothic.webp",
        dorama: { char: "Ko Mun-yeong", title: "It's Okay", dimg: "imagens-inspiracoes/gothic.webp" }
    },
    {
        id: "kawaii",
        style: "Kawaii",
        desc: "Fofura em cada detalhe. Personagens, cores vibrantes e alegria no visual.",
        pieces: ["Suéter Animado", "Meias 7/8", "Acessórios de Pelúcia"],
        img: "imagens-estilos/kawaii.webp",
        dorama: { char: "Kim Bok-joo", title: "Weightlifting Fairy", dimg: "imagens-inspiracoes/kawaii.webp" }
    },
    {
        id: "cottagecore",
        style: "Cottagecore",
        desc: "Vida simples e camponesa. Estampas florais e tecidos naturais para almas românticas.",
        pieces: ["Vestido Floral", "Cesta de Vime", "Chapéu de Palha"],
        img: "imagens-estilos/cottagecore.webp",
        dorama: { char: "Dong-baek", title: "Camellia Blooms", dimg: "imagens-inspiracoes/cottagecore.webp" }
    },
    {
        id: "dark-academia",
        style: "Dark Academia",
        desc: "Intelectualismo clássico. Marrons e xadrez inspirados em bibliotecas antigas.",
        pieces: ["Blazer de Lã", "Mocassim", "Saia Xadrez"],
        img: "imagens-estilos/dark-academia.webp",
        dorama: { char: "Kang Ye-seo", title: "Sky Castle", dimg: "imagens-inspiracoes/dark-academia.webp" }
    },
    {
        id: "light-academia",
        style: "Light Academia",
        desc: "O lado ensolarado do estudo. Foco em museus e artes clássicas com cores claras.",
        pieces: ["Suéter Tricô", "Saia Bege", "Boina"],
        img: "imagens-estilos/light-academia.webp",
        dorama: { char: "Ji-eun", title: "Full House", dimg: "imagens-inspiracoes/light-academia.webp" }
    },
    {
        id: "techwear",
        style: "Techwear",
        desc: "Funcionalidade urbana extrema. Roupas projetadas para durar em qualquer cenário.",
        pieces: ["Colete Utilitário", "Cintos Táticos", "Máscara"],
        img: "imagens-estilos/techwear.webp",
        dorama: { char: "Seo Ah-ri", title: "Celebrity", dimg: "imagens-inspiracoes/techwear.webp" }
    },
    {
        id: "neo-futurismo",
        style: "Neo-futurismo",
        desc: "Linhas arrojadas e materiais inovadores. A moda que antecipa o amanhã de Seoul.",
        pieces: ["Prateado", "Metálico", "Botas Transparentes"],
        img: "imagens-estilos/neo-futurismo.webp",
        dorama: { char: "Seo Ah-ri", title: "Celebrity", dimg: "imagens-inspiracoes/neo-futurismo.webp" }
    },
    {
        id: "dramatico-urbano",
        style: "Dramático Urbano",
        desc: "A força da mulher de negócios. Ombreiras marcadas e presença marcante.",
        pieces: ["Terno Estruturado", "Scarpin", "Joias de Ouro"],
        img: "imagens-estilos/dramatico-urbano.webp",
        dorama: { char: "Cheon Seo-jin", title: "The Penthouse", dimg: "imagens-inspiracoes/dramatico-urbano.webp" }
    },
    {
        id: "fairycore",
        style: "Fairycore",
        desc: "Magia traduzida em moda. Tecidos translúcidos e tons de florestas encantadas.",
        pieces: ["Corselete", "Saia Tule", "Flores"],
        img: "imagens-estilos/fairycore.webp",
        dorama: { char: "Jin Seon-mi", title: "Korean Odyssey", dimg: "imagens-inspiracoes/fairycore.webp" }
    },
    
];

// ==================== SISTEMA DE ROTEAMENTO SPA ====================
// Função para trocar entre seções da página sem recarregar
function router(sectionId) {
    // Esconder todas as secções
    document.querySelectorAll('.page-section').forEach(s => s.classList.add('d-none'));
    
    // Mostrar secção selecionada
    const target = document.getElementById(sectionId);
    if(target) target.classList.remove('d-none');
    
    // Fechar Menu Mobile automaticamente
    const menu = document.getElementById('navbarNav');
    if(menu && menu.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(menu) || new bootstrap.Collapse(menu);
        bsCollapse.hide();
    }
    
    window.scrollTo(0, 0);
}

// ==================== INTERAÇÕES DO MENU ====================
// Fechar menu ao clicar fora
document.addEventListener('click', function (event) {
    const menu = document.getElementById('navbarNav');
    const toggler = document.querySelector('.navbar-toggler');
    if (menu && menu.classList.contains('show') && !menu.contains(event.target) && !toggler.contains(event.target)) {
        const bsCollapse = bootstrap.Collapse.getInstance(menu) || new bootstrap.Collapse(menu);
        bsCollapse.hide();
    }
});

// ==================== RENDERIZAÇÃO DOS CARDS ====================
// Função para inicializar e renderizar todos os cards de estilos e inspirações
function init() {
    const styleCont = document.getElementById('styles-container');
    const inspoCont = document.getElementById('inspirations-container');
    
    if(!styleCont || !inspoCont) return;

    const colors = ['#FFB7B2', '#C7B8EA', '#B2F2BB', '#D0EBFF', '#FFF3BF'];

    database.forEach((item, index) => {
        const borderCol = colors[index % colors.length];

        // Cards de Estilo (Página Inicial)
        styleCont.innerHTML += `
            <div class="col-md-6 col-lg-4 mb-5 d-flex">
                <div class="style-card w-100 shadow-sm border-0 d-flex flex-column">
                    <img src="${item.img}" class="card-img-top" alt="${item.style}">
                    <div class="p-4 flex-grow-1 d-flex flex-column">
                        <span class="badge rounded-pill mb-2 align-self-start" style="background-color: ${borderCol}; color: #333">${item.style}</span>
                        <h4 class="fw-bold text-purple">${item.style}</h4>
                        <p class="small text-muted mb-3 flex-grow-1">${item.desc}</p>
                        <div class="mb-3">
                            <small class="fw-bold d-block text-uppercase text-secondary" style="font-size: 0.65rem;">Peças-chave:</small>
                            <span class="text-secondary small">${item.pieces.join(' • ')}</span>
                        </div>
                        <button onclick="goToInspo('${item.id}')" class="btn btn-outline-dark btn-sm rounded-pill w-100 mt-auto">
                            Ver Inspiração <i class="bi bi-heart-fill ms-1 text-pink"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;

        // Cards de Inspiração (Página Inspirações)
        inspoCont.innerHTML += `
            <div class="col-md-6 col-lg-3 mb-4 d-flex" id="insp-page-${item.id}">
                <div class="inspo-card-v2 bg-white rounded-4 shadow-sm overflow-hidden w-100 d-flex flex-column">
                    <div class="p-2 text-center bg-light fw-bold text-purple x-small text-uppercase">${item.style}</div>
                    <div class="overflow-hidden" style="height: 320px;">
                        <img src="${item.dorama.dimg}" class="w-100 h-100 object-fit-cover transition-img" alt="${item.dorama.char}">
                    </div>
                    <div class="p-3 text-center mt-auto">
                        <h6 class="fw-bold mb-0 text-dark">${item.dorama.char}</h6>
                        <p class="x-small text-muted mb-0">${item.dorama.title}</p>
                    </div>
                </div>
            </div>
        `;
    });
}

// ==================== NAVEGAÇÃO INTERNA ====================
// Função para navegar de um estilo para sua inspiração correspondente
function goToInspo(id) {
    router('inspiracoes');
    setTimeout(() => {
        const target = document.getElementById(`insp-page-${id}`);
        if(target) {
            target.scrollIntoView({behavior: 'smooth', block: 'center'});
            target.classList.add('highlight-pulse');
            setTimeout(() => target.classList.remove('highlight-pulse'), 3000);
        }
    }, 500);
}

// ==================== FUNCIONALIDADE DE BUSCA ====================
// Busca em tempo real na página de inspirações
const searchInput = document.getElementById('searchInspo');
if(searchInput) {
    searchInput.addEventListener('keyup', function(e) {
        const val = e.target.value.toLowerCase();
        document.querySelectorAll('#inspirations-container > div').forEach(card => {
            const txt = card.textContent.toLowerCase();
            card.style.display = txt.includes(val) ? 'flex' : 'none';
        });
    });
}

// ==================== INICIALIZAÇÃO DA APLICAÇÃO ====================
// Executar quando a página carregar completamente
window.onload = init;

// Lógica para detetar se o utilizador veio do Quiz com um estilo selecionado
window.addEventListener('DOMContentLoaded', () => {
    // Verifica se existe o parâmetro "?estilo=" na URL
    const urlParams = new URLSearchParams(window.location.search);
    const estiloId = urlParams.get('estilo');

    if (estiloId) {
        // Aguarda um pequeno momento para o site carregar os cards antes de scrollar
        setTimeout(() => {
            // Reutiliza a sua função existente para navegar e dar o efeito de destaque
            if (typeof goToInspo === 'function') {
                goToInspo(estiloId);
            }
        }, 500);
    }
});

// Lógica para capturar o resultado do Quiz e navegar automaticamente
window.addEventListener('load', () => {
    const params = new URLSearchParams(window.location.search);
    const estiloDesejado = params.get('estilo');

    if (estiloDesejado) {
        console.log("Estilo recebido do quiz:", estiloDesejado);
        
        // Damos um tempo para o banco de dados e o DOM carregarem
        setTimeout(() => {
            // Chamamos a sua função de navegação que já existe!
            if (typeof goToInspo === 'function') {
                goToInspo(estiloDesejado);
            }
        }, 800); 
    }
});