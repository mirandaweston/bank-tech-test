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
  
    it('deposits money in a single transaction and adds the new transaction to the transactions array', () => {
      const account = new BankAccount();
      account.balance = 0;
      const date = new Date('2023-01-10T00:00:00Z');

      const dateSpy = jest.spyOn(global, 'Date').mockImplementation(() => date);
      account.deposit(1000);
    
      expect(account.transactions).toEqual([
        {
          date,
          credit: 1000,
          debit: null,
          balance: 1000,
        },
      ]);

      dateSpy.mockRestore();
    });

    it('deposits money in two transactions and adds the new transactions to the transactions array', () => {
      const account = new BankAccount();
      account.balance = 0;
      const dateOne = new Date('2023-01-10T00:00:00Z');
      const dateTwo = new Date('2023-01-13T00:00:00Z');

      const dateSpy = jest.spyOn(global, 'Date').mockImplementation(() => dateOne);
      account.deposit(1000);

      dateSpy.mockImplementation(() => dateTwo);
      account.deposit(2000);

      expect(account.transactions).toEqual([
        {
          date: dateOne,
          credit: 1000,
          debit: null,
          balance: 1000,
        },
        {
          date: dateTwo,
          credit: 2000,
          debit: null,
          balance: 3000,
        },
      ]);

      dateSpy.mockRestore();
    });   
  });

  describe('withdraw', () => {
    it('withdraws money and subtracts it from the account balance', () => {
      const account = new BankAccount();
      account.balance = 3000;
      account.withdraw(500);
      expect(account.balance).toBe(2500);
    });
  });
 });