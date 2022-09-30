class cliente {
    nome;
    cpf;
    rg;


}


class contaCorrente {
    agencia;
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

        }else{
            this._saldo += valor;
        }
        
    }
}





const cliente1 = new cliente();



const contaCorrenteRicardo = new contaCorrente();
contaCorrenteRicardo.agencia = '1001';







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

contaCorrenteRicardo.depositar(100)
contaCorrenteRicardo.depositar(100)
contaCorrenteRicardo.depositar(100)

const valorSacado = contaCorrenteRicardo.sacar(50)
console.log(valorSacado)

console.log(contaCorrenteRicardo)
















