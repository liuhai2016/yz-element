import YzForm from "../"
import YzFormItem from "../../form-item"
import YzInput from "../../input"
import YzButton from "../../button"

export default {
  title: 'YzForm',
  component: { YzForm }
}

export const Login = () => ({
  components: { YzForm, YzFormItem, YzInput, YzButton },
  template: `
    <yz-form class="form" ref="form" :model="user" :rules="rules">
      <yz-form-item label="用户名" prop="username">
        <!-- <yz-input v-model="user.username"></yz-input> -->
        <yz-input :value="user.username" @input="user.username=$event" placeholder="请输入用户名"></yz-input>
      </yz-form-item>
      <yz-form-item label="密码" prop="password">
        <yz-input type="password" v-model="user.password"></yz-input>
      </yz-form-item>
      <yz-form-item>
        <yz-button type="primary" @click="login">登 录</yz-button>
      </yz-form-item>
    </yz-form>
  `,
  data () {
    return {
      user: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码'
          },
          {
            min: 6,
            max: 12,
            message: '请输入6-12位密码'
          }
        ]
      }
    }
  },
  methods: {
    login () {
      console.log('button')
      this.$refs.form.validate(valid => {
        if (valid) {
          alert('验证成功')
        } else {
          alert('验证失败')
          return false
        }
      })
    }
  }
})