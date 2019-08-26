import { tassign } from "tassign";

export const GET_PAGINAT_DATA = 'GET_PAGINAT_DATA';
export const PAGINATE_NEXT = 'PAGINATE_NEXT';
export const PAGINATE_PREV = 'PAGINATE_PREV';

export interface IAppPaginate {
  pagData: object;
  pagPage: number;
  source: string;
}

export const INIT_PAGINAT_STATE: IAppPaginate = {
  pagData: {},
  pagPage: 0,
  source: null
}

function getPagData(state = INIT_PAGINAT_STATE, action): IAppPaginate {
  return tassign(state, {
    pagData: action.pagData,
    source: action.source
  });
}

function pagPrev(state = INIT_PAGINAT_STATE, action): IAppPaginate {
  return tassign(state, {
    // pagPage:
  })
}

export function paginatReducer(state: IAppPaginate = INIT_PAGINAT_STATE, action) {
  switch(action.type) {
    case GET_PAGINAT_DATA:
      return getPagData(state, action)
    ;

    case PAGINATE_PREV:
      return pagPrev(state, action)
    ;
  }

  return state;
}
