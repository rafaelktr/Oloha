let perguntaAtual = 0;
const perguntas = [
    { 
        pergunta: "O que é Inteligência Artificial?", 
        respostaCorreta: "B", 
        respostas: ["A) Um tipo de robô", "B) Um sistema que simula inteligência humana", "C) Algo relacionado a computadores quânticos"] 
    },
    { 
        pergunta: "Quem é o pai da Inteligência Artificial?", 
        respostaCorreta: "A", 
        respostas: ["A) Alan Turing", "B) Bill Gates", "C) Steve Jobs"] 
    },
    // Adicione mais perguntas se desejar
];

const perguntasContainer = document.querySelector('.quiz');
const feedbackElement = document.getElementById('feedback');

function mostrarPergunta() {
    perguntasContainer.innerHTML = ''; // Limpa as perguntas anteriores

    const pergunta = perguntas[perguntaAtual];
    const section = document.createElement('section');
    section.innerHTML = `
        <h2>${pergunta.pergunta}</h2>
        ${pergunta.respostas.map((resposta, index) => `
            <button onclick="verificarResposta('${index}')">${resposta}</button>
        `).join('')}
    `;
    perguntasContainer.appendChild(section);
}
function verificarResposta(resposta) {
    const pergunta = perguntas[perguntaAtual];
    
    if (resposta === pergunta.respostaCorreta) {
        document.getElementById('feedback').innerText = "Resposta correta! Parabéns!";
    } else {
        document.getElementById('feedback').innerText = "Resposta errada. Tente novamente!";
    }

    perguntaAtual++;
    if (perguntaAtual < perguntas.length) {
        setTimeout(mostrarPergunta, 1000); // Exibe a próxima pergunta após 1 segundo
    } else {
        document.getElementById('feedback').innerText = "Quiz terminado! Parabéns por jogar!";
    }
}

mostrarPergunta();  // Inicia o quiz com a primeira pergunta
a