let numberRand = 0
let nome = localStorage.getItem('nome')
let pontosTotal
let pontos

window.addEventListener('load', () => {
    document.getElementById('nomeJogador').innerText = localStorage.getItem('nome')
})

function travar() {
    document.getElementById('btnInsano').setAttribute('disabled', 'true')
    document.getElementById('btnDificil').setAttribute('disabled', 'true')
    document.getElementById('btnMedio').setAttribute('disabled', 'true')
    document.getElementById('btnFacil').setAttribute('disabled', 'true')
    document.getElementById('btnNoob').setAttribute('disabled', 'true')
}

function destravar() {
    document.getElementById('btnInsano').removeAttribute('disabled')
    document.getElementById('btnDificil').removeAttribute('disabled')
    document.getElementById('btnMedio').removeAttribute('disabled')
    document.getElementById('btnFacil').removeAttribute('disabled')
    document.getElementById('btnNoob').removeAttribute('disabled')
}

function jogar(dif) {
    pegarPontos()
    let tent = dif

    numberRand = parseInt(Math.random() * 99 + 1)

    document.getElementById('btnAdiv').addEventListener('click', () => {
        tent--
        if (tent >= 0) {
            let valor = document.getElementById('inpNumero')
            let result = document.getElementById('result')
            let dica = document.getElementById('dica')
            pontos = parseInt(1000 / (dif + (dif - tent)))
            pontosTotal += pontos 
            if (valor.value == numberRand) {
                result.innerText = `Você acertou o número!\n${pontos} pontos`
                aumentarPontos(pontosTotal)
                setTimeout(() => {
                    dica.innerText = ""
                    valor.value = ""
                    result.innerText = ""
                    destravar()
                }, 3000)
            } else if (valor.value != numberRand && tent == 0) {
                result.innerText = "Você não acertou!\n0 Pontos"
                setTimeout(() => {
                    window.location.href = "/jogo"
                }, 3000)
            } else if (valor.value < numberRand) {
                dica.innerText = "Dica: o número é maior"
            } else if (valor.value > numberRand) {
                dica.innerText = "Dica: o número é menor"
            }
        }
    })
}

document.getElementById('btnInsano').addEventListener('click', () => {
    travar()
    jogar(1)
})

document.getElementById('btnDificil').addEventListener('click', () => {
    travar()
    jogar(2)
})

document.getElementById('btnMedio').addEventListener('click', () => {
    travar()
    jogar(3)
})

document.getElementById('btnFacil').addEventListener('click', () => {
    travar()
    jogar(4)
})

document.getElementById('btnNoob').addEventListener('click', () => {
    travar()
    jogar(5)
})

function pegarPontos() {
    fetch(`/pegar_pontos/${nome}`,
        {
            method: "GET",
            cache: "default"
        },
    )
        .then(res => {
            res.json()
                .then(data => {
                    pontosTotal = data[0].pontos;
                })
        });
}

function aumentarPontos(pontos) {
    fetch(`/aumentar_pontos/${nome}/${pontosTotal}`, {
        method: "PUT",
        cache: "default"
    })
        .then(res => {
            res.json()
                .then(data => {
                })
        }
        );
}