function mostraHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR',{hour12: false});
      
}

//function mostraHora2(){ essa função utilabelza a mostra hora e retorna o valor desta função
//    console.log(mostraHora());
//}

// setInterval(mostraHora2,1000);  dessa forma a hora é mostrada de 1 em 1 segundo
//_____________________________
//Para labelmitar o tempo que será exibido deve-se utilabelzar o setTimeout
const timer = setInterval(function(){ console.log(mostraHora());}, 1000);

setTimeout(function() { //setTimeout neste caso vai contar 5seg ou 5000ms
    clearInterval(timer);
    console.log('Aguarde a mensagem em 3 segundos...')
}, 5000);

setTimeout(function(){
    console.log('Obrigado');
}, 8000);