function recursiva(max) {
    if(max >=10) return;
    max++;
    console.log(max);
    recursiva(max);// a funcao chama ela mesmo vai funcionar como um FOR
}

recursiva(0);