// Account details
export interface IAccount {
  id: number;
  type: string;
  balance: number;
  createdAt: Date;
  userId: number;
}

// Create new Account
export interface ICreateAccount {
  type: string;
  balance: number;
}

// Account(s) of the User
export interface IAccountUser {
  id: number;
  type: string;
  balance: number;
  createdAt: Date;
}

// Making a transaction
export interface ITransaction {
  accountSender: number;
  accountReciever: number;
  amount: number;
}
//
export interface ITransactionResponse {
  accountSender: number;
  accountReciever: number;
  amount: number;
  status: string;
  transactionTime: Date;
}

//// I don't konw should I right this in the model?
// Show transactions
export interface ITransactionShow {
  accountId: number;
  page: number;
  size: number;
}

export interface IBalance {
  balance: number;
}
