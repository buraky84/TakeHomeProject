import {
  GET_MARKETS_REQUEST,
  GET_MARKETS_SUCCESS,
  GET_MARKETS_FAILURE,
  ADD_REMOVE_HOLDINGS,
} from './trackActionTypes';
import {addRemoveHoldings, filterMarketData} from './trackDataHelper';

const initialGlobalState = {
  isMarketsDataLoading: false,
  markets: [],
  holdings: [],
};

//************************ REDUCER ************************************

export const trackReducer = (state = initialGlobalState, action) => {
  let newState = state;
  switch (action.type) {
    case GET_MARKETS_REQUEST:
      if (!action.payload.showSpinner) {
        return newState;
      }
      newState = {
        ...state,
        isMarketsDataLoading: true,
        markets: [],
      };
      return newState;
    case GET_MARKETS_SUCCESS:
      const filteredMarketData =
        action?.payload && action.payload.length > 0
          ? filterMarketData(action.payload)
          : [];
      //console.log(filteredMarketData);
      newState = {
        ...state,
        isMarketsDataLoading: false,
        markets: filteredMarketData,
      };
      return newState;
    case GET_MARKETS_FAILURE:
      newState = {
        ...state,
        isMarketsDataLoading: false,
        markets: [],
      };
      return newState;
    case ADD_REMOVE_HOLDINGS:
      console.log(action.payload);
      newState = {
        ...state,
        holdings: addRemoveHoldings(state.holdings, action.payload),
      };
      return newState;
    default:
      return state;
  }
};
