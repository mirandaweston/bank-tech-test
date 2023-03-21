const BankStatement = require('../src/bank_statement.js');


 describe('BankStatement', () => {
   describe('constructor', () => {
     it('should set the transactions property to the passed-in transactions', () => {
       const transactions = [
         { date: new Date('2023-01-10'), credit: 1000, debit: null, balance: 1000 },
         { date: new Date('2023-01-13'), credit: 2000, debit: null, balance: 3000 },
         { date: new Date('2023-01-14'), credit: null, debit: 500, balance: 2500 },
       ];

       const statement = new BankStatement(transactions);

       expect(statement.transactions).toEqual(transactions);
     });
   });

   describe('format_amount', () => {
    it('formats positive amounts to two decimal places', () => {
      const statement = new BankStatement([]);
      const formattedAmount = statement.format_amount(1000);
      expect(formattedAmount).toEqual('1000.00');
    });

    it('returns an empty string for null amounts', () => {
      const statement = new BankStatement([]);
      const formattedAmount = statement.format_amount(null);
      expect(formattedAmount).toEqual('');
    });
  });
 });