<template>
  <div class="pay">
    <Box>
      <router-view />
    </Box>
  </div>
</template>

<script>
import Box from '@/components/Box';
export default {
  name: 'Login',
  components: { Box }
};
</script>

<style lang="scss" scoped>
.pay {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}
</style>
