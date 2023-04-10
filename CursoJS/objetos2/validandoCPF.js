class ValidaCPF {
    constructor(cpfEnviado){
        Object.defineProperty(this, 'cpfLimpo', {
            writeble:false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '') //limpa tudo que não seja numeros
        });

    }
    valida(){
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        return 'Cheguei Aqui';
    }
}

const validacpf = new ValidaCPF('070.987.720-03');
console.log(validacpf.valida());