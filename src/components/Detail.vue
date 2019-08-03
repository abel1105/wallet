<template>
  <div class="detail">
    <div class="detail-title">
      <span>DETAIL</span>
      <select v-model="asset">
        <option value="ETH">ETH</option>
        <option value="BTC">BTC</option>
      </select>
    </div>
    <div class="detail-store">
      <span class="detail-storeTitle">STORE</span>
      <span class="detail-storeName">Store Name Inc.</span>
    </div>
    <div class="detail-list">
      <span class="detail-listTitle">LIST</span>
      <div class="detail-listItem" v-for="(item, index) in items" :key="index">
        <span>{{ item.name }}</span>
        <span class="detail-listItemDollar">{{ getCrypto(item.USD) }}</span>
      </div>
    </div>
    <div class="detail-amount">
      <div class="detail-amountItem">
        <span>AMOUNT</span>
        <span>{{ amoutCrypto }} {{ this.asset }}</span>
      </div>
      <div class="detail-amountItem">
        <span>GAS FEE</span>
        <span>{{ gasCrypto }} {{ this.asset }}</span>
      </div>
    </div>
    <div class="detail-total">
      <span>TOTAL</span>
      <span>{{ totalCrypto }} {{ this.asset }}</span>
    </div>
  </div>
</template>

<script>
import { changeCoin } from '@/helpers/coins';
import * as d3 from 'd3-format';

export default {
  name: 'detail',
  computed: {
    items() {
      return this.$store.state.items;
    },
    asset: {
      get() {
        return this.$store.state.asset;
      },
      set(asset) {
        return this.$store.commit('changeAsset', asset);
      }
    },
    amoutCrypto() {
      return this.$store.getters.getAmountCrypto;
    },
    gasCrypto() {
      return this.$store.getters.getGasCrypto;
    },
    totalCrypto() {
      return this.$store.getters.getTotalCrypto;
    }
  },
  methods: {
    getCrypto(USD) {
      return `${d3.format('.7f')(changeCoin(this.asset, USD))} ${this.asset}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.detail {
  border: 1px solid $black;
  border-radius: 8px;
  max-width: 350px;
  width: 100%;
  padding: 24px 36px;
  align-self: start;

  &-title {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      font-size: 24px;
      font-weight: bold;
    }

    select {
      font-size: 16px;
      font-weight: bold;
      border: none;
      background: transparent;
      height: 32px;
      width: 56px;

      &:focus {
        outline: $primary_super_light auto 3px;
      }
    }
  }

  &-store {
    display: flex;
    flex-direction: column;
    margin-top: 16px;

    &Title {
      font-size: 20px;
      font-weight: bold;
    }

    &Name {
      font-size: 16px;
      margin-top: 8px;
    }
  }

  &-list {
    display: flex;
    flex-direction: column;
    margin-top: 24px;

    &Title {
      font-size: 20px;
      font-weight: bold;
    }

    &Item {
      margin-top: 4px;
      display: flex;
      justify-content: space-between;
      font-size: 16px;

      &Dollar {
        font-weight: bold;
      }

      &:first-of-type {
        margin-top: 8px;
      }

      &:last-of-type {
        padding-bottom: 8px;
        border-bottom: solid 1px $black;
      }
    }
  }

  &-amount {
    display: flex;
    flex-direction: column;
    font-size: 16px;
    font-weight: bold;

    &Item {
      font-size: 16px;
      font-weight: bold;
      margin-top: 8px;
      display: flex;
      justify-content: space-between;

      &:last-child {
        padding-bottom: 8px;
        border-bottom: solid 1px $black;
      }
    }
  }

  &-total {
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    font-weight: bold;
    margin-top: 8px;
  }
}
</style>
