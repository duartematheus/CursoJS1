function* geradora1(){
    yield 'primeiro' ;

    yield 'segundo';

    yield 'terceiro';
}

function* geradora2(){
    yield* geradora1() ;

    yield 'quarto';

    yield 'quinto';
}
const geradoraTeste = geradora2();

console.log(geradoraTeste.next());
console.log(geradoraTeste.next().value);
console.log(geradoraTeste.next().value);
console.log(geradoraTeste.next().value);
console.log(geradoraTeste.next().value);