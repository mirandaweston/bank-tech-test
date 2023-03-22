const BankAccount = require('../src/bank_account.js');
const Transaction = require('../src/transaction.js');

describe('BankAccount', () => {
  let account;
  let transaction;

  beforeEach(() => {
    account = new BankAccount();
    transaction = new Transaction();
  });

  describe('constructor', () => {
    it('constructs with an account balance of 0', () => {
      expect(account.balance).toBe(0);
    });

    it('constructs with an empty array of transactions', () => {
      expect(account.transactions).toEqual([]);
    });
  });

  describe('deposit', () => {
    it('deposits money and adds it to the account balance', () => {
      account.deposit(1000);
    expect(account.balance).toBe(1000);
    });

    it('creates a new transaction with the correct type, amount, and balance', () => {
      account.deposit(1000, transaction);
      expect(transaction.type).toBe('credit');
      expect(transaction.amount).toBe('1000.00');
      expect(transaction.balance).toBe('1000.00');
    });

    it('adds a the new transaction to the transactions array', () => {
      account.deposit(1000, transaction);
      expect(account.transactions).toHaveLength(1);
      expect(account.transactions[0]).toBe(transaction);
    });
  });

  describe('withdraw', () => {
    it('withdraws money and subtracts it from the account balance', () => {
      account.deposit(1000)
      account.withdraw(500);
    expect(account.balance).toBe(500);
    });

    it('creates a new transaction with the correct type, amount, and balance', () => {
      account.balance = 3000;
      account.withdraw(500, transaction);
      expect(transaction.type).toBe('debit');
      expect(transaction.amount).toBe('500.00');
      expect(transaction.balance).toBe('2500.00');
    });

    it('adds the new transaction to the transactions array', () => {
      account.withdraw(500, transaction);
      expect(account.transactions).toHaveLength(1);
      expect(account.transactions[0]).toBe(transaction);
    });
  });
});
