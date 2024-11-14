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

function mostrarPergunta() {
    const pergunta = perguntas[perguntaAtual];
    document.getElementById('pergunta').textContent = pergunta.pergunta;
    
    const botoes = document.querySelectorAll('button');
    botoes.forEach((botao, index) => {
        botao.textContent = pergunta.respostas[index];
    });
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

mostrarPergunta();  // Inicia o quiz com a primeira perguntaa