export const filterMarketData = marketData => {
  return marketData.filter(
    item =>
      item.enabled &&
      !item.restricted &&
      item.baseCurrency &&
      item.type === 'spot' &&
      item.quoteCurrency === 'USD',
  );
};

export const sortMarketData = marketData => {
  return marketData;
};
