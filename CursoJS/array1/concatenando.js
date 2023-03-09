const array1= [1,2,3,4];
const array2= [5,6,7,8];

const array3= array1.concat(array2);
// ...rest -> spread
const array4= [...array1, ...array2];
const array5= [...array1, 'Matheus',...array2, ...[9,10,11]]
console.log(array3, array4,array5);