export class contaCorrente {
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