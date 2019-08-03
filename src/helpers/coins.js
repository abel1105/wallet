export const ETH = 'ETH';
export const BTC = 'BTC';

export const GAS_SLOW = 'SLOW';
export const GAS_AVERAGE = 'AVERAGE';
export const GAS_FAST = 'FAST';

export const USD_TO_BTC = USD => {
  return USD * 0.0000929552903644405;
};

export const USD_TO_ETH = USD => {
  return USD * 0.0045045045045045045;
};

export const changeCoin = (asset, USD) => {
  if (asset === ETH) {
    return USD_TO_ETH(USD);
  } else {
    return USD_TO_BTC(USD);
  }
};

export const getUSDByGas = level => {
  if (level === GAS_AVERAGE) {
    return 0.04662;
  } else if (level === GAS_SLOW) {
    return 0.01776;
  } else if (level === GAS_FAST) {
    return 0.09324;
  }
};

export const gas = (asset, level) => {
  return changeCoin(asset, getUSDByGas(level));
};
