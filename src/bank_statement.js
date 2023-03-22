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
  
    const reversedTransactions = this.transactions.slice().reverse();
  
    for (const transaction of reversedTransactions) {

      const credit = transaction.credit ? this.format_amount(transaction.credit) : '';
      const debit = transaction.debit ? this.format_amount(transaction.debit) : '';
  
      const creditSpace = credit === '' || debit === null ? '' : ' ';
      const debitSpace = debit === '' || credit === null ? '' : ' ';
  
      console.log(`${transaction.date.toLocaleDateString('en-GB')} ||${credit ? ` ${credit} ` : ' '}||${debit ? ` ${debit} ` : ' '}|| ${this.format_amount(transaction.balance)}`);
    }
  }
  
  
}


module.exports = BankStatement;