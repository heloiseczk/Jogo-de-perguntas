
const materias = [
    {
        nome: "Matemática",
        emoji: "📐",
        perguntas: [
            {
                pergunta: "Quanto é 8 x 7?",
                opcoes: ["54", "56", "64", "48"],
                correta: 1
            },
            {
                pergunta: "Qual é a raiz quadrada de 81?",
                opcoes: ["7", "8", "9", "10"],
                correta: 2
            },
            {
                pergunta: "Quanto é 150 dividido por 5?",
                opcoes: ["25", "30", "35", "20"],
                correta: 1
            },
            {
                pergunta: "Quanto é 25% de 200?",
                opcoes: ["25", "40", "50", "75"],
                correta: 2
            },
            {
                pergunta: "Qual é o resultado de 12²?",
                opcoes: ["124", "144", "122", "132"],
                correta: 1
            }
        ]
    },

    {
        nome: "Português",
        emoji: "📖",
        perguntas: [
            {
                pergunta: "Qual é o plural de cidadão?",
                opcoes: ["Cidadões", "Cidadães", "Cidadãos", "Cidadãoses"],
                correta: 2
            },
            {
                pergunta: "Qual palavra é um substantivo?",
                opcoes: ["Bonito", "Casa", "Correr", "Rapidamente"],
                correta: 1
            },
            {
                pergunta: "Qual é o antônimo de alegre?",
                opcoes: ["Feliz", "Triste", "Contente", "Animado"],
                correta: 1
            },
            {
                pergunta: "Qual é o sujeito em 'Maria estudou'?",
                opcoes: ["Estudou", "Maria", "Escola", "Nenhum"],
                correta: 1
            },
            {
                pergunta: "Qual palavra está escrita corretamente?",
                opcoes: ["Excessão", "Exceção", "Esceção", "Ecessão"],
                correta: 1
            }
        ]
    },

    {
        nome: "Geografia",
        emoji: "🌎",
        perguntas: [
            {
                pergunta: "Qual é o maior país da América do Sul?",
                opcoes: ["Argentina", "Chile", "Brasil", "Peru"],
                correta: 2
            },
            {
                pergunta: "Qual é a capital do Brasil?",
                opcoes: ["São Paulo", "Brasília", "Rio de Janeiro", "Salvador"],
                correta: 1
            },
            {
                pergunta: "Quantos continentes existem no modelo de seis continentes?",
                opcoes: ["4", "5", "6", "7"],
                correta: 2
            },
            {
                pergunta: "Qual é o maior oceano do planeta?",
                opcoes: ["Atlântico", "Índico", "Ártico", "Pacífico"],
                correta: 3
            },
            {
                pergunta: "Em qual continente fica o Egito?",
                opcoes: ["Ásia", "África", "Europa", "Oceania"],
                correta: 1
            }
        ]
    },

    {
        nome: "Ciências",
        emoji: "🔬",
        perguntas: [
            {
                pergunta: "Qual planeta é conhecido como planeta vermelho?",
                opcoes: ["Vênus", "Marte", "Júpiter", "Saturno"],
                correta: 1
            },
            {
                pergunta: "Qual órgão bombeia o sangue?",
                opcoes: ["Pulmão", "Cérebro", "Coração", "Estômago"],
                correta: 2
            },
            {
                pergunta: "Qual gás as plantas absorvem na fotossíntese?",
                opcoes: ["Oxigênio", "Nitrogênio", "Gás carbônico", "Hidrogênio"],
                correta: 2
            },
            {
                pergunta: "Quantos ossos tem aproximadamente um adulto?",
                opcoes: ["106", "206", "306", "406"],
                correta: 1
            },
            {
                pergunta: "Qual é a estrela mais próxima da Terra?",
                opcoes: ["Sirius", "Sol", "Vega", "Lua"],
                correta: 1
            }
        ]
    },

    {
        nome: "História",
        emoji: "🏛️",
        perguntas: [
            {
                pergunta: "Em que ano ocorreu a Independência do Brasil?",
                opcoes: ["1500", "1822", "1889", "1922"],
                correta: 1
            },
            {
                pergunta: "Quem foi o primeiro presidente do Brasil?",
                opcoes: ["Getúlio Vargas", "Dom Pedro II", "Deodoro da Fonseca", "JK"],
                correta: 2
            },
            {
                pergunta: "Em que ano terminou a Segunda Guerra Mundial?",
                opcoes: ["1939", "1942", "1945", "1950"],
                correta: 2
            },
            {
                pergunta: "Qual civilização construiu as pirâmides de Gizé?",
                opcoes: ["Romanos", "Egípcios", "Gregos", "Maias"],
                correta: 1
            },
            {
                pergunta: "Quem chegou ao Brasil em 1500?",
                opcoes: ["Cristóvão Colombo", "Pedro Álvares Cabral", "Vasco da Gama", "Dom João VI"],
                correta: 1
            }
        ]
    },

    {
        nome: "Inglês",
        emoji: "🇬🇧",
        perguntas: [
            {
                pergunta: "Como se diz 'cachorro' em inglês?",
                opcoes: ["Cat", "Dog", "Bird", "Fish"],
                correta: 1
            },
            {
                pergunta: "O que significa 'Good morning'?",
                opcoes: ["Boa noite", "Boa tarde", "Bom dia", "Até logo"],
                correta: 2
            },
            {
                pergunta: "Como se diz 'livro' em inglês?",
                opcoes: ["Book", "Pen", "Table", "Chair"],
                correta: 0
            },
            {
                pergunta: "Qual é o plural de 'child'?",
                opcoes: ["Childs", "Children", "Childes", "Childrens"],
                correta: 1
            },
            {
                pergunta: "O que significa 'Thank you'?",
                opcoes: ["Por favor", "Desculpe", "Obrigado", "Olá"],
                correta: 2
            }
        ]
    }
];

// ELEMENTOS

const wheel = document.getElementById("wheel");
const spinButton = document.getElementById("spinButton");
const questionArea = document.getElementById("questionArea");
const questionContent = document.getElementById("questionContent");
const answers = document.getElementById("answers");
const feedback = document.getElementById("feedback");
const nextButton = document.getElementById("nextButton");

const scoreDisplay = document.getElementById("score");
const correctDisplay = document.getElementById("correct");
const wrongDisplay = document.getElementById("wrong");
const streakDisplay = document.getElementById("streak");

const timerDisplay = document.getElementById("timer");
const subjectDisplay = document.getElementById("subject");
const wheelMessage = document.getElementById("wheelMessage");

// ESTADO DO JOGO

let pontos = 0;
let acertos = 0;
let erros = 0;
let sequencia = 0;

let materiaAtual = null;
let perguntaAtual = null;

let girando = false;
let respondido = false;
let tempo = 20;
let intervalo = null;

let rotacaoAtual = 0;
let rodadas = 0;
const totalRodadas = 10;

// ATUALIZAR PLACAR

function atualizarPlacar() {
    scoreDisplay.textContent = pontos;
    correctDisplay.textContent = acertos;
    wrongDisplay.textContent = erros;
    streakDisplay.textContent = sequencia;
}

// GIRAR ROLETA

function girarRoleta() {

    if (girando || respondido || rodadas >= totalRodadas) {
        return;
    }

    clearInterval(intervalo);

    girando = true;
    respondido = false;

    spinButton.disabled = true;
    nextButton.disabled = true;

    feedback.textContent = "";
    feedback.className = "feedback";

    answers.innerHTML = "";

    wheelMessage.textContent = "A roleta está girando...";

    questionContent.innerHTML = `
        <div class="question-icon">🎡</div>
        <h2>Preparando seu desafio!</h2>
        <p>Aguarde a roleta parar...</p>
    `;

    // Sorteio da matéria
    const indice = Math.floor(Math.random() * materias.length);

    materiaAtual = materias[indice];

    // Cada setor ocupa 60 graus.
    // O ponteiro fica no topo da roleta.
    const angulo = 30 + indice * 60;

    const destino =
        (360 - angulo + 360) % 360;

    const giroExtra = 360 * 5;

    const giroFinal = giroExtra + destino;

    rotacaoAtual += giroFinal;

    wheel.style.transform = `rotate(${rotacaoAtual}deg)`;

    setTimeout(() => {

        girando = false;

        wheelMessage.textContent =
            `${materiaAtual.emoji} ${materiaAtual.nome} sorteada!`;

        mostrarPergunta();

    }, 5200);
}

// MOSTRAR PERGUNTA

function mostrarPergunta() {

    const perguntas = materiaAtual.perguntas;

    perguntaAtual =
        perguntas[Math.floor(Math.random() * perguntas.length)];

    subjectDisplay.textContent =
        `${materiaAtual.emoji} ${materiaAtual.nome.toUpperCase()}`;

    questionContent.innerHTML = `
        <h2>${perguntaAtual.pergunta}</h2>
        <p>Escolha a alternativa correta!</p>
    `;

    answers.innerHTML = "";

    perguntaAtual.opcoes.forEach((opcao, indice) => {

        const botao = document.createElement("button");

        botao.className = "answer-button";
        botao.textContent =
            `${String.fromCharCode(65 + indice)}. ${opcao}`;

        botao.addEventListener("click", () => {
            verificarResposta(indice, botao);
        });

        answers.appendChild(botao);

    });

    respondido = false;

    tempo = 20;
    timerDisplay.textContent = tempo;

    iniciarCronometro();
}

// CRONÔMETRO

function iniciarCronometro() {

    clearInterval(intervalo);

    intervalo = setInterval(() => {

        tempo--;

        timerDisplay.textContent = tempo;

        if (tempo <= 0) {

            clearInterval(intervalo);

            if (!respondido) {
                verificarResposta(-1, null);
            }

        }

    }, 1000);
}

// VERIFICAR RESPOSTA

function verificarResposta(indice, botaoClicado) {

    if (respondido) return;

    respondido = true;

    clearInterval(intervalo);

    const botoes = answers.querySelectorAll(".answer-button");

    botoes.forEach((botao, i) => {

        botao.disabled = true;

        if (i === perguntaAtual.correta) {
            botao.classList.add("correct");
        }

    });

    if (indice === perguntaAtual.correta) {

        acertos++;
        pontos += 10;
        sequencia++;

        if (sequencia === 3) {
            pontos += 5;
            feedback.textContent =
                "🔥 Três acertos seguidos! Bônus de 5 pontos!";
        } else if (sequencia === 5) {
            pontos += 10;
            feedback.textContent =
                "🏆 Cinco acertos seguidos! Bônus de 10 pontos!";
        } else {
            feedback.textContent =
                "🎉 Resposta correta! Você ganhou 10 pontos!";
        }

        feedback.className = "feedback success";

    } else {

        erros++;
        sequencia = 0;

        if (botaoClicado) {
            botaoClicado.classList.add("wrong");
        }

        if (indice === -1) {
            feedback.textContent =
                `⏰ Tempo esgotado! Resposta: ${perguntaAtual.opcoes[perguntaAtual.correta]}`;
        } else {
            feedback.textContent =
                `❌ Não foi dessa vez! Resposta: ${perguntaAtual.opcoes[perguntaAtual.correta]}`;
        }

        feedback.className = "feedback error";

    }

    atualizarPlacar();

    rodadas++;

    if (rodadas >= totalRodadas) {
        nextButton.textContent = "VER RESULTADO 🏆";
    }

    nextButton.disabled = false;

}

// PRÓXIMA RODADA

function proximaRodada() {

    if (rodadas >= totalRodadas) {
        finalizarJogo();
        return;
    }

    respondido = false;

    feedback.textContent = "";
    answers.innerHTML = "";

    subjectDisplay.textContent = "📚 SUA PERGUNTA";

    questionContent.innerHTML = `
        <div class="question-icon">🤔</div>
        <h2>Preparado para a próxima?</h2>
        <p>Gire a roleta e descubra o próximo desafio!</p>
    `;

    timerDisplay.textContent = "20";

    nextButton.disabled = true;
    nextButton.textContent = "PRÓXIMA RODADA →";

    spinButton.disabled = false;

    wheelMessage.textContent = "Boa sorte no próximo desafio!";

}

// FINALIZAR JOGO

function finalizarJogo() {

    clearInterval(intervalo);

    document.getElementById("finalScore").textContent =
        `${pontos} pontos`;

    document.getElementById("finalCorrect").textContent =
        acertos;

    document.getElementById("finalWrong").textContent =
        erros;

    const modal = document.getElementById("resultModal");

    modal.classList.add("show");

    if (acertos >= 8) {
        document.querySelector(".modal-content h2").textContent =
            "🏆 Você é um campeão!";
    } else if (acertos >= 5) {
        document.querySelector(".modal-content h2").textContent =
            "👏 Muito bem!";
    } else {
        document.querySelector(".modal-content h2").textContent =
            "💪 Continue praticando!";
    }

}

// REINICIAR

function reiniciarJogo() {

    clearInterval(intervalo);

    pontos = 0;
    acertos = 0;
    erros = 0;
    sequencia = 0;
    rodadas = 0;
    tempo = 20;

    respondido = false;
    girando = false;

    materiaAtual = null;
    perguntaAtual = null;

    rotacaoAtual = 0;

    wheel.style.transition = "none";
    wheel.style.transform = "rotate(0deg)";

    // Força o navegador a aplicar a rotação inicial
    void wheel.offsetWidth;

    wheel.style.transition =
        "transform 5s cubic-bezier(.12,.7,.15,1)";

    document.getElementById("resultModal")
        .classList.remove("show");

    questionContent.innerHTML = `
        <div class="question-icon">🤔</div>
        <h2>Preparado para jogar?</h2>
        <p>Clique em girar a roleta para receber uma pergunta surpresa!</p>
    `;

    answers.innerHTML = "";

    feedback.textContent = "";
    feedback.className = "feedback";

    subjectDisplay.textContent = "📚 SUA PERGUNTA";

    timerDisplay.textContent = "20";

    wheelMessage.textContent = "Boa sorte no desafio!";

    nextButton.disabled = true;
    nextButton.textContent = "PRÓXIMA RODADA →";

    spinButton.disabled = false;

    atualizarPlacar();

}

// EVENTOS

spinButton.addEventListener("click", girarRoleta);

nextButton.addEventListener("click", proximaRodada);

document.getElementById("restartButton")
    .addEventListener("click", reiniciarJogo);

atualizarPlacar();
