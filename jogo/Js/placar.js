window.addEventListener('load', () => {
    fetch("/criar_placar", {
        method: "GET",
        cache: "default",
    })
    .then(res => {
        res.json()
            .then(data => {
                dados(data);
            })
    });
})

var dados = (results) => {
    console.log(results)
    const tbody = document.getElementById("tbody")
    let i = 0
    
    for (let result of results) {
        i++

        let tr = document.createElement("tr");
        let tdPos = document.createElement("td");
        let tdNome = document.createElement("td");
        let tdPontos = document.createElement("td");
        
        tdPos.innerText = i;
        tdNome.innerText = result.NOME;
        tdPontos.innerText = result.PONTOS;

        tr.appendChild(tdPos);
        tr.appendChild(tdNome);
        tr.appendChild(tdPontos);

        tbody.appendChild(tr);
    }
}