
function pegarNome() {
    let nome = document.getElementById("inputNome").value;
    
    if (nome == "") {
        alert("Informe seu nome!");
    } else {
        localStorage.setItem('nome', nome);
        window.location.href = "/jogo";
    }
}