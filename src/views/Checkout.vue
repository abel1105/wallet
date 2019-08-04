<template>
  <div class="checkout animated fadeInRightBig">
    <Box>
      <transition
        :duration="500"
        mode="out-in"
        enter-active-class="animated bounceInLeft"
        leave-active-class="animated bounceOutLeft"
      >
        <router-view />
      </transition>
    </Box>
    <Detail />
  </div>
</template>

<script>
import Box from '@/components/Box';
import Detail from '@/components/Detail';

export default {
  name: 'checkout',
  components: { Detail, Box }
};
</script>

<style lang="scss" scoped>
.checkout {
  display: grid;
  max-width: 920px;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  margin: 72px auto;
  grid-template-columns: 540px 350px;
}
</style>
