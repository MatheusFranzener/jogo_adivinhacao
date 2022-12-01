
function pegarNome() {
    let nome = document.getElementById("inputNome").value;

    if (nome == "") {
        alert("Informe seu nome!");
    } else {
        localStorage.setItem('nome', nome);
        var nomeLs = localStorage.getItem('nome')
        let pontos = 0
        fetch("/criar_pessoa",
            {
                method: "POST",
                body: JSON.stringify({ nomeLs, pontos }),
                headers: { "Content-Type": "application/json" }
            },
        )
            .then(res => { });
        window.location.href = "/jogo";
    }
}