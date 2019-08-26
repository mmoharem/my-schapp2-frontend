import { tassign } from "tassign";

export const GET_PRINT_OBJECT = 'GET_PRINT_OBJECT';

export interface IPrintState {
  dataObj: object;
  printState: string;
}

export const INIT_PRINT_STATE: IPrintState = {
  dataObj: {},
  printState: null
}

function printObject(state = INIT_PRINT_STATE, action): IPrintState {
  return tassign(state, {
    dataObj: action.dataObj,
    printState: action.printState
  })
}

export function printReducer(state: IPrintState = INIT_PRINT_STATE, action): IPrintState {
  switch(action.type) {
    case GET_PRINT_OBJECT:
      return printObject(state, action)
    ;
  }

  return state;
}
