<template>
  <el-form
    ref="form"
    :model="controls"
    :rules="rules"
    @submit.native.prevent="onSubmit"
  >
    <h1>Создать пользователя</h1>

    <el-form-item label="Логин" prop="login">
      <el-input v-model.trim="controls.login" />
    </el-form-item>

    <el-form-item label="Пароль" prop="password" class="mb2">
      <el-input v-model.trim="controls.password" type="password" />
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        native-type="submit"
        round
        :loading="loading"
        >
        Создать
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  middleware: ['admin-auth'],
  layout: 'admin',
  data() {
    return {
      loading: false,
      controls: {
        login: '',
        password: ''
      },
      rules: {
        login: [
          { required: true, message: 'Логин не должно быть пустым', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'Введите ваш пароль', trigger: 'blur' },
          { min: 6, message: 'Пароль должен быть не менее 6 символов', trigger: 'blur' }
        ],
      }
    }
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(async valid => {
        if (valid) {
          this.loading = true

          try {
            const formData = {
              login: this.controls.login,
              password: this.controls.password
            }

            await this.$store.dispatch('auth/createUser', formData)
            this.$message.success('Пользователь успешно добавлен')

            this.controls.login = ''
            this.controls.password = ''
            this.loading = false
          } catch (e) {
            this.loading = false
          }
        }
      })
    }
  },
}
</script>

<style scoped>
  form {
    width: 600px;
  }
</style>
