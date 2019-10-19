<template>
  <el-card
    shadow="always"
    class="login-wrapper"
  >
    <el-form
    ref="form"
    :model="controls"
    :rules="rules"
    @submit.native.prevent="onSubmit"
    >
      <h1>Войти в панель администратора</h1>

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
          Войти
        </el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  layout: 'empty',
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
      console.log('good!')
    }
  }
}
</script>

<style scoped>
  .login-wrapper {
    width: 500px;
  }

  .mb2 {
    margin-bottom: 2rem;
  }
</style>
