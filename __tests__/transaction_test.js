const Transaction = require('../src/transaction');

describe('Transaction', () => {
  let transaction;
  let dateSpy;

  beforeEach(() => {
    transaction = new Transaction();
    const date = new Date('2023-01-10T00:00:00Z');
    dateSpy = jest.spyOn(global, 'Date').mockImplementation(() => date);
  });

  afterEach(() => {
    dateSpy.mockRestore();
  });

  describe('timestamp', () => {
    test('it should return a string representing the current date', () => {
      const timestamp = transaction.timestamp();
      expect(timestamp).toBe('10/01/2023');
    });
  });

  describe('save', () => {
    it('saves a deposit transaction with the correct values', () => {
      const amount = 1000;
      const balance = 1000;
      const type = 'credit';
      transaction.save(amount, balance, type);
  
      expect(transaction.type).toBe(type);
      expect(transaction.amount).toBe('1000.00');
      expect(transaction.balance).toBe('1000.00');
  
      const timestamp = transaction.timestamp();
      expect(transaction.date).toBe(timestamp);
    });

    it('saves a withdrawal transaction with the correct values', () => {
      const amount = 500;
      const balance = 3000;
      const type = 'debit';
      transaction.save(amount, balance, type);
  
      expect(transaction.type).toBe(type);
      expect(transaction.amount).toBe('500.00');
      expect(transaction.balance).toBe('3000.00');
  
      const timestamp = transaction.timestamp();
      expect(transaction.date).toBe(timestamp);
    });
  });
});
