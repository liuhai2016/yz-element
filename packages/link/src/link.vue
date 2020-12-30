<template>
  <a
    :href="disabled ? null : href"
    :class="[disabled && 'disabled', !underline && 'on-underline']"
  >
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'YzLink',
  props: {
    href: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false
    },
    underline: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.disabled {
  cursor: not-allowed
}
.on-underline {
  text-decoration: none;
}
</style>
