import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number, status: boolean){
    super(name, accountNumber, status)
  }

  getLoan(balance: number): void {
    if (!this.validateStatus()) throw new Error("Conta inativa!");
    if (balance <= 0) throw new Error("Valor deve ser positivo!");
    
    this.balance += balance;
    console.log(`Você pegou um empréstimo de R$ ${balance}`);
  }
}
