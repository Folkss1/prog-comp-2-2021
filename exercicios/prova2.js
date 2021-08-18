let exercicio2 = () => {
    let vereador = []
    let voto = []
    let total = 0
    let media = 0
    let veremaior = 0
    let zerado = ""
    
    for(let i=0;i<50;i++){
        vereador.push(prompt(`Nome do vereador ${i+1} `))
        voto.push(Number(prompt(`votos na ultima eleicao`)))
        total=total+votos[i] // acumula os votos
        if(votos[i]>maior){ // mostra o maior voto
            maior=votos[i] // atualiza o maior voto
            veremaior=vereador[i] // atualiza o nome do vereador com mais votos
            }
        }
        if(voto[i]%0==0){ // ponto é par
            zerado=zerado+" <br/>"+vereador[i]
        }
    alert(`a media de votos ${(total/50).toFixed(2)} \nO vereador com mais votos ${veremaior} - ${maior} votos\n candidatos com 0 votos ${zerado}`)
}