export const numberWithCommas = x => {
  let nf = new Intl.NumberFormat('en-US');
  return nf.format(x);
};
