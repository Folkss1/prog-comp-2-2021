function exercicio0(){
    let soma = 0

    let i = 1

    while (1 <= 10){

        let nota = Number(prompt(`informe a nota`))

        soma = soma + nota

        i++
    }
    let media = soma / 10
    alert(`a media das notas é ${media}`)
}

function exercicio1(){

    let a, b, c, d

    a = Number(prompt(`informe o valor de a`))
    b = Number(prompt(`informe o valor de b`))
    c = Number(prompt(`informe o valor de c`))
    d = Number(prompt(`informe o valor de d`))

    let i = 1
    while (i <= 3){
        if (a>b){
            aux= a
            a = b
            b = aux
        }
        if(b>c){
            aux= b
            b = c
            c = aux
        }
        if(c>d){
            aux= c
            c = d
            d = aux
        }
        i++
    }
    alert(`ordem crescente ${a} ${b} ${c} ${d} e a ordem decrescente ${d} ${c} ${b} ${a}`)
}
function exercicio2(){

    let qtde = 120
    let lucro
    let saida = "" // variavel acumuladora
    let maiorlucro = 0
    let maiorqtde = 0
    let maiorpreco = 0 
    for(let preco = 5.0 ; preco >= 1.0; preco = preco - 0.50){
        
        lucro = (preco * qtde) - 200
        if(lucro > maiorlucro){
            maiorlucro = lucro
            maiorqtde = qtde
            maiorpreco = preco
        }
        saida = saida +  `<tr> <td>${preco.toFixed(2)} <td/> <td> ${qtde} <td/> <td> 200.00 <td/> <td>${lucro.toFixed(2)} <td/> <tr/>`
        // prepara para a proxima vez
        qtde = qtde + 26
    }
    document.getElementById("corpo").innerHTML = saida
    alert(`mairo lucro ${maiorlucro} com qtde ${maiorqtde} com preco ${maiorqtde}`)
}
function exercicio3(){
    let  i = 1
    let f1 = 0 
    let f2 = 0
    let f3 = 0
    let f4 = 0 
    let f5 = 0
    while (i <=8 ){
        let idade = Number(prompt(`informe a idade ${i}`))
        if (idade <=15 ){
            f1++
        }
        else if ((idade > 15) && (idade <= 30)){
            f2++
        }
        else if ((idade > 30) && (idade <= 45)){
            f3++
        }
        else if ((idade > 45) && (idade <= 60)){
            f4++
        }
        else{
            f5++
        }
        i++
    }
    alert(`faixa 1 ${f1} faixa 2 ${f2} faixa 3 ${f3} faixa 4 ${f4} faixa 5 ${f5} % f1 ${f1/8*100} %f5 ${f5/8*100}`)
}
function exercicio6(){
    
    let valor
    let tipo
    let totalprazo = 0 
    let totalvista = 0
    for(let i=1;i<=15;i++){
        valor = Number(prompt(`informe o valor da transaçao ${i}`))
        tipo = prompt(`informe o tipo (V para valor a vista e P para valora a prazo) da tranzaçao `).toUpperCase()
        if (tipo == 'V'){
            totalvista = totalvista + valor
        }
        else if (tipo == 'P'){
            totalprazo = totalprazo + valor
        }
    }
    
    let totalgeral = totalprazo + totalvista
    let parcel = totalprazo / 3

    alert(`total a vista ${totalvista} - total a prazo ${totalprazo} - total geral ${totalgeral} - 1a. parcela a prazo ${parcela}`)
}
let exercicio23= function(){

    do{
        opcao =Number (prompt(`digite  \n 1. novo salario  \n 2. ferias  \n 3. decimo terceiro  \n 4. sair`))
        switch(opcao){
            case 1 : salario = Number(prompt(`informe o salario`))
                    if (salario < 2100){
                        alert(`novo salario ${salario + salario*15/100}`)
                    }
                    else if ((salario > 2100) && (salario <= 6000)){
                        alert(`novo salario ${salario + salario*10/100}`)
                    }
                    else {
                        alert(`novo salario ${slario + salario*5/100}`)
                    }
                    break
            case 2 : salario = Number(prompt(`informe o salario`))
                    alert (`o valor das ferias é ${salario + 1/3*salrio}`)
                    break
            case 3 : salario = Number(prompt(`informe o salario`))
                     let meses = Number(prompt(`informe numero de meses trabalhados`))
                     alert(`decimo terceiro a receber ${salario * meses/12}`)                       
                    break
            case 4 : alert(`o programa sera encerrado. `)
                    break
            default : alert(`opcao invalida. tente novamente !!!`)                                
        }
    }

    while (opcao !=4)
}
let exercicio10 = () => {
    let vendas = [] // total de vendas de cada vendedor
    let percentuais = [] // percentual de comissão de cada vendedor
    let nomes = [] // nome de cada vendedor

    // entrada de dados
    for(let i=0;i<3;i++){
        nomes.push(prompt(`Informe o nome do vendedor ${i+1}`))
        vendas.push(Number(prompt(`Informe o total de vendas do vendedor ${i+1}`)))
        percentuais.push(Number(prompt(`Informe o percentual de comissão de vendas do vendedor ${i+1}`)))
    }

    // processamento
    let comissoes = [] // valor a receber de comissão
    let totalVendas = 0 // total vendido pelos vendedores
    let maiorComissao = 0 // inicia com o primeiro vendedor
    let nomeMaiorComissao = "" // inicia com vazio
    let menorComissao = 100000 // inicia com o número bem grande
    let nomeMenorComissao = "" // inicia com vazio
    
    for(let i=0;i<3;i++){
       comissoes[i] = (vendas[i] * percentuais[i])/100
       if (comissoes[i] > maiorComissao){ // verifica se a comissão é maior que a maior comissão
           maiorComissao = comissoes[i]
           nomeMaiorComissao = nomes[i]
       }
       if (comissoes[i] < menorComissao){ // verifica se a comissão é menor que a menor comissão
            menorComissao = comissoes[i]
            nomeMenorComissao = nomes[i]
        }
       totalVendas = totalVendas + vendas[i] // acumula o total de vendas
    }
    // apresenta os resultados no console do navegador
    console.log(`Total de vendas ${totalVendas}`)
    console.log(`Comissões a receber ${comissoes}`)
    console.log(`Maior comissão ${maiorComissao} do vendedor ${nomeMaiorComissao}`)
    console.log(`Menor comissão ${menorComissao} do vendedor ${nomeMenorComissao}`)
}