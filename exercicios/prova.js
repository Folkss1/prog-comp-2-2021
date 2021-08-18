let exercicio1 = () =>{
    
let pref = 1 // guardas os votos
let preffut = 0
let prefbasq = 0
let prefvolei = 0
let prefatle = 0
let prefnata = 0

    while (pref != 0){ // entrada de dados
        pref = Number(prompt(`1. preferencia futebol. \n2. preferencia basquete. \n3. preferencia volei. \n4. preferencia atletismo. \n5. preferencia natacao.\n Informe a opcao desejada \n\n Digite 0 para finalizar`))
        switch(pref){ // processo dos votos 
            case 1:
                preffut++
                break
            case 2:
                prefbasq++
                break   
            case 3:
                prefvolei++
                break
            case 4:
                prefatle++
                break
            case 5:
                prefnata++
                break
            default:
                if(pref != 0){
                    alert(`numero invalido. Digite outra opcao.`)
                }else(
                    alert(`perguntas encerradas`)
                )
        }
    }
    // total de votos que cada um recebeu
    alert(`futebol : ${preffut}\n basquete : ${prefbasq}\n volei : ${prefvolei}\n atletismo : ${prefatle}\n natacao : ${prefnata}\n`)

    total = preffut + prefbasq + prefatle + prefnata + prefvolei
    // porcentagem de basquete
    alert(`A porcentagem de votos do basquete ${(prefbasq/total )*100}% `)
    let i = 1 
    let aux // votos do mais votado para o menos votado
    while (i <= 5) {
        if (preffut < prefbasq) { 
            aux = preffut
            preffut = prefbasq
            prefbasq = aux
        }
        if (prefbasq < prefvolei) { 
            aux = prefbasq
            prefbasq = prefvolei
            prefvolei = aux
        }
        if (prefvolei < prefatle) { 
            aux = prefvolei
            prefvolei = prefatle
            prefatle = aux
        }
        if (prefatle < prefnata) { 
            aux = prefatle
            prefatle = prefnata
            prefnata = aux
        }

        i++
    }
    alert(` em ordem de votos futebol ${preffut} basquete ${prefbasq} volei ${prefvolei} atletismo ${prefatle} natacao ${prefnata}`)

total = preffut + prefbasq + prefatle + prefnata + prefvolei

}
         
