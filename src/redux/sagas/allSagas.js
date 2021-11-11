import {call, put, takeLatest} from 'redux-saga/effects';
import apis from './apis';
import {TRACK_ACTIONS} from '../actionTypes';

const httpSuccessChecker = response => {
  if (!response) {
    return false;
  }
  const {ok, status} = response;
  return !(!ok && (status > 299 || status < 200)) ? true : false;
};

const $A = (type, payload) => ({
  type,
  payload,
});

const getCoinMarketsRequestSaga = function* (action) {
  try {
    const response = yield call(apis.getMarkets);
    if (response) {
      yield put($A(TRACK_ACTIONS.GET_MARKETS_SUCCESS, response.data.result));
    }
  } catch (err) {
    console.log('error => ', err);
    yield put($A(TRACK_ACTIONS.GET_MARKETS_FAILURE, err));
  }
};

export default function* rootSaga() {
  yield takeLatest(
    TRACK_ACTIONS.GET_MARKETS_REQUEST,
    getCoinMarketsRequestSaga,
  );
}
