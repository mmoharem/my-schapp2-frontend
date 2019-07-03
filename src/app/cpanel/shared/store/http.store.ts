import { tassign } from "tassign";

export const GET_REQUEST_ITEM_SUCCESS = 'GET_REQUEST_ITEM_SUCCESS';
export const GET_REQUEST_ITEMS_SUCCESS = 'GET_REQUEST_ITEMS_SUCCESS';

export interface IRequestState {
  request: any[];
}

export const INIT_REQUEST_STATE: IRequestState = {
  request : null
}

function getRequestItem(state = INIT_REQUEST_STATE, action): IRequestState {
  return tassign(state, {
    request: action.request
  });
}

function getRequestItems(state = INIT_REQUEST_STATE, action): IRequestState {
  return tassign(state, {
    request: [...action.request]
  });
}

export function requestReducer(state: IRequestState = INIT_REQUEST_STATE, action): IRequestState {

  switch(action.type) {
    case GET_REQUEST_ITEM_SUCCESS:
      return getRequestItem(state, action);
  }

  switch(action.type) {
    case GET_REQUEST_ITEMS_SUCCESS:
      return getRequestItems(state, action);
  }

  return state;
}
