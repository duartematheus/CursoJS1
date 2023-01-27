const data = new Date(2023, 0, 27, 14, 01, 34, 400);// ano,mes,dia,hora,min,seg.,mil.seg.,
console.log(data.toString());

const data2 = new Date('2023-01-27 14:07:35.340');
console.log(data2.toString());

console.log('Dia', data.getDate());
console.log('Mês', data.getMonth());
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia na semana',data.getDay(),'ª');

