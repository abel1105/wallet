<template>
  <div class="home">
    <button class="home-button">
      <span>
        CHECK OUT WITH
        <Logo />
      </span>
    </button>
  </div>
</template>

<script>
import Logo from '@/components/Logo';
export default {
  name: 'home',
  components: { Logo }
};
</script>

<style lang="scss" scoped>
.home {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  &-button {
    position: relative;
    width: 350px;
    height: 70px;
    background: linear-gradient(
      180deg,
      $primary_light,
      $primary,
      $primary_dark
    );
    color: $white;
    padding: 0 34px;
    font-size: 14px;
    font-weight: bold;
    box-shadow: $primary_super_light 0 4px 8px;
    border-radius: 46px;
    transition: background 0.4s ease-in-out, color 0.4s ease-in-out;
    border: none;
    overflow: hidden;

    span {
      position: absolute;
      top: 0;
      left: 0;
      width: calc(100% - 68px);
      margin: 0 34px;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 1;
    }

    &::before {
      content: '';
      z-index: 0;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: transparent;
      transition: background 0.2s ease-in-out;
    }

    &:hover {
      &::before {
        background: rgba(255, 255, 255, 0.2);
      }
    }

    &:active {
      border-style: none;

      &::before {
        background: rgba(0, 0, 0, 0.2);
      }
    }
  }
}
</style>
