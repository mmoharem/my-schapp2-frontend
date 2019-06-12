import { combineReducers } from "redux";
import { IGradeState, INIT_GRADES_STATE, gradesReducer } from '../../layout/app-pages/school/sch-grade/grades.store/grades.store';

export interface IAppState {
  grading: IGradeState;
}

export const INIT_STATE: IAppState = {
  grading: INIT_GRADES_STATE
}


export const rootReducer = combineReducers({
  grading: gradesReducer
})
