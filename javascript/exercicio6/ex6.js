function ex6(){
 let n1 = Number(document.getElementById("n1").value);
 let n2 = Number(document.getElementById("n2").value);

 let subtotal = n1 * n2;
 let desconto = subtotal*0.10;
 let total = subtotal - desconto;

 document.getElementById("mensagem").innerHTML = "O total é"+ total;
}
