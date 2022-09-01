
var amount = document.getElementById('amount').innerHTML = amount;
var total = document.getElementById("total").innerHTML = total;


function calcular() {
  var bill = document.getElementById('bill').value;
  var people = document.getElementById('people').value;
}

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

function resultado() {
  document.getElementById("total").innerHTML = total;
  document.getElementById('amount').innerHTML = amount;
}

function reset() {
  window.location.reload();
}

teste();


console.log(teste());