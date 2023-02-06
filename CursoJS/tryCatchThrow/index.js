//----------Exemplo 1 -------------
try{
   console.log(ero); 
} catch(e) {
   console.log('Não existe ero');
   //console.log(e);  se quiser que apareça todos dados do erro
}

//----------Exemplo 2--------------

function soma(x , y){
   if (typeof x !== 'number' || typeof y !== 'number'){
      throw new ReferenceError( ' x e y precisam ser numeros.');
   }

   return x + y;
}

try{
   console.log(soma(3,5));
   console.log(soma('3',5));
} catch(er){ // O catch sera executado se ocorrer algum erro no try
   console.log('Escrevendo um erro de forma mais amigavel');
}
