class BankStatement {
  constructor(transactions) {
    this.transactions = transactions;
  }

  format_amount(amount) {
    if (amount !== null) {
      return amount.toFixed(2);
    } else {
      return '';
    }
  }

  print() {

  }
}


module.exports = BankStatement;