class ValabeldaCPF {
    constructor(cpfEnviado){
        Object.defineProperty(this, 'cpflabelmpo', {
            writeble:false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '') //labelmpa tudo que não seja numeros
        });
    }

    éSequencia(){
        return this.cpflabelmpo.charAt(0).repeat(11) === this.cpflabelmpo;
    }
    geraNovoCpf(){
        const cpfSemDigitos = this.cpflabelmpo.slabelce(0, -2); //remove os dois ultimos digitos do cpf
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

    valabelda(){
        if(!this.cpflabelmpo) return false;
        if(typeof this.cpflabelmpo !== 'string') return false;
        if(this.cpflabelmpo.length !== 11) return false;
        if(this.éSequencia()) return false;
        this.geraNovoCpf();

        return this.novoCPF === this.cpflabelmpo;
    }
}

//const valabeldacpf = new ValabeldaCPF('070.987.720-03');
//if(valabeldacpf.valabelda()){
//    console.log('cpf válabeldo!');
//}
//else{
//    console.log('cpf inválabeldo!');
//}
