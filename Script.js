function verificarResposta(resposta) {
    const respostaCorreta = 'B'; // A resposta correta é a opção B

    if (resposta === respostaCorreta) {
        document.getElementById('feedback').innerText = "Resposta correta! Parabéns!";
    } else {
        document.getElementById('feedback').innerText = "Resposta errada. Tente novamente!";
    }
}
let perguntaAtual = 0;
const perguntas = [
    { pergunta: "O que é IA?", respostaCorreta: "B", respostas: ["A) Robô", "B) Sistema que simula inteligência humana", "C) Computador quântico"] },
    { pergunta: "Quem é o pai da IA?", respostaCorreta: "A", respostas: ["A) Alan Turing", "B) Bill Gates", "C) Steve Jobs"] },
    // Adicione mais perguntas aqui
];

function mostrarPergunta() {
    const pergunta = perguntas[perguntaAtual];
    document.querySelector('h2').textContent = pergunta.pergunta;
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
        setTimeout(mostrarPergunta, 1000); // Mostra a próxima pergunta após 1 segundo
    } else {
        document.getElementById('feedback').innerText = "Quiz terminado!";
    }
}

mostrarPergunta();  // Chama a primeira pergunta