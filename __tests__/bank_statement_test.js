const BankStatement = require('../src/bank_statement.js');
const BankAccount = require('../src/bank_account.js');

 describe('BankStatement', () => {

  describe('print', () => {
    let account;
    let statement;
    let spy;

    beforeEach(() => {
      account = new BankAccount();
      statement = new BankStatement(account);

      spy = jest.spyOn(console, 'log').mockImplementation();
    });

    afterEach(() => {
      spy.mockRestore();
    })

    it('prints a statement with the correct headers', () => {
      statement.print(account);
      expect(spy).toHaveBeenCalledWith('date || credit || debit || balance');
    });

    it('prints a statement with one deposit', () => {
      const date = new Date('2023-01-10T00:00:00Z');
      const dateSpy = jest.spyOn(global, 'Date').mockImplementation(() => date);

      account.deposit(1000);
      statement.print(account);

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

      statement.print(account);

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

      statement.print(account);

      expect(spy).toHaveBeenCalledWith('date || credit || debit || balance');
      expect(spy).toHaveBeenCalledWith('14/01/2023 || || 500.00 || 2500.00');
      expect(spy).toHaveBeenCalledWith('13/01/2023 || 2000.00 || || 3000.00');
      expect(spy).toHaveBeenCalledWith('10/01/2023 || 1000.00 || || 1000.00');
      dateSpy.mockRestore();
    })
  });
 });