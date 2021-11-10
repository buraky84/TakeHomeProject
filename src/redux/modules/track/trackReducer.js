import {
  GET_MARKETS_REQUEST,
  GET_MARKETS_SUCCESS,
  GET_MARKETS_FAILURE,
} from './trackActionTypes';

const initialGlobalState = {
  markets: [],
};

//************************ REDUCER ************************************

export const trackReducer = (state = initialGlobalState, action) => {
  let newState = state;
  switch (action.type) {
    case GET_MARKETS_REQUEST:
      newState = {
        ...state,
        markets: [],
      };
      return newState;
    case GET_MARKETS_SUCCESS:
      newState = {
        ...state,
        markets: action.payload,
      };
      return newState;
    case GET_MARKETS_FAILURE:
      newState = {
        ...state,
        markets: [],
      };
      return newState;
    default:
      return state;
  }
};
