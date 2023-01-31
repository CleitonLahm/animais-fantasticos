// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const linksInternos = document.querySelectorAll('a[href^="#"]');

function addClass(event){
  event.preventDefault();
  linksInternos.forEach((link) => {
    link.classList.remove('ativo')
  })
  event.currentTarget.classList.add('ativo')
}


linksInternos.forEach((link) => {
  link.addEventListener('click', addClass)
})



// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados








// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

const todo = document.querySelectorAll('body *')



todo.forEach((item) => {
  item.addEventListener('click', function(e){
    e.currentTarget.remove()
    console.log(item)
  })
})


// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
