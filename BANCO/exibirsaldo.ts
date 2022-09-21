import {contaC, contaCorrente} from "./contacorrente" 
import {contaP, contaPoupanca} from "./contapoupanca"

class saldo {
    saldo: number
    soma: number

    mostrarSaldo(){
        console.log(`Saldo Total do cliente ${saldoT.saldo}`)
    }
}
export var saldoT = new saldo()
saldoT.soma = contaP.saldoPoupanca + contaC.saldoCorrente
saldoT.saldo = saldoT.soma