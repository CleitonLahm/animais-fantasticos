


// Duplique o menu e adicione ele em copy

const menu = document.querySelector('.menu')
const copy = document.querySelector('.copy')

const menuClone = menu.cloneNode(true);

copy.appendChild(menuClone);

// Selecione o primeiro DT da dl de Faq

const dt = document.querySelector('dl :nth-child(1)');
console.log(dt)

// Selecione o DD referente ao primeiro DT

const dd = document.querySelector('dl dt :nth-child(1)');
console.log(dd)

// Substitua o conteúdo html de .faq pelo de .animais

const faq = document.querySelector('.faq')
const animais = document.querySelector('.animais')

faq.innerHTML = animais.innerHTML