// const BankAccount = require('./src/bank_account');
// const BankStatement = require('./src/bank_statement');

// const account = new BankAccount();
// account.deposit(1000);
// account.deposit(2000);
// account.withdraw(500);

// const statement = new BankStatement(account.transactions);
// statement.print();

const Transaction = require('./src/transaction');
const BankAccount = require('./src/bank_account');
const BankStatement = require('./src/bank_statement');

const account = new BankAccount();
const statement = new BankStatement();
// const transaction = new Transaction();

account.deposit(1000);
account.deposit(2000);
account.withdraw(500);

statement.print(account);
