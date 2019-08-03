<template>
  <div class="pay">
    <Box>
      <router-view />
    </Box>
    <Detail />
  </div>
</template>

<script>
import Box from '@/components/Box';
import Detail from '@/components/Detail';
export default {
  name: 'Login',
  components: { Detail, Box }
};
</script>

<style lang="scss" scoped>
.pay {
  display: grid;
  max-width: 920px;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  margin: 72px auto;
  grid-template-columns: 540px 350px;
}
</style>
