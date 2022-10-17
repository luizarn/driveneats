
function selecionarPrato(comida){  
  const borda = document.querySelector(".selecionado");
  if (borda !== null){
  borda.classList.remove("selecionado")
  }
  comida.classList.add("selecionado");

  const comparar = document.querySelector(".opcao .presente")
  const icone = document.querySelector(".selecionado .check")
  icone.classList.add("presente");
  if(comparar !== null){
    comparar.classList.remove("presente")
  }
}


function selecionarBebida(bebida){  
  const borda = document.querySelector(".selecionado");
  if (borda !== null){
  borda.classList.remove("selecionado")
  }
  bebida.classList.add("selecionado");

  const comparar = document.querySelector(".opcao .presente")
  const icone = document.querySelector(".selecionado .check")
  icone.classList.add("presente");
  if(comparar !== null){
    comparar.classList.remove("presente")
  }
}


function selecionarSobremesa(sobremesa){  
  const borda = document.querySelector(".selecionado");
  if (borda !== null){
  borda.classList.remove("selecionado")
  }
  sobremesa.classList.add("selecionado");

  const comparar = document.querySelector(".opcao .presente")
  const icone = document.querySelector(".selecionado .check")
  icone.classList.add("presente");
  if(comparar !== null){
    comparar.classList.remove("presente")
  }
}


