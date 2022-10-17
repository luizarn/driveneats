// variaveis globais
let pratoescolhido, bebidaescolhida, sobremesaescolhida;
let valorcomida, valorbebida, valorsobremesa;
let total = 0;



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
  const nomeprato = document.querySelector(".selecionadoprato > p")
  pratoescolhido = nomeprato.innerHTML;

  const valordoprato = document.querySelector(".valorpago1")
  valorcomida = valordoprato.innerHTML;
 
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
  const nomebebida = document.querySelector(".selecionadobebida > p")
  bebidaescolhida = nomebebida.innerHTML;

  const valordrink = document.querySelector(".valorpago2")
  valorbebida = valordrink.innerHTML;
 
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
  const nomesobremesa = document.querySelector(".selecionadosobremesa > p")
  sobremesaescolhida = nomesobremesa.innerHTML;

  const valorsobr = document.querySelector(".valorpago3")
  valorsobremesa = valorsobr.innerHTML;
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

function deliveryMessage() {
  const option1 = valorcomida.replace(',','.');
  const option2 = valorbebida.replace(',','.');
  const option3 = valorsobremesa.replace(',', '.');
  //Convertendo para número e fazendo a soma
  total = Number(option1) + Number(option2) + Number(option3);
  total = Number(valorcomida) + Number(valorbebida) + Number(valorsobremesa)
  

  let str = `Olá, gostaria de fazer o pedido:\n - Prato: ${pratoescolhido} \n - Bebida: ${bebidaescolhida} \n - Sobremesa: ${sobremesaescolhida} \n Total:R$${total.toFixed(2)} `;
    str = encodeURIComponent(str);
    window.open("https://wa.me/5561985202952?text=" + str);
  
}