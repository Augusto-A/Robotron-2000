const controle = document.querySelectorAll("[data-controle]")
const estatisticas = document.querySelectorAll("[data-estatistica]")
console.log(estatisticas)
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        const operacao = evento.target.dataset.controle; // "+" or "-"
        manipulaDados(operacao, evento.target.parentNode);
        atualizaEstatisticas(evento.target.dataset.peca, operacao); // Call it only once, after manipulaDados
    });
});

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector(".controle-contador")

    if (operacao === "-") {
     peca.value = parseInt(peca.value) - 1
    } else {
     peca.value = parseInt(peca.value) + 1
    }
}

function atualizaEstatisticas(peca) {
    estatisticas.forEach( (elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}

function atualizaEstatisticas(peca, operacao) {
    estatisticas.forEach((elemento) => {
        const valorAtual = parseInt(elemento.textContent);
        const valorPeca = pecas[peca][elemento.dataset.estatistica];

        if (operacao === "+") {
            elemento.textContent = valorAtual + valorPeca;
        } else if (operacao === "-") {
            elemento.textContent = valorAtual - valorPeca;
        }
    });
}

const robotImages = ['img/robotron.png', './img/robotron-amarelo/amarelo.png', './img/robotron-azul/azul.png', './img/robotron-branco/branco.png', './img/robotron-preto/preto.png', './img/robotron-rosa/rosa.png', './img/robotron-vermelho/vermelho.png'];
let currentRobotIndex = 0;

function trocarRobo() {
  const robotImageElement = document.getElementById('robotImage');
  currentRobotIndex = (currentRobotIndex + 1) % robotImages.length;
  console.log(currentRobotIndex);
  robotImageElement.src = `${robotImages[currentRobotIndex]}`;
}



