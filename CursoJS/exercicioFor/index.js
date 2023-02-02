const elementos = [
    {tag: 'p', texto:'Qualquer texto'},
    {tag: 'div', texto:'Frase 2'},
    {tag: 'footer', texto:'Frase 3'},
    {tag: 'section', texto:'Frase 4'},
    
];

const tela = document.querySelector('.container');
const criandoHTML = document.createElement('div');

for( let i=0; i< elementos.length; i++){
   
    let { tag, texto } = elementos[i];
    let criandoTag = document.createElement(tag);
    let criandoTexto = document.createTextNode(texto);
    
    criandoTag.appendChild(criandoTexto);    
    criandoHTML.appendChild(criandoTag);

}

tela.appendChild(criandoHTML);
