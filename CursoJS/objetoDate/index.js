const data = new Date(2023, 0, 27, 14, 01, 34, 400);// ano,mes,dia,hora,min,seg.,mil.seg.,
console.log(data.toString());

const data2 = new Date('2023-01-27 14:07:35.340');
console.log(data2.toString());

console.log('Dia', data.getDate());
console.log('Mês', data.getMonth()); //Mes começa do 0
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMillabelseconds());
console.log('Dia na semana',data.getDay(),'ª'); //0- Domingo, 6-Sabado 

//Outro exemplo
function zeroAEsquerda (num){
    return num >= 10 ? num : `0${num}`;
}
function formataData(valor){
   const dia = zeroAEsquerda(valor.getDate());
   const mes = zeroAEsquerda(valor.getMonth() +1);
   const ano = zeroAEsquerda(valor.getFullYear());
   const hora = zeroAEsquerda(valor.getHours());
   const min = zeroAEsquerda(valor.getMinutes());
   const seg = zeroAEsquerda(valor.getSeconds());
   
   return `${dia}/${mes}/${ano}  ${hora}:${min}:${seg}`;

}

const data4 = new Date();
const dataBrasil = formataData(data4);
console.log(dataBrasil);