// variaveis globais
let nomeprato;
let nomebebida;
let nomesobremesa;
let valorprato;
let valorbebida;
let valorsobremesa;
let valortotal;


// funcoes para selecionar o prato
function selecionarPrato(elemento1){  
  const bordacomida = document.querySelector(".selecionadoprato");
  if (bordacomida !== null){
  bordacomida.classList.remove("selecionadoprato")
  }
  elemento1.classList.add("selecionadoprato");

  const comparar = document.querySelector(".opcaoprato .presente")
  const icone = document.querySelector(".selecionadoprato .check")
  icone.classList.add("presente");
  if(comparar !== null){
    comparar.classList.remove("presente")
  }

ativarbotao();
}


function selecionarBebida(elemento2){  
  const bordabebida = document.querySelector(".selecionadobebida");
  if (bordabebida !== null){
  bordabebida.classList.remove("selecionadobebida")
  }
  elemento2.classList.add("selecionadobebida");

  const comparar = document.querySelector(".opcaobebida .presente")
  const icone = document.querySelector(".selecionadobebida .check")
  icone.classList.add("presente");
  if(comparar !== null){
    comparar.classList.remove("presente")
  }

  ativarbotao();
}


function selecionarSobremesa(elemento3){  
  const bordasobremesa = document.querySelector(".selecionadosobremesa");
  if (bordasobremesa !== null){
  bordasobremesa.classList.remove("selecionadosobremesa")
  }
  elemento3.classList.add("selecionadosobremesa");

  const comparar = document.querySelector(".opcaosobremesa .presente")
  const icone = document.querySelector(".selecionadosobremesa .check")
  icone.classList.add("presente");
  if(comparar !== null){
    comparar.classList.remove("presente")
  }
  ativarbotao();
}

function ativarbotao(){
const prato = document.querySelector(".selecionadoprato");
const bebida = document.querySelector(".selecionadobebida");
const sobremesa = document.querySelector(".selecionadosobremesa");
const botaofinalizar = document.querySelector(".botao");
if (prato !== null && bebida !== null && sobremesa !== null){
  botaofinalizar.innerHTML = "Fechar Pedido";
  botaofinalizar.classList.remove("botao");
  botaofinalizar.classList.add("botaofinalizado");
}
}
