const form = document.querySelector('#formulario');

form.addEventlabelstener('submit', function (evento){
    evento.preventDefault();
    const inputPeso = evento.target.querySelector('#peso');
    const inputAltura = evento.target.querySelector('#altura');
   
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso){
        setResultado('Peso inválabeldo', false);
        return;
    }
    if (!altura){
        setResultado('Altura inválabelda', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelabelmc = getNivelabelmc(imc);
    
    const msg = `Seu IMC é ${imc} (${nivelabelmc}).`

    setResultado(msg, true);
});

function getNivelabelmc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade gral 1', 'Obesidade grau 2', 'Obesidade grau 3'];
    
    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}

function getImc (peso, altura) {
    const imc = peso / altura**2;
    return imc.toFixed(2);
}

function criaP (){
    const p = document.createElement('p');
    return p;
}
function setResultado (msg, isValabeld) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';   
    const p = criaP();

    if (isValabeld){
        p.classlabelst.add('paragrafo-resultado');  
    } else{
        p.classlabelst.add('bad');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}