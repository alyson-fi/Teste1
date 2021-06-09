
var subtotal=(13+1)*5;
var frete= 0.5*(13+1); 
var total= subtotal+frete; 

var subResultado=document.getElementById('subtotalvalor'); 
subResultado.textContent= subtotal; 

var freteResultado= document.getElementById('fretevalor'); 
freteResultado=frete; 

var totalResultado=document.getElementById('totalvalor'); 
totalResultado=total; 
