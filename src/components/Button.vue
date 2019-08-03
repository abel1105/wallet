<template>
  <button class="button">
    <span>
      {{ text }}
    </span>
  </button>
</template>

<script>
export default {
  name: 'button',
  props: {
    text: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss" scoped>
.button {
  position: relative;
  width: 100%;
  height: 54px;
  border-radius: 4px;
  border-style: none;
  background: $primary;
  color: $white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 16px;

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

  span {
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 68px);
    margin: 0 34px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
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
</style>
