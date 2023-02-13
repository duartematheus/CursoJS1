const tempo = document.querySelector('.cronometro');
const iniciar = document.querySelector('.iniciar');
const parar = document.querySelector('.parar');
const zerar = document.querySelector('.zerar');
const cronometro = document.querySelector('.botCronometro')
let hora = 0;
let min = 0;
let seg = 0;
let milSeg = 1000;
let timer;

cronometro.addEventListener('click', function(){
    if(milSeg === 100){
        cronometro.classList.remove('cronometroAtivo')
        tempo.classList.remove('cronometroAtivoNumeros')
        milSeg = 1000;
    }else{
        cronometro.classList.add('cronometroAtivo')
        tempo.classList.add('cronometroAtivoNumeros')
        milSeg = 100;
    }
});

iniciar.addEventListener('click',function(event){   
    tempo.classList.remove('parado')
    clearInterval(timer);
    timer = setInterval(function(){    
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
    }, milSeg);
}); 

parar.addEventListener('click',function(event){
    tempo.classList.add('parado')
    clearInterval(timer);        
}); 

zerar.addEventListener('click',function(){   
    timer.classList.remove('parado')
    clearInterval(timer);
    hora = 0;
    min = 0;
    seg = 0;
    tempo.innerHTML = (`${zero(hora)}:${zero(min)}:${zero(seg)}`);
});

function zero(num){
    if (num < 10){
        return '0'+ num;
    }else{
        return num;
    }
}



