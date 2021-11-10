import {} from './newsActionTypes';

const initialGlobalState = {};

//************************ REDUCER ************************************

export const newsReducer = (state = initialGlobalState, action) => {
  let newState = state;
  switch (action.type) {
    default:
      return state;
  }
};
