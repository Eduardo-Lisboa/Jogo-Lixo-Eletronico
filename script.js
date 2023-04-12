let questionIndex = 0;
let score = 0;

const questions = [
    {
        text: "Bateria de celular",
        isElectronic: true,
        imageUrl: "img/bateria-celular.png",
    },
    {
        text: "Caneta",
        isElectronic: false,
        imageUrl: "img/caneta.jpg",
    },
    {
        text: "Televisor antigo",
        isElectronic: true,
        imageUrl: "img/televisor.png",
    },
    {
        text: "Folha de papel",
        isElectronic: false,
        imageUrl: "img/folha.jpg",
    },
    {
        text: "Fone de ouvido",
        isElectronic: true,
        imageUrl: "img/fone.png",
    },
    {
        text: "Garrafa pet",
        isElectronic: false,
        imageUrl: "img/garrafa.png",
    },
    {
        text: "Smartphone",
        isElectronic: true,
        imageUrl: "img/smartphone.png",
    },
    {
        text: "Pilha",
        isElectronic: true,
        imageUrl: "img/pilha.png",
    },
    {
        text: "Computador",
        isElectronic: true,
        imageUrl: "img/computador.png",
    },
    {
        text: "Chave de fenda",
        isElectronic: false,
        imageUrl: "img/chave.png",
    },
    {
        text: "Teclado",
        isElectronic: true,
        imageUrl: "img/teclado.jpg",
    },
    {
        text: "Mouse",
        isElectronic: true,
        imageUrl: "img/mouse.png",
    },
    {
        text: "Faca",
        isElectronic: false,
        imageUrl: "img/faca.png",
    },
];

const imageElement = document.getElementById("image");
imageElement.src = "img/positivo.png";

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
    const imageElement = document.getElementById("image");
    imageElement.src = question.imageUrl;
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
