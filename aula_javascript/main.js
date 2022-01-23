function load(){
  alert("Pagina totalmente carregada")
  }
  function clicado(){
    alert("Obrigado por clicar");
} 
function clicado(){
    document.getElementById("agradecer").innerHTML = "<b>Obrigado por clicar</b>";
}
function redirecionar(){
window.open("https://www.instagram.com/alanproen/");
// ou //
//window.location.href = "https://www.instagram.com/alanproen/"; //
}
function cursorin(mouseover){
    mouseover.innerHTML = "<b>Obrigado por passar o cursor</b>";
}    
function cursorout(mouseover){
    mouseover.innerHTML = "<b>Passe o cursor aqui </b>";
}
function selecionar(elemento){
    console.log(elemento.value)
} 

/* AULA 01 - TRABALHANDO COM VARIAVEIS E CONSOLE
var nome = "Alan Proenca";
var idade = 30;
var frase = "Vikings e a melhor serie do mundo"
var n1 = 2;
var n2 = 4;
alert("Bem vindo " + nome + " Voce possui: " + idade + " anos ");
alert(frase.toUpperCase());
console.log(nome);
console.log(idade);
console.log(frase.replace("Vikings", "Black mirror"));
console.log(n1 ** n2);

AULA 02 - TRABALHANDO COM ARRAY E DICIONARIO
var lista = ["maca","pera","laranja"];
lista.push("uva");
console.log(lista);
 enquanto o .push adiciona, o .pop retira 
 o .reverse inverte a ordem da lista 
 o .toString transforma o array em uma string 

// DICIONARIO //
var frutas = [{nome:"maca", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].cor); //aqui busquei a cor da fruta na posicao 1, lembrando que comecamos a contar pelo zero.

// AULA 03 - CONDICIONAIS, LACOS DE REPETICAO E DATE
var idade = prompt("Qual a sua idade ?");
if (idade >= 18){
    alert("Voce ja e maior de idade !");
}else{
    alert("Voce ainda e menor de idade");
}   
//  LACOS DE REPETICAO  //      WHILE
var count = 0;
while (count < 5){
    console.log(count);
    count++;
}     //FOR
var count;
for(count=0; count <= 5; count++){
alert(count);
} 
//     DATE     
var d = new Date();
alert(d.getMonth()+1);    //necessario colocar +1 pois ele comeca no zero
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
console.log(d); 
// AULA 04 - FUNCOES GLOBAIS E LOCAIS //
 function soma(n1, n2){
    return n1 + n2;
}
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}
alert("A soma dos valores e :" + soma(5,10));
alert(setReplace("Vai Japao", "Japao", "Brasil"));

var validar;   // Aqui o validar e global //
function validaIdade(idade){
if (idade >= 18){
    validar = true
    alert("Voce ja e de maior");
}else{
    validar = false
    alert("Voce ainda e de menor");
}
return validar;
}
var idade = prompt("Qual a sua idade ?");
validaIdade(idade)
console.log(validar);   
// AULA 05 - MANIPULACAO DE ELEMENTOS DA PAGINA //


      DESAFIO 1 
let line = gets().split(" ");

let A = parseInt(line[0]);

let B = parseInt(line[1]);

let total = A + B; // Altere o valor da variavel com o calculo esperado

console.log("X = " + total);
        
        DESAFIO 2
let valor1 = parseInt(gets(0));
let valor2 = parseInt(gets(1));
let total = valor1 * valor2; // Altere o valor da variavel com o calculo esperado 
console.log("PROD = " + total);  

        DESAFIO 3
let number = parseInt(gets(0));
let hours = parseInt(gets(1));
let valueperhour = parseFloat(gets(2));
let salary = parseFloat(hours * valueperhour).toFixed(2);
console.log("NUMBER = " + number);
console.log(" SALARY = U$ " +  salary);

        DESAFIO 4 - Qtd de positivos
        
let quantidadePositivos = 0;
for (let i = 0; i < 6; i++) {
  const valorInformadoPeloUsuario = gets();
  // TODO Incrementar a "quantidadePositivos" somente SE
  o "valorInformadoPeloUsuario" for positivo.
}
console.log(`${quantidadePositivos} valores positivos`);

    SOLUTION :
let quantidadePositivos = 0;
for (let i = 0; i < 6; i++) {
 const valorInformadoPeloUsuario = gets();
 // TODO Incrementar a "quantidadePositivos" somente SE o "valorInformadoPeloUsuario" for positivo.
 if(valorInformadoPeloUsuario >= 0){
  quantidadePositivos++;
 }
}
console.log(`${quantidadePositivos} valores positivos`);

        DESAFIO 5 - Exibindo pares

// Valor informado pelo usuario "N"
let n = parseInt(gets());

// TODO Inclua a condicao de parada adequada. 
// Dica: note que o contador "i" e incrementado de 2 em 2 (sempre indo para o proximo par).
for (let i = 2; ; i+=2) {
  console.log(i);
}
    SOLUTION :
let numero = gets();
let par = 2;
while (par <= numero){
  console.log(par);
  par = par + 2;
}
        DESAFIO 6 - Analise de Numeros

let valoresPares = 0;
let valoresImpares = 0;
let valoresPositivos = 0;
let valoresNegativos = 0;

for (var i = 0; i < 5; i++) {
  const valorInformadoPeloUsuario = parseInt(gets());
  // TODO Criar a condicao adequada para verificar se o "valorInformadoPeloUsuario" e par.
  if (     ) {
    valoresPares++;
  } else {
    valoresImpares++;
  }
  if (valorInformadoPeloUsuario > 0) {
    valoresPositivos++;
  } else if (valorInformadoPeloUsuario < 0) {
    valoresNegativos++;
  }
}
console.log(`${valoresPares} par(es)`);
console.log(`${valoresImpares} impar(es)`);
console.log(`${valoresPositivos} positivo(s)`);
console.log(`${valoresNegativos} negativo(s)`);

    SOLUTION :
numero = Array(5);
numero[0] = gets();
numero[1] = gets();
numero[2] = gets();
numero[3] = gets();
numero[4] = gets();
positivos = numero.filter(value => value > 0);
negativos = numero.filter(value => value < 0);
pares = numero.filter(value => value % 2 == 0);
impares = numero.filter(value => value % 2 != 0);
console.log(pares.length + " par(es)");
console.log(impares.length + " impar(es)");
console.log(positivos.length + " positivo(s)");
console.log(negativos.length + " negativo(s)");

        DESAFIO 7 - Contagem de cedulas
let n = parseInt(gets());
let quantidadeNotas = 0;
let cedulas = [100,50,20,10,5,2,1];

// Funcao responsavel por contar as notas a partir de um valor.
function contaNotas(valor){
  quantidadeNotas = parseInt(n/valor);

  // TODO Subtraia de "n" a "quantidadeNotas" multiplicada por seu respectivo "valor" (parametro).
  n -= ;

  console.log(`${quantidadeNotas} nota(s) de R$ ${valor},00`);
}

console.log(n);

for(let cedula in cedulas){
    contaNotas(cedulas[cedula]);
} 
    SOLUTION
let notas = [100, 50, 20, 10, 5, 2, 1];
let nnotas = [0, 0, 0, 0, 0, 0, 0];
let quantia = parseInt(gets());
let resto = quantia;
while (resto >= 1){
  nota = notas.findIndex(value => value <= resto);
  nnotas[nota] = Math.trunc(resto / notas[nota]);
  resto = resto % notas[nota];
}
console.log(quantia);
console.log(nnotas[0] + " nota(s) de R$ 100,00");
console.log(nnotas[1] + " nota(s) de R$ 50,00");
console.log(nnotas[2] + " nota(s) de R$ 20,00");
console.log(nnotas[3] + " nota(s) de R$ 10,00");
console.log(nnotas[4] + " nota(s) de R$ 5,00");
console.log(nnotas[5] + " nota(s) de R$ 2,00");
console.log(nnotas[6] + " nota(s) de R$ 1,00");

        DESAFIO 8 - CONSUMO MEDIO DE AUTOMOVEL

        let x = parseInt(gets());
let y = parseFloat(gets());

const consumoMedio = ;

console.log(`${consumoMedio.toFixed(3)} km/l`);

    SOLUTION

    let x = parseInt(gets());
let y = parseFloat(gets());

const consumoMedio = x/y;

console.log(`${consumoMedio.toFixed(3)} km/l`);
*/