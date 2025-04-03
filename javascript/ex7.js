function ex7(){
    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);
    let n3 = Number(document.getElementById("n3").value);
   
    media = (n1+n2+n3)/3 
   
    document.getElementById("mensagem").innerHTML = "A media é"+ media.toFixed(2);
}