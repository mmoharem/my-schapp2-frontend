import { userStudData } from '../../interfaces/app-interface';
import { tassign } from "tassign";

export const GET_USER_BTN_OBJ = 'GET_USER_BTN_OBJ';

export interface IBtnState {
  user: userStudData;
}

export const INIT_USER_BTN_STATE: IBtnState = {
  user: null,
}

export function userBtnReducer(state = INIT_USER_BTN_STATE, action) {
  switch(action.type) {
    case GET_USER_BTN_OBJ:
      return tassign(state, {
        user: action.user
      })
    ;
  }
  return state;
}
