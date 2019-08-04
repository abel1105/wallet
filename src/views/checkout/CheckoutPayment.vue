<template>
  <div class="checkoutPayment">
    <div class="checkoutPayment-back">
      <div @click="cancel">
        <md-icon>arrow_back</md-icon>
      </div>
      <span>EDIT PAYMENT</span>
    </div>
    <div class="checkoutPayment-box">
      <span class="checkoutPayment-boxTitle">ASSET</span>
      <div class="checkoutShip-boxColumn">
        <AssetButtonGroup />
      </div>
    </div>
    <div class="checkoutPayment-box">
      <span class="checkoutPayment-boxTitles">
        <span>FROM</span>
        <span>TO</span>
      </span>
      <div class="checkoutPayment-boxColumn">
        <div class="checkoutPayment-btnGroup">
          <div class="checkoutPayment-btnGroupBtn">
            <div class="checkoutPayment-btnGroupBtnCol">
              <label>general account</label>
              <span>0x3e…8C5c</span>
            </div>
          </div>
          <div class="checkoutPayment-btnGroupBtn">
            <div class="checkoutPayment-forward">
              <md-icon>arrow_forward</md-icon>
            </div>
            <div class="checkoutPayment-btnGroupBtnCol">
              <label>store Name</label>
              <span>0xd3…4hgr</span>
            </div>
            <div class="checkoutPayment-btnGroupBtnCol">
              <QRCode />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="checkoutPayment-box">
      <span class="checkoutPayment-boxTitle">
        <span>TRANSACTION FEE</span>
      </span>
      <div class="checkoutPayment-boxColumn">
        <div class="checkoutPayment-btnGroup">
          <div
            class="checkoutPayment-btnGroupBtn"
            :class="{ 'checkoutPayment-btnGroupBtn--active': gas === GAS_SLOW }"
            @click="changeGas(GAS_SLOW)"
          >
            <div class="checkoutPayment-btnGroupBtnCol">
              <label>slow</label>
              <span>{{ getGasByLevel(GAS_SLOW) }}</span>
            </div>
          </div>
          <div
            class="checkoutPayment-btnGroupBtn"
            :class="{
              'checkoutPayment-btnGroupBtn--active': gas === GAS_AVERAGE
            }"
            @click="changeGas(GAS_AVERAGE)"
          >
            <div class="checkoutPayment-btnGroupBtnCol">
              <label>average</label>
              <span>{{ getGasByLevel(GAS_AVERAGE) }} {{ asset }}</span>
            </div>
          </div>
          <div
            class="checkoutPayment-btnGroupBtn"
            :class="{ 'checkoutPayment-btnGroupBtn--active': gas === GAS_FAST }"
            @click="changeGas(GAS_FAST)"
          >
            <div class="checkoutPayment-btnGroupBtnCol">
              <label>fast</label>
              <span>{{ getGasByLevel(GAS_FAST) }} {{ asset }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="checkoutPayment-btn">
      <Button text="CANCEL" :is-active="false" @click="cancel" />
      <router-link exact :to="{ name: 'checkout' }">
        <Button text="CONTINUE" />
      </router-link>
    </div>
  </div>
</template>

<script>
import AssetButtonGroup from '@/components/AssetButtonGroup';
import QRCode from '@/components/svg/QRCode';
import * as d3 from 'd3-format';
import { gas, GAS_AVERAGE, GAS_FAST, GAS_SLOW } from '@/helpers/coins';
import Button from '@/components/Button';
export default {
  name: 'checkoutPayment',
  components: { Button, QRCode, AssetButtonGroup },
  data() {
    return {
      backup: {
        gas: this.$store.state.gas,
        asset: this.$store.state.asset
      }
    };
  },
  computed: {
    gas() {
      return this.$store.state.gas;
    },
    GAS_SLOW() {
      return GAS_SLOW;
    },
    GAS_AVERAGE() {
      return GAS_AVERAGE;
    },
    GAS_FAST() {
      return GAS_FAST;
    },
    asset() {
      return this.$store.state.asset;
    }
  },
  methods: {
    getGasByLevel(level) {
      return d3.format('.6f')(gas(this.$store.state.asset, level));
    },
    cancel() {
      this.$store.commit('changeAsset', this.backup.asset);
      this.$store.commit('changeGas', this.backup.gas);
      this.$router.push({ name: 'checkout' });
    },
    changeGas(level) {
      this.$store.commit('changeGas', level);
    }
  }
};
</script>

<style lang="scss" scoped>
.checkoutPayment {
  display: flex;
  flex-direction: column;

  &-back {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 24px;

    span {
      font-size: 24px;
      font-weight: bold;
      margin-left: 8px;
    }
  }

  &-box {
    display: flex;
    flex-direction: column;

    &Title {
      font-size: 20px;
      font-weight: bold;
      margin-top: 24px;
    }

    &Titles {
      display: flex;
      font-size: 20px;
      font-weight: bold;
      margin-top: 24px;

      span {
        flex: 1;
      }
    }

    &Column {
      display: grid;
      grid-template-columns: 1fr;
      margin-top: 8px;
    }

    &Columns {
      display: grid;
      grid-column-gap: 20px;
      grid-template-columns: 1fr 1fr;
      margin-top: 16px;
    }
  }

  &-btnGroup {
    display: flex;

    &Btn {
      position: relative;
      flex: 1;
      border: solid 1px $black;
      border-right: none;
      padding: 16px 24px;
      font-size: 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;

      label {
        font-weight: bold;
        text-transform: capitalize;
        cursor: pointer;
      }

      &--active {
        background: $black;
        color: $white;
      }

      &:first-child {
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      }
      &:last-child {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
        border-right: solid 1px $black;
      }

      &Col {
        display: flex;
        flex-direction: column;
      }
    }
  }

  &-forward {
    position: absolute;
    left: -16px;
    width: 32px;
    height: 32px;
    background: $black;
    border-radius: 50%;
    color: $white;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &-btn {
    display: grid;
    grid-column-gap: 20px;
    grid-template-columns: 1fr 1fr;
  }
}
</style>
