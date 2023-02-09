function relogio(){
    let hora = 0;
    let min = 0;
    let seg = 0;
    while( seg <= 59){
        seg +=1;
        if (min <=59 && seg === 60){
            min +=1;
            if(hora <= 23 && min ===59){
                hora +=1;
                               
            }
           
        }
       
        return (`${hora}:${min}:${seg}`);
    }

}
console.log(relogio());