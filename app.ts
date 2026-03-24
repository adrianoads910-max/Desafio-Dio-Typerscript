import { CompanyAccount } from './class/CompanyAccount'
import { CustomAccount } from './class/CustomAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccountTrue: PeopleAccount = new PeopleAccount(1, 'Nath', 10, true)
peopleAccountTrue.deposit(1000)
peopleAccountTrue.withdraw(50)

const customAccountTrue: CustomAccount = new CustomAccount('Nath', 10, true)
customAccountTrue.deposit(1000)
customAccountTrue.withdraw(50)

const peopleAccountFalse: PeopleAccount = new PeopleAccount(2, 'João', 50, false)
peopleAccountFalse.deposit(1000)
peopleAccountFalse.withdraw(550)

const companyAccount: CompanyAccount = new CompanyAccount("BB", 2, true)
companyAccount.getLoan(100000)

const newcompanyAccount: CompanyAccount = new CompanyAccount("Bradesco", 3, false)
newcompanyAccount.getLoan(500000)



