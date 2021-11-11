import {
  GET_MARKETS_REQUEST,
  GET_MARKETS_SUCCESS,
  GET_MARKETS_FAILURE,
} from './trackActionTypes';

const initialGlobalState = {
  isMarketsDataLoading: false,
  markets: [],
};

//************************ REDUCER ************************************

export const trackReducer = (state = initialGlobalState, action) => {
  let newState = state;
  switch (action.type) {
    case GET_MARKETS_REQUEST:
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
      console.log(filteredMarketData);
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
    default:
      return state;
  }
};

const filterMarketData = marketData => {
  return marketData.filter(
    item =>
      item.enabled &&
      !item.restricted &&
      item.baseCurrency &&
      item.type === 'spot' &&
      item.quoteCurrency === 'USD',
  );
};
