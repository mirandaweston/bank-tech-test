# Bank Tech Test

### This is a program allowing the user to input deposit amounts and withdrawal amounts. The program then returns a statement providing the date of transaction, amount deposited or withdrawn, and account balance.

The original specificaion for this tech test can be found here[https://github.com/makersacademy/course/blob/main/individual_challenges/bank_tech_test.md].


## 1. My approach

My priority for this program was to write clean, readable, reusable code. I followed a TDD approach from the start, writing behaviour-driven tests before the code itself. This program evolved from two classes to three as I chose to create the Transaction class, using dependency injection to ensure separation of concerns. Once all tests were passing and the program was functional, I then began refactoring the classes and test suites to uphold the DRY principle.

The program is structured into three classes with their respective responsibilities as follows:

- Transaction: represents a single transaction, storing its date, type (credit or debit), amount and balance
- BankAccount: represents a bank account that handles deposits and withdrawals (by saving them as transactions and updating the account balance)
- BankStatement: responsible for printing a bank statement

## 2. Installation

_First, clone this repo by running the command below in terminal._

```javascript
git clone https://github.com/mirandaweston/bank-tech-test.git

```
_Then, you will need to install Node.js dependencies by running the following command._

```javascript

npm install

```

## 3. Running the program

In order to run the program, navigate to the src directory by running `cd src` and then run `node` to enter Node.js.

You can now start banking! Below is an example of the program running in terminal.

```javascript

Welcome to Node.js v19.5.0.
Type ".help" for more information.
> const BankAccount = require('./bank_account');
undefined
> const BankStatement = require('./bank_statement');
undefined
> const account = new BankAccount();
undefined
> const statement = new BankStatement(account.transactions);
undefined
> account.deposit(1000);
undefined
> account.deposit(2000);
undefined
> account.withdraw(500);
undefined
> statement.print();
date || credit || debit || balance
21/03/2023 || || 500.00 || 2500.00
21/03/2023 || 2000.00 || || 3000.00
21/03/2023 || 1000.00 || || 1000.00


```

## 4. Running the tests using Jest

_Run the following command to ensure you are in the right directory:_

```javascript
cd bank-tech-test

```
To run both the BankAccount and BankStatement test suites at the same time:

```javascript
npm test
```

To run the test suite for the BankAccount class only:

```javascript
npm test bank_account_test.js
```
To run the test suite for the BankStatement class only:

```javascript
npm test bank_statement_test.js
```
