function calcular()
let nro1 = Number(document.getElementById("nro1").value)
let nro2 = Number(document.getElementById("nro2").value)
let opçao = Number(document.getElementById("opçao").value)
let resultado
if(opçao == 1){
    resultado = (nro1 + nro2) / 2
}
else if (opçao == 2){
    if (nro1 > nro2){
        resultado = nro1 - nro2
    }
    else {
        resultado = nro2 - nro1
    }
}
else if (opçao == 3){
        resultado = nro1 + nro2
}
else if (opçao == 4){
        if (nro2 !=0){
            resultado = nro1 / nro2
        }
        else{
            resultado = 'não pode dividir por zero !!!' 
        }
}
else{
    resultado = " opção invalida"
}
alert('o resultado é $')
    
 