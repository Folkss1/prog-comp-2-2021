function organizar(){
    let compra = Number(document.getElementById("compra").value)
    let compra2 = Number(document.getElementById("compra2").value)
    let compra3 = Number(document.getElementById("compra3").value)
    let custo = compra + compra2 + compra3
    alert(`O valor dos produtos são ${custo}`)
}