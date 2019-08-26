import { combineReducers } from "redux";
import { IGradeState, INIT_GRADES_STATE, gradesReducer } from '../../layout/app-pages/school/sch-grade/grades.store/grades.store';
import { IBtnState, INIT_USER_BTN_STATE, userBtnReducer } from '../components/stud-table/table-btn.store';
import { IRequestState, INIT_REQUEST_STATE, requestReducer } from './http.store';
import { IUserState, INIT_USERS_STATE, usersReducer } from './users.store';
import { IAppPaginate, INIT_PAGINAT_STATE, paginatReducer } from '../components/pagination/pagination.store';
import { IAppPayment, INIT_PAYMENT_STATE, paymentReducer } from './payment.store';
import { IPrintState, INIT_PRINT_STATE, printReducer } from './print.store';

export interface IAppState {
  grading: IGradeState;
  users: IUserState;
  payments: IAppPayment
  userBtn: IBtnState;
  request: IRequestState;
  pagination: IAppPaginate;
  printing: IPrintState;
}

export const INIT_STATE: IAppState = {
  grading: INIT_GRADES_STATE,
  users: INIT_USERS_STATE,
  payments: INIT_PAYMENT_STATE,
  userBtn: INIT_USER_BTN_STATE,
  request: INIT_REQUEST_STATE,
  pagination: INIT_PAGINAT_STATE,
  printing: INIT_PRINT_STATE,
}


export const rootReducer = combineReducers({
  grading: gradesReducer,
  users: usersReducer,
  payments: paymentReducer,
  userBtn: userBtnReducer,
  request: requestReducer,
  pagination: paginatReducer,
  printing: printReducer,
})
