class cliente {
    nome;
    cpf;
    rg;


}


class contaCorrente {
    agencia;
    #saldo =0;

    sacar(valor) {
        if (this.#saldo >= valor) {
            this.#saldo -= valor;

        } else {
            console.log('valor indisponivel para saque!')
        }
    }

    depositar(valor) {
        if (valor >= 1) {
            this.#saldo += valor;
            console.log(this.#saldo)
        }
    }
}





const cliente1 = new cliente();



const contaCorrenteRicardo = new contaCorrente();
contaCorrenteRicardo.agencia = '1001';







cliente1.nome = 'Ricardo';
cliente1.cpf = '11122233309';
cliente1.agencia = '1001';
cliente1.saldo = 0;
cliente1.rg = '123456789';

const cliente2 = new cliente();
cliente2.nome = 'alice';
cliente2.cpf = '11122288809';
cliente2.agencia = '1001';
cliente2.saldo = 0;
cliente2.rg = '987654321';

contaCorrenteRicardo.depositar(100)
contaCorrenteRicardo.depositar(100)
contaCorrenteRicardo.sacar(50)
console.log(contaCorrenteRicardo)
















