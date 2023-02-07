function retornaDataHora(hora){
    if ( hora && !(hora instanceof Date)){
        throw new TypeError('Esperando instância de Date.');
    }
    if (!hora){
        hora = new Date();
    }

    return hora.toLocaleTimeString('pt-BR', { hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false});
    
}

try{
    const horas = new Date();
    const horasFunc = retornaDataHora(horas);
    console.log(horasFunc);
} catch(e){
    //tratar erro
    console.log(e);
} finally{
    console.log('Tenha um bom dia.');
}

