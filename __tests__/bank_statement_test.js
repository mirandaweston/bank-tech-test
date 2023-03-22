const BankStatement = require('../src/bank_statement.js');
const BankAccount = require('../src/bank_account.js');

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

  describe('print', () => {
    let account;
    let statement;
    let spy;

    beforeEach(() => {
      account = new BankAccount();
      statement = new BankStatement(account.transactions);

      spy = jest.spyOn(console, 'log').mockImplementation();
    });

    afterEach(() => {
      spy.mockRestore();
    })

    it('prints a statement with the correct headers', () => {
      statement.print();
      expect(spy).toHaveBeenCalledWith('date || credit || debit || balance');
    });

    it('prints a statement with one deposit', () => {
      const date = new Date('2023-01-10T00:00:00Z');
      const dateSpy = jest.spyOn(global, 'Date').mockImplementation(() => date);

      account.deposit(1000);
      statement.print();

      expect(spy).toHaveBeenCalledWith('date || credit || debit || balance');
      expect(spy).toHaveBeenCalledWith('10/01/2023 || 1000.00 || || 1000.00');
      dateSpy.mockRestore();
    })

    it('prints a statement with two deposits', () => {
      const dateOne = new Date('2023-01-10T00:00:00Z');
      const dateTwo = new Date('2023-01-13T00:00:00Z');
      const dateSpy = jest.spyOn(global, 'Date').mockImplementation(() => dateOne);

      account.deposit(1000);

      dateSpy.mockImplementation(() => dateTwo);
      account.deposit(2000);

      statement.print();

      expect(spy).toHaveBeenCalledWith('date || credit || debit || balance');
      expect(spy).toHaveBeenCalledWith('13/01/2023 || 2000.00 || || 3000.00');
      expect(spy).toHaveBeenCalledWith('10/01/2023 || 1000.00 || || 1000.00');
      dateSpy.mockRestore();
    })

    it('prints a statement with two deposits and one withdrawal', () => {
      const dateOne = new Date('2023-01-10T00:00:00Z');
      const dateTwo = new Date('2023-01-13T00:00:00Z');
      const dateThree = new Date('2023-01-14T00:00:00Z')
      const dateSpy = jest.spyOn(global, 'Date').mockImplementation(() => dateOne);
      
      account.deposit(1000);

      dateSpy.mockImplementation(() => dateTwo);
      account.deposit(2000);

      dateSpy.mockImplementation(() => dateThree);
      account.withdraw(500);

      statement.print();

      expect(spy).toHaveBeenCalledWith('date || credit || debit || balance');
      expect(spy).toHaveBeenCalledWith('14/01/2023 || || 500.00 || 2500.00');
      expect(spy).toHaveBeenCalledWith('13/01/2023 || 2000.00 || || 3000.00');
      expect(spy).toHaveBeenCalledWith('10/01/2023 || 1000.00 || || 1000.00');
      dateSpy.mockRestore();
    })
  });
 });