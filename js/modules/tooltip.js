export default function initTolltip(){

}


const tooltips = document.querySelectorAll('[data-tooltip]');

tooltips.forEach((item) => {
  item.addEventListener('mouseover', onMouseOver)
})

function onMouseOver(event) {
  criarTooltipBox(this);
  console.log(event)
}

function criarTooltipBox(element) {
  const TooltipBox = document.createElement('div')
  const text = element.getAttribute('aria-label')
  TooltipBox.classList.add('tooltip')
  TooltipBox.innerText = text;
  
}