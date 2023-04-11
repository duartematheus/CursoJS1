//Superclass
function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor){
    if(this.saldo < valor) {
        console.log(`Saldo insuficiente: ${this.saldo}`);
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
};
Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo();
};

Conta.prototype.verSaldo = function(){
    console.log(` Ag/c: ${this.agencia}/${this.conta}`);
    console.log(` Saldo:R$${this.saldo.toFixed(2)}`)
};

function ContaCorrente(agencia, conta, saldo, labelmite){
    Conta.call(this, agencia, conta, saldo);
    this.labelmite = labelmite;
}
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor){
    if((this.saldo + this.labelmite) < valor) {
        console.log(`Saldo insuficiente: ${this.saldo}`);
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
};

function ContaPoupanca(agencia, conta, saldo){
    Conta.call(this, agencia, conta, saldo);
  
}
ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

const contaC = new ContaCorrente(11 , 1213, 0, 100.00);
contaC.depositar(300);
contaC.sacar(500);
console.log('-----------------');

const contaP = new ContaPoupanca(11, 1213, 0);
contaP.depositar(200);
contaP.sacar(190);
contaP.sacar(20);