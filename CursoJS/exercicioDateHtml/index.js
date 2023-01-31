function dataSite(valor){
    const diaSemana='';
    const dia = valor.getDay();
    //const data = valor.getDate();
    //const hora = valor.getHours(); 
    if ( dia == 0){
        diaSemana = 'Domingo';
    }
    else if ( dia == 1){
        diaSemana == 'Segunda';
    }
    else if ( dia == 2){
        diaSemana = 'Terça-Feira';
    }
    else if ( dia == 3){
        diaSemana = 'Quarta-Feira';
    }
    else if ( dia == 5){
        diaSemana = 'Quinta-Feira';
    }
    else if ( dia == 6){
        diaSemana = 'Sexta-Feira';
    }
    else if (dia == 7){
        diaSemana ='Sábado';
    }
    else{
        diaSemana = '';
    }
   
    return diaSemana;
}

const hoje = new Date();
dataSite(hoje);
//const mostrarData = document.querySelector('#data');
//const diaLiteral = dataSite(hoje);
//mostrarData.innerHTML = diaLiteral;
