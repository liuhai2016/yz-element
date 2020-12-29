<template>
  <div>
    <button @click="handleClick">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'YzButton',
  components: {},
  data () {
    return {}
  },
  computed: {},
  methods: {
    handleClick(evt) {
      this.$emit('click', evt)
      evt.preventDefault()
    }
  }
}
</script>

<style>
</style>
