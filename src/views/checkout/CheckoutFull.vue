<template>
  <div class="checkoutFull">
    <div class="checkoutFull-ship">
      <div class="checkoutFull-title">
        <label>SHIP TO</label>
        <router-link :to="{ name: 'ship' }"><span>EDIT</span></router-link>
      </div>
      <div class="checkoutFull-box">
        <div class="checkoutFull-boxColumn">
          <span class="checkoutFull-boxTitle">{{ personal.fullName }}</span>
          <span class="checkoutFull-boxSubtitle">{{ personal.address }}</span>
        </div>
      </div>
    </div>
    <div class="checkoutFull-payment">
      <div class="checkoutFull-title">
        <label>PAYMENT</label>
        <router-link :to="{ name: 'payment' }"><span>EDIT</span></router-link>
      </div>
      <div class="checkoutFull-asset">
        <label>ASSET</label>
        <AssetButtonGroup />
      </div>
      <div class="checkoutFull-account">
        <label>ACCOUNT</label>
        <div class="checkoutFull-box">
          <div class="checkoutFull-boxColumn">
            <span class="checkoutFull-boxTitle">general account</span>
            <span class="checkoutFull-boxSubtitle">
              Balance {{ currentCrypto }} {{ asset }}
            </span>
          </div>
          <div class="checkoutFull-boxColumn">
            <span class="checkoutFull-boxDollar">
              - {{ totalCrypto }} {{ asset }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <router-link :to="{ name: 'thanks' }">
      <Button text="checkoutFull now" />
    </router-link>
  </div>
</template>

<script>
import AssetButtonGroup from '@/components/AssetButtonGroup';
import Button from '@/components/Button';
import { changeCoin } from '@/helpers/coins';
import * as d3 from 'd3-format';

export default {
  name: 'checkoutFull',
  components: { AssetButtonGroup, Button },
  computed: {
    personal() {
      return this.$store.state.personal;
    },
    asset() {
      return this.$store.state.asset;
    },
    totalCrypto() {
      return this.$store.getters.getTotalCrypto;
    },
    currentCrypto() {
      return d3.format('.5f')(changeCoin(this.$store.state.asset, 10000));
    }
  }
};
</script>

<style lang="scss" scoped>
.checkoutFull {
  display: flex;
  flex-direction: column;

  &-title {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 24px;

    label {
      font-size: 24px;
      font-weight: bold;
    }

    span {
      font-size: 16px;
      font-weight: bold;
      color: $primary;
      transition: color 0.1s ease-in-out;
      cursor: pointer;

      &:hover {
        color: $primary_light;
      }

      &:active {
        color: $primary_dark;
      }
    }
  }

  &-box {
    height: 81px;
    border: solid 1px $black;
    border-radius: 4px;
    padding: 16px 20px;
    margin-top: 8px;
    display: flex;

    &Column {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    &Title {
      font-size: 20px;
      font-weight: bold;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      text-transform: capitalize;
    }

    &Subtitle {
      font-size: 16px;
      color: $grey;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    &Dollar {
      font-size: 16px;
      font-weight: bold;
      color: $primary;
      justify-self: center;
      align-self: flex-end;
    }
  }

  &-ship {
    display: flex;
    flex-direction: column;
  }

  &-asset,
  &-account {
    margin-top: 16px;

    label {
      font-size: 20px;
      font-weight: bold;
    }
  }
}
</style>
