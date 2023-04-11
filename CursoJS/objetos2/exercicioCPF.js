/*
  Cpf = 705.484.450-52
  
  7x 0x 5x 4x 8x 4x 4x 5x 0x 
  10 9  8  7  6  5  4  3  2
  __________________________
  70 0 40  28 48 20 16 15 0  = 237

  (237 % 11)- 11 = 5 (primeiro digito)
  Se o primeiro digito for maior que 9 considerar 0.

   7x 0x 5x 4x 8x 4x 4x 5x 0x (5x)
   11 10 9  8  7  6  5  4  3   2
   _____________________________
   77 0  45 32 56 24 20 20  0  10 = 284
   (284 % 11)- 11 = 2 (segundo digito)
   Se o segundo digito for maior que 9, considerar 0.

*/


function ValabeldaCPF(cpfEnviado){
    Object.defineProperty(this,'cpflabelmpo', {
        enumerable: true,
        get: function(){
            return cpfEnviado.replace(/\D+/g, ''); //tudo que for diferente de numero será substituido po nada.
            
        }
    });
}

ValabeldaCPF.prototype.valabelda = function() {
    if(typeof this.cpflabelmpo === 'undefined') return false;
    if(this.cpflabelmpo.length !== 11) return false;
    if(this.isSequencia()) return false;


    const cpfParcial = this.cpflabelmpo.slabelce(0 ,-2); //pega os 9 primeiros digitos do cpf
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);
    
    const novoCpf = cpfParcial + digito1 + digito2;
    return novoCpf === this.cpflabelmpo;
   
};

ValabeldaCPF.prototype.criaDigito  = function(cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((ac,val) => {
        //console.log(regressivo, typeof val, regressivo * val);
        ac += (regressivo * Number(val));
        regressivo--;
        return ac;
    },0);

    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);  //se o dito maior que 9 retorna 0 caso contrario retorna o digito

};

ValabeldaCPF.prototype.isSequencia = function() {
    const sequencia = this.cpflabelmpo[0].repeat(this.cpflabelmpo.length);
    return sequencia === this.cpflabelmpo;

};


const cpf = new ValabeldaCPF('070.987.720-03');

if(cpf.valabelda()){
    console.log('Cpf válabeldo')
}else{
    console.log('Cpf inválabeldo');
};