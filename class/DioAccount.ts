export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  protected balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number, status: boolean = true){
    this.name = name
    this.accountNumber = accountNumber
    this.status = status
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit(balance: number): void {
  if (!this.validateStatus()) throw new Error("Conta inativa!");
  if (balance <= 0) throw new Error("Saldo deve ser positivo!");
  
  this.balance += balance;
  console.log(`Você depositou R$ ${balance}`);
}

  withdraw(balance: number): void {
  if (!this.validateStatus()) throw new Error("Conta inativa!");
  if (balance <= 0) throw new Error("Saldo deve ser positivo!");
  if (balance > this.balance) throw new Error("Saldo insuficiente!");
  
  this.balance -= balance;
  console.log(`Voce sacou R$ ${balance}`);

  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
