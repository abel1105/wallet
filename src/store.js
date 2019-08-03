import Vue from 'vue';
import Vuex from 'vuex';
import { changeCoin, ETH, GAS_AVERAGE, getUSDByGas } from '@/helpers/coins';
import * as d3 from 'd3-format';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    asset: ETH,
    gas: GAS_AVERAGE,
    personal: {
      fullName: 'JOHN DOE',
      phone: '+886 912 345 678',
      city: 'New York',
      zip: '12041',
      address: '132, My Street, Kingston'
    },
    items: [
      {
        name: 'First Product (3)',
        USD: 89.45
      },
      {
        name: 'Second Product (1)',
        USD: 7.34
      }
    ]
  },
  getters: {
    getTotalUSD(state) {
      return d3.format('.2f')(
        state.items.reduce((acc, item) => acc + item.USD, 0) +
          getUSDByGas(state.gas)
      );
    },
    getTotalCrypto(state) {
      return d3.format('.5f')(
        changeCoin(
          state.asset,
          state.items.reduce((acc, item) => acc + item.USD, 0) +
            getUSDByGas(state.gas)
        )
      );
    }
  },
  mutations: {},
  actions: {}
});
