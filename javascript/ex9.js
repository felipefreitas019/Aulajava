function ex9(){
    let valor = Number(document.getElementById("valor").value);
    let taxa = Number(document.getElementById("taxa").value);
    let tempo = Number(document.getElementById("tempo").value);
   
   montante = valor * (1 + (taxa*tempo));
   
    document.getElementById("mensagem").innerHTML = " o montante é"+ montante;
}