<template>
  <div class="thanks animated fadeInRightBig">
    <Box :hide-detail="true">
      <div class="thanks-box">
        <md-icon class="md-size-5x">check_circle</md-icon>
        <span class="thanks-boxTitle">Thanks for your purchase!</span>
        <span class="thanks-boxInfo">
          Your order number is:
          <b>CP190719</b>
          <br />
          We’ll email you an confirmation with detail and tracking info
        </span>
        <router-link exact :to="{ name: 'home' }">
          <Button text="continue shopping" />
        </router-link>
      </div>
    </Box>
  </div>
</template>

<script>
import Box from '@/components/Box';
import Button from '@/components/Button';
export default {
  name: 'thanks',
  components: { Button, Box }
};
</script>

<style lang="scss" scoped>
.thanks {
  display: grid;
  max-width: 920px;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  margin: 72px auto;

  &-box {
    display: flex;
    flex-direction: column;
    text-align: center;

    &Title {
      margin-top: 45px;
      font-size: 24px;
      font-weight: bold;
      text-transform: uppercase;
    }

    &Info {
      font-size: 16px;
      margin-top: 24px;
      text-align: center;

      b {
        color: $primary;
      }
    }
  }
}
</style>
