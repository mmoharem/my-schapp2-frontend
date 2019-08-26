import { tassign } from "tassign";

export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_ERROR = 'GET_USERS_ERROR';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_ERROR = 'GET_USER_ERROR';
export const GET_PARENT_SUCCESS = 'GET_PARENT_SUCCESS';
export const GET_PARENT_ERROR = 'GET_PARENT_ERROR';
export const GET_SIBLINGS_SUCCESS = 'GET_SIBLINGS_SUCCESS';
export const GET_SIBLINGS_ERROR = 'GET_SIBLINGS_ERROR';


export interface IUserState {
  users: [];
  user: object;
  parent: object;
  siblings: [];

  // reqType: string;
  error: object;
}

export const INIT_USERS_STATE: IUserState = {
  users: [],
  user: {} = null,
  parent: {} = null,
  siblings: [],
  // reqType: null,
  error: {}
}

function getUsersFn(state = INIT_USERS_STATE, action): IUserState {
  return tassign(state, {
    users: [...action.users],
    // reqType: null,
  });
}

function getUserFn(state = INIT_USERS_STATE, action): IUserState {
  return tassign(state, {
    user: action.user,
    // reqType: null,
  });
}

function getParentFn(state = INIT_USERS_STATE, action): IUserState {
  return tassign(state, {
    parent: action.parent,
    // reqType: null,
  });
}

function getSiblingsFn(state = INIT_USERS_STATE, action): IUserState {
  return tassign(state, {
    siblings: action.siblings,
    // reqType: null,
  });
}

function getError(state = INIT_USERS_STATE, action): IUserState {
  return tassign(state, {
    error: action.error,
    // reqType: 'get'
  });
}

export function usersReducer(state: IUserState = INIT_USERS_STATE, action): IUserState {

  switch(action.type) {
    case GET_USERS_SUCCESS:
      return getUsersFn(state, action)
    ;

    case GET_USER_SUCCESS:
      return getUserFn(state, action)
    ;

    case GET_PARENT_SUCCESS:
      return getParentFn(state, action)
    ;

    case GET_SIBLINGS_SUCCESS:
      return getSiblingsFn(state, action)
    ;

    case GET_USERS_ERROR:
      return getError(state, action)
    ;
  }

  return state;
}
