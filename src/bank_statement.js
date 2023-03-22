class BankStatement {
  print(account) {
    console.log("date || credit || debit || balance");
    account.transactions.slice().reverse().forEach(transaction => {
      const credit = transaction.type === 'credit' ? transaction.amount : '';
      const debit = transaction.type === 'debit' ? transaction.amount : '';
      
      console.log(`${transaction.date} || ${credit ? credit + ' ' : ''}|| ${debit ? debit + ' ' : ''}|| ${transaction.balance}`);
    });
  }
}

module.exports = BankStatement;