const Transaction = require('../src/transaction');

describe('Transaction', () => {
  describe('timestamp', () => {
    test('it should return a string representing the current date', () => {
    transaction = new Transaction();
    const date = new Date('2023-01-10T00:00:00Z');
    dateSpy = jest.spyOn(global, 'Date').mockImplementation(() => date);
    const timestamp = transaction.timestamp();
    expect(timestamp).toBe('10/01/2023');
    dateSpy.mockRestore();
    });
  });
});
