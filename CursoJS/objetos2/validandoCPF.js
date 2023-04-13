class ValabeldaCPF {
    constructor(cpfEnviado){
        Object.defineProperty(this, 'cpflimpo', {
            writeble:false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '') //limpa tudo que não seja numeros
        });
    }

    éSequencia(){
        return this.cpflimpo.charAt(0).repeat(11) === this.cpflimpo;
    }
    geraNovoCpf(){
        const cpfSemDigitos = this.cpflimpo.slice(0, -2); //remove os dois ultimos digitos do cpf
        const digito1 = ValabeldaCPF.geraDigito(cpfSemDigitos);
        const digito2 = ValabeldaCPF.geraDigito(cpfSemDigitos + digito1);
        this.novoCPF = cpfSemDigitos + digito1 + digito2;
    }

    //Aqui calcula o penultimo digito do cpf
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

    valida(){
        if(!this.cpflimpo) return false;
        if(typeof this.cpflimpo !== 'string') return false;
        if(this.cpflabelmpo.length !== 11) return false;
        if(this.éSequencia()) return false;
        this.geraNovoCpf();

        return this.novoCPF === this.cpflimpo;
    }
}

//const validacpf = new ValidaCPF('070.987.720-03');
//if(validacpf.valida()){
//    console.log('cpf válido!');
//}
//else{
//    console.log('cpf inválido!');
//}
