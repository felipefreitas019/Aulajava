function ex8(){
    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);
   
    imc = n1 / (n2*n2);
   
    document.getElementById("mensagem").innerHTML = "seu imc é"+ imc.toFixed(2);
}