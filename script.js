// Adicione a classe ativo a todos os itens do menu

const menuItens = document.querySelectorAll('.menu a');


menuItens.forEach(function(item){
  item.classList.add('ativo')
})


// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

menuItens.forEach(function(item){
  item.classList.remove('ativo')
})

menuItens[0].classList.add('ativo')

// Verifique se as imagens possuem o atributo alt

const imgs = document.querySelectorAll('img');

imgs.forEach((img) => {
  const possuiAtributo = img.hasAttribute('alt')
  console.log(possuiAtributo)
  
})



// Modifique o href do link externo no menu

