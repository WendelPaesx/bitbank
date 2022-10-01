class cliente {
    nome;
    cpf;
    rg;


}
class contaCorrente {
    agencia;
    cliente;

    _saldo = 0;


    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor
        }


    }

    depositar(valor) {
        if (valor < 1) {
            return

        } else {
            this._saldo += valor;
        }

    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)


    }
    
}


const cliente1 = new cliente();



const contaCorrenteRicardo = new contaCorrente();
contaCorrenteRicardo.agencia = '1001';
contaCorrenteRicardo.cliente = cliente1;
contaCorrenteRicardo.depositar(500)








cliente1.nome = 'Ricardo';
cliente1.cpf = '11122233309';
cliente1.agencia = '1001';
cliente1._saldo = 0;
cliente1.rg = '123456789';

const cliente2 = new cliente();
cliente2.nome = 'alice';
cliente2.cpf = '11122288809';
cliente2.agencia = '1001';
cliente2._saldo = 0;
cliente2.rg = '987654321';

const conta2 = new contaCorrente()
conta2.cliente = cliente2
conta2.agencia = 102

contaCorrenteRicardo.transferir(200, conta2)

console.log(conta2)
console.log(contaCorrenteRicardo)
















