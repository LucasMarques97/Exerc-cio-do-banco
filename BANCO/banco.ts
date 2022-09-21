import { investe } from "./contadeinvestimento";
import { saldoT } from "./exibirsaldo";
import { contaC } from "./contacorrente";
import { contaP } from "./contapoupanca";


    export class conta {
        nomeCliente: string;
        contaCorrente: number;
        contaPoupanca: number;
        banco:string;

        mostrarSaldo(){
            console.log(`Cliente: ${Valor.nomeCliente}\nBanco: ${Valor.banco}\nSaldo conta corrente: ${contaC.saldoCorrente}\nSaldo conta poupanca: ${contaP.saldoPoupanca}\nSaldo Total: ${saldoT.soma}\nTotal investido: ${investe.Porcentagem}`)
        }
        
}
const Valor = new conta()
Valor.nomeCliente = "Poze do Rodo"
Valor.banco = "itáu"
Valor.mostrarSaldo()