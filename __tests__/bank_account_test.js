const BankAccount = require('../src/bank_account.js');

 describe('BankAccount', () => {
   describe('constructor', () => {
     it('constructs with an account balance of 0', () => {
       const account = new BankAccount();
       expect(account.balance).toBe(0);
     });
   });
 });