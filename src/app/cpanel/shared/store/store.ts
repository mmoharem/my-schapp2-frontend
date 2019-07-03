import { combineReducers } from "redux";
import { IGradeState, INIT_GRADES_STATE, gradesReducer } from '../../layout/app-pages/school/sch-grade/grades.store/grades.store';
import { IBtnState, INIT_USER_BTN_STATE, userBtnReducer } from '../components/stud-table/table-btn.store';
import { IRequestState, INIT_REQUEST_STATE, requestReducer } from './http.store';

export interface IAppState {
  grading: IGradeState;
  userBtn: IBtnState;
  request: IRequestState;
}

export const INIT_STATE: IAppState = {
  grading: INIT_GRADES_STATE,
  userBtn: INIT_USER_BTN_STATE,
  request: INIT_REQUEST_STATE,
}


export const rootReducer = combineReducers({
  grading: gradesReducer,
  userBtn: userBtnReducer,
  request: requestReducer,
})
