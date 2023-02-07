function Carro() {
  this.preco = 4300;
  this.marca = 'monk';
}

const honda = new Carro();
const fiat =  new Carro();
fiat.marca = 'Fiat'

function Carro2(marca, precoInicial) {
  const taxa = 1.2;
  const precoFinal = precoInicial * taxa;
  this.marca = marca;
  this.preco = precoFinal;
}

const BMW = new Carro2('BMW', 50000);
