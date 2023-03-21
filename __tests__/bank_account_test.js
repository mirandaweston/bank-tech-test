const BankAccount = require('../src/bank_account.js');

 describe('BankAccount', () => {
   describe('constructor', () => {
     it('constructs with an account balance of 0', () => {
       const account = new BankAccount();
       expect(account.balance).toBe(0);
     });

     it('constructs with an empty array of transactions', () => {
      const account = new BankAccount();
      expect(account.transactions).toEqual([]);
    });
   });

   describe('deposit', () => {
    it('deposits money and adds it to the account balance when balance is 0', () => {
      const account = new BankAccount();
      account.balance = 0
      account.deposit(1000);
    expect(account.balance).toBe(1000);
    });

    it('deposits money and adds it to the account balance when balance is 100', () => {
      const account = new BankAccount();
      account.balance = 100
      account.deposit(10);
      expect(account.balance).toBe(110);
      });
  });
 });