const mostrarData = document.querySelector('.container h1');
let hoje = new Date();


function getDiaSemanaTexto(numeroDia){
    const diasSemana = ['domingo','segunda-feira','terça-feira','quarta-feira','quinta-feira','sexta-feira','sabado'];
    return diasSemana[numeroDia];
}

function getNomeMes (numero){
    const meses = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','desembro'];
    return meses[numero];
}

function zeroAesquerda (num) {
    return num <= 9 ? `0${num}` : num ;
}

function criaData(data){
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(numeroMes);

    return ( `${nomeDia}, ${hoje.getDate()} de ${nomeMes} de ${hoje.getFullYear()} ${zeroAesquerda(hoje.getHours())}:${zeroAesquerda(hoje.getMinutes())}`);
}


mostrarData.innerHTML = criaData(hoje);
