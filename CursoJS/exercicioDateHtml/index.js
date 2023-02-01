function dataSite(valor){
    
    if ( valor.getDay() == 0){
        diaSemana = 'Domingo';
       
    }
    else if ( valor.getDay() == 1){
        diaSemana == 'Segunda';
        
    }
    else if ( valor.getDay() == 2){
        diaSemana = 'Terça-Feira';
       
    }
    else if ( valor.getDay() == 3){
        diaSemana = 'Quarta-Feira';
      
    }
    else if ( valor.getDay() == 5){
        diaSemana = 'Quinta-Feira';
       
    }
    else if ( valor.getDay() == 6){
        diaSemana = 'Sexta-Feira';
    
    }
    else if (valor.getDay()== 7){
        diaSemana ='Sábado';
        
    }
    else{
        diaSemana = '';       
    } 
   
    switch (valor.getMonth()){
        case 0:
            mesDoAno = 'Janeiro';
            break;
        case 1:
            mesDoAno = 'Fevereiro';
            break;
        case 2:
            mesDoAno = 'Março';
            break;
        case 3:
            mesDoAno = 'Abril';
            break;
        case 4:
            mesDoAno = 'Maio';
            break;
        case 5:
            mesDoAno = 'Junho';
            break;
        case 6:
            mesDoAno = 'Julho';
            break;
        case 7:
            mesDoAno = 'Agosto';
            break;
        case 8:
            mesDoAno = 'Setembro';
            break;
        case 9:
            mesDoAno = 'Outubro';
            break;
        case 10:
            mesDoAno = 'Novembro';
            break;
        case 11:
            mesDoAno = 'Dezembro';
            break;
         
    }
    function zero(numero){
        return numero <= 9 ? `0${numero}`:numero;
    }
   
    
    return `${diaSemana} , ${valor.getDate()} de ${mesDoAno} de ${valor.getFullYear()}    ${zero(valor.getHours())}:${zero(valor.getMinutes())}:${zero(valor.getSeconds())}`;  
    

}

let hoje = new Date();
const mostrarData = document.querySelector('#data');

mostrarData.innerHTML = dataSite(hoje);
