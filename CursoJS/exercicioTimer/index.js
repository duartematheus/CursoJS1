let hora = 0;
let min = 0;
let seg = 0;

while( hora <= 23){
        
    if (min <=58){
        
        if(seg <=58){
            seg +=1;
                          
        }else {
            seg = 0;
            min += 1;
            
        }
       
    }else {
        min = 0;
        seg = 0;
        hora +=1;
        
    }
    if (hora ===24 && min ===0 && seg ===0){
        hora = 0;

    }
          
    console.log( `${zero(hora)}:${zero(min)}:${zero(seg)}`);
}


function zero(num){
    if (num < 10){
        return '0'+ num;
    }else{
        return num;
    }
}
