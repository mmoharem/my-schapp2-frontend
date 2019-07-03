import { tassign } from "tassign";

export const GET_GRADES = 'GET_GRADES';

export interface IGradeState {
  grades: any[];
}

export const INIT_GRADES_STATE: IGradeState = {
  grades: []
}

export function gradesReducer(state = INIT_GRADES_STATE, action) {
  switch(action.type) {
    case GET_GRADES:

      return tassign(state, {
        grades: [...action.grades]
      })
    ;
  }
  return state;
}
