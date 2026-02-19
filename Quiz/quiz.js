/* ============================================
   QUIZ DE AESTHETIC - LÓGICA JAVASCRIPT
   ============================================
   Organização:
   1. Banco de Dados (Estilos e Imagens)
   2. Perguntas e Opções
   3. Variáveis Globais
   4. Funções Principais
   5. Inicialização
   ============================================ */

/* ========== 1. BANCO DE DADOS: ESTILOS AESTHETIC ========== */
/* 
   Objeto que rastreia pontuação de cada aesthetic.
   Cada vez que uma opção relacionada é selecionada,
   o score do estilo é incrementado.
*/
const styles = {
    'korean-aesthetic': 0,      // Estilo K-Beauty minimalista e elegante
    'japandi': 0,               // Fusão de japonês + escandinavo
    'cyberpunk': 0,             // Futurista, neon, high-tech
    'vaporwave': 0,             // Nostálgico dos anos 90/2000, pastéis
    'y2k': 0,                   // Anos 2000, vibrant, divertido
    'dark-aesthetic': 0,        // Escuro, minimalista, sofisticado
    'softgirl': 0,              // Suave, doce, tons pastel
    'grunge': 0,                // Rock alternativo, descontraído
    'indie': 0,                 // Independente, criativo, vintage
    'minimal': 0,               // Minimalista extremo, clean
    'retro': 0,                 // Anos 50-80, vintage clássico
    'gothic': 0,                // Escuro, dramático, romântico
    'kawaii': 0,                // Cute, japonês, colorido
    'cottagecore': 0,           // Rural, natural, aconchegante
    'dark-academia': 0,         // Intelectual escuro, livros, mistério
    'light-academia': 0,        // Intelectual claro, elegante, vintage
    'techwear': 0,              // High-tech, functional, moderno
    'neo-futurismo': 0,         // Futurista moderno, geométrico
    'dramatico-urbano': 0,      // Urbano poderoso, contraste alto
    'fairycore': 0              // Mágico, fantástico, etéreo
};

/* ========== 1B. BANCO DE DADOS: IMAGENS DOS RESULTADOS ========== */
/* 
   Mapping de cada estilo para suas imagens de resultado.
   As imagens ficam na pasta 'images/' dentro de Quiz.
*/
const resultImages = {
    'korean-aesthetic': ['images/korean.webp'],
    'japandi': ['images/japandi.webp'],
    'cyberpunk': ['images/cyberpunk.webp'],
    'vaporwave': ['images/vaporwave.webp'],
    'y2k': ['images/y2k.webp'],
    'dark-aesthetic': ['images/dark-aesthetic.webp'],
    'softgirl': ['images/softgirl.webp'],
    'grunge': ['images/grunge.webp'],
    'indie': ['images/indie.webp'],
    'minimal': ['images/minimal.webp'],
    'retro': ['images/retro.webp'],
    'gothic': ['images/gothic.webp'],
    'kawaii': ['images/kawaii.webp'],
    'cottagecore': ['images/cottagecore.webp'],
    'dark-academia': ['images/dark-academia.webp'],
    'light-academia': ['images/light-academia.webp'],
    'techwear': ['images/techwear.webp'],
    'neo-futurismo': ['images/neo-futurismo.webp'],
    'dramatico-urbano': ['images/urbano.webp'],
    'fairycore': ['images/fairycore.webp']
};

/* ========== 2. BANCO DE DADOS: PERGUNTAS E OPÇÕES ========== */
/* 
   Array contendo as 7 perguntas do quiz.
   Cada pergunta tem um texto e 4 opções.
   Cada opção tem um texto e um array de "weights" 
   (estilos que ganham pontos quando selecionada).
*/
const questions = [
    {
        /* PERGUNTA 1: Paleta de cores */
        text: "Escolha uma paleta de cores que faz seus olhos brilharem:",
        options: [
            {
                text: "Tons pastéis (rosa bebê, lilás, céu)",
                weights: ['softgirl', 'kawaii', 'fairycore', 'light-academia']
            },
            {
                text: "All Black ou tons muito escuros",
                weights: ['dark-aesthetic', 'gothic', 'techwear', 'grunge']
            },
            {
                text: "Neutros e terrosos (bege, creme, marrom)",
                weights: ['minimal', 'japandi', 'korean-aesthetic', 'dark-academia']
            },
            {
                text: "Neon, holográfico ou super vibrante",
                weights: ['cyberpunk', 'y2k', 'vaporwave', 'neo-futurismo']
            }
        ]
    },
    {
        /* PERGUNTA 2: Date/encontro ideal */
        text: "Qual seria seu 'date' ideal num Dorama?",
        options: [
            {
                text: "Piquenique num campo de flores",
                weights: ['cottagecore', 'fairycore', 'softgirl']
            },
            {
                text: "Fugir de moto numa cidade futurista à noite",
                weights: ['cyberpunk', 'techwear', 'dramatico-urbano']
            },
            {
                text: "Café minimalista e galeria de arte",
                weights: ['korean-aesthetic', 'minimal', 'japandi']
            },
            {
                text: "Loja de discos vintage e arcade games",
                weights: ['retro', 'indie', 'y2k', 'vaporwave']
            }
        ]
    },
    {
        /* PERGUNTA 3: Acessório indispensável */
        text: "Escolha um acessório indispensável:",
        options: [
            {
                text: "Fones de ouvido grandes e coloridos",
                weights: ['y2k', 'indie', 'cyberpunk']
            },
            {
                text: "Correntes de prata e coturnos",
                weights: ['grunge', 'gothic', 'dark-aesthetic']
            },
            {
                text: "Um livro antigo e óculos de leitura",
                weights: ['dark-academia', 'light-academia', 'retro']
            },
            {
                text: "Bolsa de grife estruturada",
                weights: ['dramatico-urbano', 'minimal', 'korean-aesthetic']
            }
        ]
    },
    {
        /* PERGUNTA 4: Música playlist */
        text: "Qual música não sai da sua playlist?",
        options: [
            {
                text: "K-Pop 'Girl Crush' (Blackpink, aespa)",
                weights: ['techwear', 'neo-futurismo', 'dramatico-urbano']
            },
            {
                text: "Lo-fi ou Ballads suaves (IU, OSTs)",
                weights: ['cottagecore', 'softgirl', 'japandi']
            },
            {
                text: "Rock Alternativo ou Rap",
                weights: ['grunge', 'indie', 'vaporwave']
            },
            {
                text: "Pop brilhante e divertido (Twice, NewJeans)",
                weights: ['y2k', 'kawaii', 'retro']
            }
        ]
    },
    {
        /* PERGUNTA 5: Maquiagem */
        text: "Como é sua maquiagem dos sonhos?",
        options: [
            {
                text: "Natural, 'glass skin' impecável",
                weights: ['minimal', 'korean-aesthetic', 'light-academia']
            },
            {
                text: "Delineado gráfico e muito glitter",
                weights: ['cyberpunk', 'y2k', 'neo-futurismo']
            },
            {
                text: "Blush bem marcado e lábios gradient",
                weights: ['softgirl', 'kawaii', 'fairycore']
            },
            {
                text: "Olhos esfumados escuros e batom forte",
                weights: ['gothic', 'dark-aesthetic', 'dramatico-urbano']
            }
        ]
    },
    {
        /* PERGUNTA 6: Época/lugar ideal */
        text: "Se você pudesse viver em uma época/lugar...",
        options: [
            {
                text: "Uma biblioteca europeia no séc. XIX",
                weights: ['dark-academia', 'light-academia', 'cottagecore']
            },
            {
                text: "Tóquio ou Seul em 2077",
                weights: ['cyberpunk', 'neo-futurismo', 'techwear']
            },
            {
                text: "Anos 90/2000 com internet discada",
                weights: ['vaporwave', 'y2k', 'grunge']
            },
            {
                text: "Um apartamento clean no centro da cidade hoje",
                weights: ['minimal', 'japandi', 'korean-aesthetic']
            }
        ]
    },
    {
        /* PERGUNTA 7: Palavra que define você */
        text: "Uma palavra que define sua personalidade:",
        options: [
            {
                text: "Misteriosa",
                weights: ['dark-aesthetic', 'gothic', 'techwear']
            },
            {
                text: "Sonhadora",
                weights: ['fairycore', 'cottagecore', 'softgirl']
            },
            {
                text: "Ousada",
                weights: ['dramatico-urbano', 'y2k', 'cyberpunk']
            },
            {
                text: "Elegante",
                weights: ['minimal', 'korean-aesthetic', 'japandi']
            }
        ]
    }
];

/* ========== 3. VARIÁVEIS GLOBAIS DE ESTADO ========== */
/* Rastreia qual pergunta o usuário está respondendo (0 = primeira) */
let currentQuestionIndex = 0;

/* ========== 4. FUNÇÃO: Carregar Pergunta ========== */
/* 
   Preenche a tela de perguntas com:
   - Texto da pergunta
   - Número da pergunta (ex: "3/7")
   - Atualiza barra de progresso
   - Cria botões para cada opção
*/
function loadQuestion() {
    // Pega a pergunta atual do array 'questions'
    const question = questions[currentQuestionIndex];
    
    // Seleciona elementos HTML da página
    const qText = document.getElementById('question-text');
    const qNum = document.getElementById('q-number');
    const container = document.getElementById('options-container');
    const progressBar = document.getElementById('progress-bar');

    // Segurança: se elementos não existem, sai da função
    if (!qText || !container) return;

    // Atualiza o texto da pergunta
    qText.innerText = question.text;
    
    // Atualiza o número (ex: 3 em "Pergunta 3/7")
    qNum.innerText = currentQuestionIndex + 1;
    
    // Calcula porcentagem para a barra de progresso
    progressBar.style.width = `${((currentQuestionIndex) / questions.length) * 100}%`;

    // Limpa as opções antigas
    container.innerHTML = '';
    
    // Cria um botão para cada opção
    question.options.forEach(option => {
        // Cria elemento botão
        const btn = document.createElement('button');
        // Adiciona classes CSS
        btn.className = 'option-btn shadow-sm';
        // Define o texto da opção
        btn.innerText = option.text;
        // Ao clicar, chama selectOption passando os weights
        btn.onclick = () => selectOption(option.weights);
        // Adiciona o botão ao container
        container.appendChild(btn);
    });
}

/* ========== 4B. FUNÇÃO: Selecionar Opção ========== */
/* 
   Chamada quando o usuário clica em uma opção.
   - Incrementa pontos dos estilos relacionados
   - Avança para a próxima pergunta
   - Se foi última pergunta, mostra resultado
*/
function selectOption(weights) {
    // Para cada estilo na array 'weights'
    weights.forEach(style => {
        // Se o estilo existe no objeto 'styles'
        if (styles[style] !== undefined)
            // Incrementa seu score em 1
            styles[style]++;
    });
    
    // Avança para a próxima pergunta
    currentQuestionIndex++;

    // Verifica se ainda há perguntas
    if (currentQuestionIndex < questions.length) {
        // Mostra próxima pergunta
        loadQuestion();
    } else {
        // Se foi a última, mostra o resultado
        showResult();
    }
}

/* ========== 4C. FUNÇÃO: Mostrar Resultado ========== */
/* 
   Chamada ao final do quiz.
   - Encontra o estilo com maior pontuação
   - Exibe resultado final
   - Mostra imagem associada
*/
function showResult() {
    // Encontra o estilo com maior score
    // Compara cada estilo e retorna o com maior valor
    const winner = Object.keys(styles).reduce((a, b) => 
        styles[a] > styles[b] ? a : b
    );
    
    // Esconde a tela de perguntas
    document.getElementById('question-screen').classList.add('d-none');
    
    // Mostra a tela de resultado
    const resultScreen = document.getElementById('result-screen');
    resultScreen.classList.remove('d-none');

    // Formata o nome do estilo (ex: "dark-aesthetic" → "Dark Aesthetic")
    const formattedTitle = winner
        .replace(/-/g, ' ')                    // Remove hífens
        .replace(/\b\w/g, l => l.toUpperCase()); // Capitaliza primeira letra
    
    // Atualiza o título do resultado
    document.getElementById('result-title').innerText = formattedTitle;
    
    // Atualiza a descrição
    document.getElementById('result-desc').innerText = 
        `Sua aura vibra na frequência do estilo ${formattedTitle}!`;

    // URL de imagem padrão (fallback)
    const fallbackImg = "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600";
    
    // Pega a imagem do estilo vencedor
    const estiloInfo = resultImages[winner];
    
    // Define qual imagem usar (customizada ou fallback)
    const imagemFinal = (estiloInfo && estiloInfo[0]) ? estiloInfo[0] : fallbackImg;

    // Atualiza o src da imagem na página
    const imgElement = document.getElementById('res-img-1');
    if (imgElement) imgElement.src = imagemFinal;
}

/* ========== 5. INICIALIZAÇÃO: Quando página carrega ========== */
/* 
   Executa quando a página HTML está totalmente carregada.
   Atribui evento ao botão "Iniciar Teste".
*/
document.addEventListener('DOMContentLoaded', () => {
    // Pega o botão de início
    const btnStart = document.getElementById('btn-start');
    
    // Se o botão existe
    if (btnStart) {
        // Define o que fazer ao clicar
        btnStart.onclick = () => {
            // Esconde a tela de início
            document.getElementById('start-screen').classList.add('d-none');
            
            // Mostra a tela de perguntas
            document.getElementById('question-screen').classList.remove('d-none');
            
            // Carrega a primeira pergunta
            loadQuestion();
        };
    }
});