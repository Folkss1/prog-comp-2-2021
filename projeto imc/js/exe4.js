function mp(){
    // entrada de dados
    //sintaxe para declarar variavel em js
    // let nome_variavel
    //coverter texto para numero - funçao number()
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)

    // processamento
    let media = ((nota1 * 2) + (nota2 * 3)) / (2 + 3)

    //saida
    // innerhtml permite colocar conteudo dentro do elemento
    // se a funçao é chamada por uma variavel, o nome começa com minusculo
    document.getElementById("resultado").innerHTML = media.toFixed(2)
}