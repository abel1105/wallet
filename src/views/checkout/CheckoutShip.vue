<template>
  <div class="checkoutShip">
    <div class="checkoutShip-back">
      <router-link exact :to="{ name: 'checkout' }">
        <md-icon>arrow_back</md-icon>
      </router-link>
      <span>EDIT SHIPPING</span>
    </div>
    <div class="checkoutShip-box">
      <span class="checkoutShip-boxTitle">PERSONAL</span>
      <div class="checkoutShip-boxColumns">
        <div class="checkoutShip-boxInput">
          <input v-model="fullName" />
          <label>FULL NAME*</label>
        </div>
        <div class="checkoutShip-boxInput">
          <input v-model="phone" />
          <label>PHONE*</label>
        </div>
      </div>
      <div class="checkoutShip-box">
        <span class="checkoutShip-boxTitle">SHIPPING</span>
        <div class="checkoutShip-boxColumns">
          <div class="checkoutShip-boxInput">
            <input v-model="city" />
            <label>CITY*</label>
          </div>
          <div class="checkoutShip-boxInput">
            <input v-model="zip" />
            <label>ZIP</label>
          </div>
        </div>
        <div class="checkoutShip-boxColumn">
          <div class="checkoutShip-boxInput">
            <input v-model="address" />
            <label>ADDRESS*</label>
          </div>
        </div>
      </div>
      <div class="checkoutShip-btn">
        <router-link exact :to="{ name: 'checkout' }">
          <Button text="CANCEL" :is-active="false" />
        </router-link>
        <Button text="CONTINUE" @click="setPersonalData" />
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button';
export default {
  name: 'checkoutShip',
  components: { Button },
  data() {
    return {
      fullName: this.$store.state.personal.fullName,
      phone: this.$store.state.personal.phone,
      city: this.$store.state.personal.city,
      zip: this.$store.state.personal.zip,
      address: this.$store.state.personal.address
    };
  },
  methods: {
    setPersonalData() {
      this.$store.commit('setPersonalData', this.$data);
      this.$router.push({ name: 'checkout' });
    }
  }
};
</script>

<style lang="scss" scoped>
.checkoutShip {
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

    &Column {
      display: grid;
      grid-template-columns: 1fr;
      margin-top: 16px;
    }

    &Columns {
      display: grid;
      grid-column-gap: 20px;
      grid-template-columns: 1fr 1fr;
      margin-top: 16px;
    }

    &Input {
      position: relative;
      display: flex;
      flex-direction: column;

      input {
        height: 54px;
        width: 100%;
        font-size: 20px;
        font-weight: bold;
        border: solid 1px $black;
        border-radius: 4px;
        height: 54px;
        margin-top: 24px;
        padding: 0 16px;

        &:focus {
          outline: $primary_super_light auto 3px;

          & + label {
            color: $primary;
          }
        }
      }

      label {
        position: absolute;
        top: 0;
        font-size: 16px;
        font-weight: bold;
        color: $black;
        margin-bottom: 4px;
        transition: color 0.1s ease-in-out;
      }
    }
  }

  &-btn {
    display: grid;
    grid-column-gap: 20px;
    grid-template-columns: 1fr 1fr;
  }
}
</style>
