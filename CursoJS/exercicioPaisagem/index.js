//--------------Exemplo 1--------------------
function ePaisagem(largura , altura){
    return largura > altura;
}

//--------------Exemplo 2--------------------
const ePaisagem2 = (largura,altura) => largura > altura; // Arrow function operador =>

console.log(ePaisagem(1920 , 1080));
console.log(ePaisagem2(1080,1920));