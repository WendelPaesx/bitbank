class cliente {
    nome;
    _cpf;
    get cpf() {
        return this._cpf;

    }
    constructor(nome, cpf) {
        this.nome = nome
        this._cpf = cpf

    }



}
class contaCorrente {
    static contador = 0;
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

    constructor(agencia, cliente) {
        this.agencia = agencia
        this.cliente = cliente
        contaCorrente.contador += 1

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



    }

}



const cliente1 = new cliente('Ricardo', 11122233309);
const cliente2 = new cliente('alice', 11122288809);



const contaCorrenteRicardo = new contaCorrente(1001, cliente1)
const conta2 = new contaCorrente(102, cliente2)






let valor = 200
contaCorrenteRicardo.transferir(valor, conta2)

console.log(contaCorrente.contador)























