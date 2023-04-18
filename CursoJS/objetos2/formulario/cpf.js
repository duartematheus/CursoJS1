/*
  Cpf = 705.484.450-52
  
  7x 0x 5x 4x 8x 4x 4x 5x 0x -> CPF exemplo sem os dois ultimos digitos
  10 9  8  7  6  5  4  3  2
  __________________________
  70 0 40  28 48 20 16 15 0  = 237

  (237 % 11)- 11 = 5 (primeiro digito)
  Se o primeiro digito for maior que 9 considerar 0.

   7x 0x 5x 4x 8x 4x 4x 5x 0x (5x) -> CPF exemplo mais o peneultimo digito calculado
   11 10 9  8  7  6  5  4  3   2
   _____________________________
   77 0  45 32 56 24 20 20  0  10 = 284
   (284 % 11)- 11 = 2 (segundo digito)
   Se o segundo digito for maior que 9, considerar 0.

*/
class CPF{
    constructor(cpfRecebido){
        //Limpa o valor recebido como cpf removendo o que não é numero
        Object.defineProperty(this, 'cpflimpo', {
            writeble: false,
            enumerable: true,
            configurable: false,
            value: cpfRecebido.replace(/\D+/g, '') // remove o que não é numero
        } );
    }

    validandoCPF(){
        if(!this.cpflimpo) return false;
        if(this.cpflimpo.length !== 11) return false;
        if(typeof this.cpflimpo !== 'string') return false;
        if(this.verificaSequencia()) return false;
        this.geraNovoCpf();

        return this.novoCPF === this.cpflimpo;
    }

    verificaSequencia(){
        return this.cpflimpo.charAt(0).repeat(11) === this.cpflimpo;
    }
   

    static geraDigito(cpfSemDigitos){
        let total = 0;
        let reverso = cpfSemDigitos.length + 1;

        for( let stringNumerica of cpfSemDigitos){
            total += reverso * Number(stringNumerica);
            reverso--;
        }

        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';
    }

    geraNovoCpf(){
        const cpfSemDigitos = this.cpflimpo.slice(0, -2);
        const digito1 = CPF.geraDigito(cpfSemDigitos);
        const digito2 = CPF.geraDigito(cpfSemDigitos + digito1);
        this.novoCPF = cpfSemDigitos + digito1 + digito2;
    }

}

const testeCPF = new CPF('017.146.596-92');

/*
if(testeCPF.validandoCPF()){
    console.log('CPF ok')
}else{
    console.log('CPF errado')
}
*/


