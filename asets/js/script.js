const bill = document.getElementById('bill').value;
var amount = document.getElementById('amount');
var people = document.getElementById("people");
const numeros = document.querySelectorAll('[id*=tecla]');

let porcentagem;
let valorP;

console.log(bill);
const operacaoPendente = () => valorP !== undefined;/*verifica se a porcentagem é diferente  de undefined */
















const gorjeta = () => {

}

const selecionarPercentagem=(evento) => {

    valorP = evento.target.textContent;/*grava qual operador foi utilizado */
 
}
numeros.forEach(valorP => valorP.addEventListener('click',event => {
  console.log(event.target);

  if (valorP === tecla5) {
    porcentagem = bill;
   
  } else if (valorP === tecla10) {
    porcentagem = 10;
  }else if (valorP === tecla15) {
    porcentagem = 15;
  }else if (valorP === tecla25) {
    porcentagem = 25;
  }else if (valorP === tecla50) {
    porcentagem = 50;
  }
  console.log(bill);
}));


 /*pega a percentagem)




  switch (porcentagem) {
    case tecla5:

        porcentagem = 5/100 * bill;
       
      break;
    case tecla10:
        porcentagem = 10/100 * bill;
      break;

    case tecla15:
        porcentagem = 15/100 * bill;
      break;

    case tecla25:
        porcentagem = 25/100 * bill;
      break;  

    case tecla50:
        porcentagem = 50/100 * bill;
      break;    
    default:
      return "error"
      break;

 
  }




*/



















const calcular = () => {
  total = bill * gorjeta+people;
  
}
 var totalPesoa = document.getElementById("total").value = total/ people;








function teste() {

  if (total === undefined) {
    total=0;
    document.getElementById("total").innerHTML = total;
  } else if (amount === undefined) {
    amount= 0;
    document.getElementById('amount').innerHTML = amount;
  }
}

function mudarType() {
 document.getElementById ("changed"). type = "number"; 
}


function reset() {
  window.location.reload();
}
document.getElementById('reset').addEventListener('click', reset);
teste();
