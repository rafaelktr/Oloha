function verificarResposta(resposta) {
    const respostaCorreta = 'B'; // A resposta correta é a opção B

    if (resposta === respostaCorreta) {
        document.getElementById('feedback').innerText = "Resposta correta! Parabéns!";
    } else {
        document.getElementById('feedback').innerText = "Resposta errada. Tente novamente!";
    }
}