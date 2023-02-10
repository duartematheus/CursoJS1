let hora = 0;
let min = 0;
let seg = 0;

while( hora < 24){
       
    if (min <= 59){
        
        if(seg < 59){
           
            console.log( `${zero(hora)}:${zero(min)}:${zero(seg)}`);
            seg +=1;             
            
        }else {
            min += 1;
                
            seg = 0;   
            
        }
       
    }else {
        min = 0;
        hora +=1;
               
    }
    
          
    
}


function zero(num){
    if (num < 10){
        return '0'+ num;
    }else{
        return num;
    }
}
