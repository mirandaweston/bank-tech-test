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
    console.log("date || credit || debit || balance");
    this.transactions.slice().reverse().forEach((t) => {
      console.log(`${t.date.toLocaleDateString('en-GB')} || ${this.format_amount(t.credit)} || ${this.format_amount(t.debit)} || ${this.format_amount(t.balance)}`);
    });
  }
}


module.exports = BankStatement;