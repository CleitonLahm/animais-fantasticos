
// Verifique a distância da primeira imagem
// em relação ao topo da página

// const imagem1 = document.querySelector('img')
// console.log(imagem1)

// const imagem1offsettop = imagem1.offsetTop;
// console.log(imagem1offsettop);

// Retorne a soma da largura de todas as imagens

const imagens = document.querySelectorAll('img');
// console.log(imagens)

imagens.forEach((img) => {
  const widthimg = img.clientWidth;
  const totalwidthimgs = widthimg * 6;
  console.log(totalwidthimgs)
  
})

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
