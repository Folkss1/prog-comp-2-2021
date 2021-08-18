function viagem(){
    //entrada de dados
    // pedagio1, pedagio2 e pedagio3 sao variaveis
    // Number() -> converte texto em numero
    let pedagio1 = Number(document.getElementById("pedagio1").value)
    let pedagio2 = Number(document.getElementById("pedagio2").value)
    let combustivel = Number(document.getElementById("combustivel").value)
    // processamento
    let custo = pedagio1 + pedagio2 + combustivel
    alert(`o custo total da viagem é de ${custo}`)
}