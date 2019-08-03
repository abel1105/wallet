<template>
  <div class="login">
    <span class="login-title">pay with Crypto pay</span>
    <div class="login-input">
      <input type="email" v-model="email" />
      <label>EMAIL</label>
    </div>
    <div class="login-input">
      <input type="password" v-model="password" />
      <label>PASSWORD</label>
    </div>
    <Button text="LOGIN" />
    <span class="login-forget">forgot your password?</span>
  </div>
</template>

<script>
import Button from '@/components/Button';
export default {
  name: 'login',
  components: { Button },
  data() {
    return {
      email: '',
      password: ''
    };
  }
};
</script>

<style lang="scss" scoped>
.login {
  margin-top: 16.5px;
  display: flex;
  flex-direction: column;

  &-title {
    margin: 8px 0;
    text-transform: uppercase;
    font-size: 20px;
    font-weight: bold;
  }

  &-input {
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 8px 0;

    label {
      position: absolute;
      top: 0;
      font-size: 16px;
      font-weight: bold;
      color: $black;
      margin-bottom: 4px;
      transition: color 0.1s ease-in-out;
    }

    input {
      margin-top: 24px;
      height: 54px;
      width: 100%;
      font-size: 20px;
      font-weight: bold;
      border-radius: 4px;
      border: solid 1px $black;
      padding: 0 16px;

      &:focus {
        outline: $primary_super_light auto 3px;

        & + label {
          color: $primary;
        }
      }
    }
  }

  &-forget {
    width: 100%;
    text-align: center;
    cursor: pointer;
    text-transform: capitalize;
    color: rgba(0, 0, 0, 0.2);
    font-size: 16px;
    font-weight: bold;
    margin-top: 8px;
  }
}
</style>
