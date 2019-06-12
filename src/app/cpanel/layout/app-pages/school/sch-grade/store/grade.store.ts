// import { grade } from 'src/app/cpanel/shared/interfaces/app-interface';
import { tassign } from "tassign";

export const GET_GRADES = 'GET_GRADES';

export interface IGradeState {
  grades: any[];
}

export const INIT_GRADES_STATE: IGradeState = {
  grades: [
    // {id: 1, name: 'first'}
  ]
}


function getGrades(state = INIT_GRADES_STATE, action): IGradeState {

  // let gr = {grades: [...state.grades, ...action.grades]}
  // console.log(gr)
  return tassign(state, {

    grades: [...action.grades]
  });

}

export function gradesReducer (state: IGradeState = INIT_GRADES_STATE, action): IGradeState {
  switch(action.type) {
    case GET_GRADES:
    return getGrades(state, action);
    // console.log(getGrades(state, action));
  }

  return state;
}
