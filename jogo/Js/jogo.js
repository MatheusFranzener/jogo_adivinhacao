let numberRand = 0

window.addEventListener('load', () => {
    document.getElementById('nomeJogador').innerText = localStorage.getItem('nome')
})

function travar(){
    document.getElementById('btnInsano').setAttribute('disabled', 'true')
    document.getElementById('btnDificil').setAttribute('disabled', 'true')
    document.getElementById('btnMedio').setAttribute('disabled', 'true')
    document.getElementById('btnFacil').setAttribute('disabled', 'true')
    document.getElementById('btnNoob').setAttribute('disabled', 'true')
}

function destravar(){
    document.getElementById('btnInsano').removeAttribute('disabled')
    document.getElementById('btnDificil').removeAttribute('disabled')
    document.getElementById('btnMedio').removeAttribute('disabled')
    document.getElementById('btnFacil').removeAttribute('disabled')
    document.getElementById('btnNoob').removeAttribute('disabled')
}

function jogar(dif){
    let tent = dif

    numberRand = parseInt(Math.random()*99 + 1)
    console.log(numberRand)
    
    document.getElementById('btnAdiv').addEventListener('click', () => {
        if(tent > 0){
            i--;
            let valor = document.getElementById('inpNumero').value
            let pontos = 1000/(dif+(dif-tent))
            if(valor == numberRand){
                alert(`Você acertou o número!\n${pontos} pontos`)
            } else {
                
            }
        } else {
            alert("Você não acertou!\n0 Pontos")
            destravar()
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