class cliente {
    nome;
    cpf;
    rg;


}
class contaCorrente {
    agencia;
    _cliente;

    set cliente(novoValor) {
        if (novoValor instanceof cliente) {
            this._cliente = novoValor;
        }


    }

    get cliente() {
        return this.cliente
    }

    _saldo = 0;

    get saldo() {
        return this._saldo
    }

    constructor(cliente, agencia) {
        this.agencia = agencia
        this.cliente = cliente

    }


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


    transferir(valor, conta) {
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)


    }

}


const cliente1 = new cliente();



const contaCorrenteRicardo = new contaCorrente();
contaCorrenteRicardo.agencia = '1001';
contaCorrenteRicardo.cliente = cliente1;
contaCorrenteRicardo.depositar(500)

const conta3 = new contaCorrente()
conta3.cliente = new cliente()
conta3.nome = 'Alicel';
conta3.cpf = 987654321;
conta3.agencia = 102;










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
















