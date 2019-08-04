<template>
  <div class="assetButtonGroup">
    <div
      class="assetButtonGroup-btn"
      :class="{ 'assetButtonGroup-btn--active': isETH }"
      @click="changeAsset(eth)"
    >
      <ETHLogo :is-active="isETH" />
      <span>Ethereum (ETH)</span>
    </div>
    <div
      class="assetButtonGroup-btn"
      :class="{ 'assetButtonGroup-btn--active': isBTC }"
      @click="changeAsset(btc)"
    >
      <BTCLogo :is-active="isBTC" />
      <span>Bitcoin (BTC)</span>
    </div>
  </div>
</template>

<script>
import ETHLogo from '@/components/svg/ETHLogo';
import BTCLogo from '@/components/svg/BTCLogo';
import { BTC, ETH } from '@/helpers/coins';
export default {
  name: 'assetButtonGroup',
  components: { BTCLogo, ETHLogo },
  computed: {
    asset() {
      return this.$store.state.asset;
    },
    isETH() {
      return this.asset === ETH;
    },
    isBTC() {
      return this.asset === BTC;
    },
    eth() {
      return ETH;
    },
    btc() {
      return BTC;
    }
  },
  methods: {
    changeAsset(asset) {
      this.$store.commit('changeAsset', asset);
    }
  }
};
</script>

<style lang="scss" scoped>
.assetButtonGroup {
  display: flex;
  border: solid 1px $black;
  height: 68px;
  border-radius: 4px;
  margin-top: 8px;
  cursor: pointer;

  &-btn {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    span {
      margin-left: 8px;
      font-weight: bold;
      font-size: 16px;
    }

    &--active {
      background: $black;
      color: $white;
    }
  }
}
</style>
