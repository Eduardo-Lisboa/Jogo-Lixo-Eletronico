let questionIndex = 0;
let score = 0;

const questions = [
    {
        text: "Bateria de celular",
        isElectronic: true,
    },
    {
        text: "Caneta",
        isElectronic: false,
    },
    {
        text: "Televisor antigo",
        isElectronic: true,
    },
    {
        text: "Folha de papel",
        isElectronic: false,
    },
    {
        text: "Fone de ouvido",
        isElectronic: true,
    },
    {
        text: "Garrafa pet",
        isElectronic: false,
    },
    {
        text: "Smartphone",
        isElectronic: true,
    },
    {
        text: "Pilha",
        isElectronic: true,
    },
    {
        text: "Computador",
        isElectronic: true,
    },
    {
        text: "Chave de fenda",
        isElectronic: false,
    },
    {
        text: "Teclado",
        isElectronic: true,
    },
    {
        text: "Mouse",
        isElectronic: true,
    },
    {
        text: "Faca",
        isElectronic: false,
    },
];

document.getElementById("start").addEventListener("click", function () {
    document.getElementById("start").style.display = "none";
    showQuestion();
    showButton();
});

function showButton() {
    document.getElementById("yes").innerHTML = "SIM";
    document.getElementById("no").innerHTML = "NÃO";
}

function showQuestion() {
    const question = questions[questionIndex];
    document.getElementById("question").innerHTML = question.text;
}

function updateScore() {
    document.getElementById("score").innerHTML = "Pontuação: " + score;
}

document.getElementById("yes").addEventListener("click", function () {
    const question = questions[questionIndex];
    if (question.isElectronic) {
        score++;
    }
    questionIndex++;
    if (questionIndex >= questions.length) {
        alert("Fim do jogo! Sua pontuação final é " + score);
    } else {
        showQuestion();
        updateScore();
    }
});

document.getElementById("no").addEventListener("click", function () {
    const question = questions[questionIndex];
    if (!question.isElectronic) {
        score++;
    }
    questionIndex++;
    if (questionIndex >= questions.length) {
        alert("Fim do jogo! Sua pontuação final é " + score);
    } else {
        showQuestion();
        updateScore();
    }
});
