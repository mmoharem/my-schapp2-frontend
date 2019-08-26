import { tassign } from "tassign";

export const GET_PAYMENT_SUCCESS = 'GET_PAYMENT_SUCCESS';
export const GET_TRANSACTIONS_SUCCESS = 'GET_TRANSACTIONS_SUCCESS';

export interface IAppPayment {
  payment: {};
  transactions: [];
}

export const INIT_PAYMENT_STATE: IAppPayment = {
  payment: null,
  transactions: {} = null,
}

function getPayment(state = INIT_PAYMENT_STATE, action): IAppPayment {
  return tassign(state, {
    payment: action.payment
  });
}
function getTransactions(state = INIT_PAYMENT_STATE, action): IAppPayment {
  return tassign(state, {
    transactions: [...action.transactions]
  });
}

export function paymentReducer(state: IAppPayment = INIT_PAYMENT_STATE, action) {
  switch(action.type) {

    case GET_PAYMENT_SUCCESS:
      return getPayment(state, action)
    ;

    case GET_TRANSACTIONS_SUCCESS:
      return getTransactions(state, action)
    ;
  }

  return state;
}
