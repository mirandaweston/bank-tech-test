class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  deposit(amount) {
    this.balance += amount;
    this.transactions.push({
      date: new Date(),
      credit: amount,
      debit: null,
      balance: this.balance
    });
  }

  withdraw(amount) {
    this.balance -= amount;
  }
}

module.exports = BankAccount;