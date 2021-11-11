export const filterMarketData = marketData => {
  /*
  Filtered enabled, not restricted assets which are traded on spot and has USD quoteCurrency
  */
  return marketData.filter(
    item =>
      item.enabled &&
      !item.restricted &&
      item.baseCurrency &&
      item.type === 'spot' &&
      item.quoteCurrency === 'USD',
  );
};

export const addRemoveHoldings = (holdings, newItem) => {
  let newHoldings = [...holdings];
  const itemIndex = holdings.findIndex(
    singleHolding => singleHolding == newItem,
  );

  if (itemIndex === -1) {
    newHoldings.push(newItem);
  } else {
    newHoldings.splice(itemIndex, 1);
  }
  return newHoldings;
};
