const Transaction = require("../src/transaction");
const BankAccount = require("../src/bank_account");
const BankStatement = require("../src/bank_statement");

describe("Bank Account Integration Test", () => {
  it("should deposit, withdraw and print a bank statement", () => {
    const account = new BankAccount();

    const dateOne = new Date("2023-01-10T00:00:00Z");
    const dateTwo = new Date("2023-01-13T00:00:00Z");
    const dateThree = new Date("2023-01-14T00:00:00Z");
    const dateSpy = jest
      .spyOn(global, "Date")
      .mockImplementation(() => dateOne);

    account.deposit(1000);

    dateSpy.mockImplementation(() => dateTwo);
    account.deposit(2000);

    dateSpy.mockImplementation(() => dateThree);
    account.withdraw(500);

    const statement = new BankStatement();
    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    statement.print(account);

    expect(consoleSpy).toHaveBeenCalledWith(
      "date || credit || debit || balance"
    );
    expect(consoleSpy).toHaveBeenCalledWith(
      "14/01/2023 || || 500.00 || 2500.00"
    );
    expect(consoleSpy).toHaveBeenCalledWith(
      "13/01/2023 || 2000.00 || || 3000.00"
    );
    expect(consoleSpy).toHaveBeenCalledWith(
      "10/01/2023 || 1000.00 || || 1000.00"
    );

    dateSpy.mockRestore();
  });
});
