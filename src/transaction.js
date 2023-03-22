class Transaction {
  constructor() {
    this.date = '';
    this.type = '';
    this.amount = '';
    this.balance = '';
  }

  timestamp() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    return `${day}/${month}/${year}`;
  }

  save(amount, balance, type) {
    this.type = type;
    this.amount = amount.toFixed(2);
    if (type === 'deposit') {
      this.balance = (balance + amount).toFixed(2);
    } else if (type === 'withdrawal') {
      this.balance = (balance - amount).toFixed(2);
    }
    this.date = this.timestamp();
  }  
}

module.exports = Transaction;