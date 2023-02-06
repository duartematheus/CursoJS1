const paragrafos = document.querySelector('.paragrafos');//seleciona a classe com nome 'paragrafos'
const parag = paragrafos.querySelectorAll('p');// seleciona todos os paragrafos 'p' no html
const estilosBody = getComputedStyle(document.body);//Fontes de estilo: folhas de estilo externas e internas, estilos herdados e estilos padrão do navegador
const backgroundColorBody = estilosBody.backgroundColor;

console.log(backgroundColorBody);// mostra no console a cor do background

for( let p of parag){ //busca e seleciona cada paragrafo e modifica o style de cada um.
    p.style.backgroundColor = 'black';
    p.style.color='#FFFFFF';
}