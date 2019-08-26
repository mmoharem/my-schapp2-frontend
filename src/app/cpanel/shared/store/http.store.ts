import { tassign } from "tassign";

export const GET_REQUEST_SUCCESS = 'GET_REQUEST_SUCCESS';
export const POST_REQUEST_SUCCESS = 'POST_REQUEST_SUCCESS';
export const GET_REQUEST_ERROR = 'GET_REQUEST_ERROR';
export const POST_REQUEST_ERROR = 'POST_REQUEST_ERROR';

export interface IRequestState {
  result: { data: object };
  reqType: string;
  error: object;
}

export const INIT_REQUEST_STATE: IRequestState = {
  result: { data: {} },
  reqType: null,
  error: {}
}

function requestSuccess(state = INIT_REQUEST_STATE, action): IRequestState {
  return tassign(state, {
    result: action.result,
    reqType: null,
  });
}

function requestError(state = INIT_REQUEST_STATE, action): IRequestState {
  return tassign(state, {
    error: action.error,
    reqType: 'get'
  });
}

export function requestReducer(state: IRequestState = INIT_REQUEST_STATE, action): IRequestState {

  switch(action.type) {
    case GET_REQUEST_SUCCESS:
      return requestSuccess(state, action);
  }

  switch(action.type) {
    case GET_REQUEST_ERROR:
      return requestError(state, action);
  }

  return state;
}
