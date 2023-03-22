const Transaction = require('./transaction');

class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  deposit(amount, transaction = new Transaction()) {
    this.balance += amount;
    transaction.save(amount, this.balance, 'credit');
    this.transactions.push(transaction);
  }

  withdraw(amount, transaction = new Transaction()) {
    this.balance -= amount;
    transaction.save(amount, this.balance, 'debit');
    this.transactions.push(transaction);
  }
}

module.exports = BankAccount;