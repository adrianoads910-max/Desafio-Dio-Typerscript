import { DioAccount } from "./DioAccount"

export class CustomAccount extends DioAccount {

  constructor(name: string, accountNumber: number, status: boolean){
    super(name, accountNumber, status)
  }

deposit(balance: number): void {
  if (!this.validateStatus()) throw new Error("Conta inativa!");
  if (balance <= 0) throw new Error("Saldo deve ser positivo!");
  
  this.balance += balance + 10;
  console.log(`Seu saldo é R$ ${balance + 10}`);
}
}