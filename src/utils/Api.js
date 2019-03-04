import { TransactionTypes } from "../constants/TransactionTypes";

const hasFundsToWithdraw = [
  {
    type: TransactionTypes.Fund,
    amount: 500
  },
  {
    type: TransactionTypes.Withdraw,
    amount: 100
  },
  {
    type: TransactionTypes.Fund,
    amount: 250
  }
];

const noFundsToWithdraw = [
  {
    type: TransactionTypes.Fund,
    amount: 500
  },
  {
    type: TransactionTypes.Withdraw,
    amount: 100
  },
  {
    type: TransactionTypes.Withdraw,
    amount: 400
  }
];

const get = () => hasFundsToWithdraw;

export const Api = {
  get
};
