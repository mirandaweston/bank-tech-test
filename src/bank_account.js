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

  // withdraw(amount) {
  //   this.balance -= amount;
  //   this.transactions.push({
  //     date: new Date(),
  //     credit: null,
  //     debit: amount,
  //     balance: this.balance
  //   });
  // }
}

module.exports = BankAccount;