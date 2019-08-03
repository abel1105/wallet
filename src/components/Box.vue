<template>
  <div class="box">
    <div class="box-title">
      <Logo />
      <div class="box-titleDetail">
        <span class="box-titleDetailCrypto">
          <md-icon>shopping_cart</md-icon>
          <span>{{ totalCrypto }} {{ asset }}</span>
        </span>
        <span class="box-titleDetailDollar">${{ totalUSD }} USD</span>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import Logo from '@/components/Logo';
export default {
  name: 'box',
  components: { Logo },
  computed: {
    totalCrypto() {
      return this.$store.getters.getTotalCrypto;
    },
    totalUSD() {
      return this.$store.getters.getTotalUSD;
    },
    asset() {
      return this.$store.state.asset;
    }
  }
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  max-width: 540px;
  box-shadow: $shadow;
  background: $white;
  padding: 24px 36px;
  border-radius: 8px;

  &-title {
    color: $primary;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid 1px $border;
    padding-bottom: 24.5px;

    &Detail {
      display: flex;
      flex-direction: column;
      text-align: right;

      &Crypto {
        color: $black;
        font-size: 20px;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: space-between;

        span {
          margin-left: 8px;
        }
      }

      &Dollar {
        color: $grey;
        font-size: 16px;
      }
    }
  }
}
</style>
