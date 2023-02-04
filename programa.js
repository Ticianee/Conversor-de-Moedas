/*variáveis*/
var valorEmDolar = 30;
var cotacaoDoDolar = 5.14;

/*contas*/
var valorEmReal = valorEmDolar * cotacaoDoDolar;
valorEmReal = valorEmReal.toFixed(2);

/*mostra na tela*/
alert('R$ ' + valorEmReal);
