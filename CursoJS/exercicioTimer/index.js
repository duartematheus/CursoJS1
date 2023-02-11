const tempo = document.querySelector('.cronometro');
const iniciar = document.querySelector('.iniciar');
const parar = document.querySelector('.parar');
const zerar = document.querySelector('.zerar');
const cronometro = document.querySelector('.botCronometro')
let hora = 0;
let min = 0;
let seg = 0;
setInterval(function(){
   
    if( hora <= 23){
        if(min <= 59){
            if( seg < 59){
                seg +=1;
                
                }else{
                    seg = 0;
                    min += 1;
                }  
        }else{
            min = 0;
            hora +=1;
        }
    }else{
        hora = 0;
    }
    tempo.innerHTML = (`${zero(hora)}:${zero(min)}:${zero(seg)}`);
}, 990);        
      
function zero(num){
    if (num < 10){
        return '0'+ num;
    }else{
        return num;
    }
}



