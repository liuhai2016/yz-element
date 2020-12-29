import YzInput from "../"

export default {
  title: "YzInput",
  component: YzInput
}

export const Text = () => ({
  components: { YzInput },
  template: '<yz-input v-model="value"></yz-input>',
  data() {
    return {
      value: 'admin'
    }
  },
})

export const Password = () => ({
  components: { YzInput },
  template: '<yz-input type="password" v-model="value"></yz-input>',
  data() {
    return {
      value: 'admin'
    }
  },
})