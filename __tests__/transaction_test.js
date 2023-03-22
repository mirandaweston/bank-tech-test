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
    test('it should update the transaction properties for a deposit', () => {
      transaction.save(1000, 1000, 'deposit');
      expect(transaction.type).toBe('deposit');
      expect(transaction.amount).toBe('1000.00');
      expect(transaction.balance).toBe('2000.00');
      expect(transaction.date).toBe('10/01/2023');
    });

    test('it should update the transaction properties for a withdrawal', () => {
      transaction.save(500, 3000, 'withdrawal');
      expect(transaction.type).toBe('withdrawal');
      expect(transaction.amount).toBe('500.00');
      expect(transaction.balance).toBe('2500.00');
      expect(transaction.date).toBe('10/01/2023');
    });
  });
});
