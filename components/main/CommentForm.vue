<template>
  <el-form
    ref="form"
    :model="controls"
    :rules="rules"
    @submit.native.prevent="onSubmit"
  >
  <h1>Добавить комментарий</h1>
  <el-form-item label="Ваше имя" prop="name">
    <el-input v-model.trim="controls.name"></el-input>
  </el-form-item>

  <el-form-item label="Текст комментария" prop="text">
    <el-input
      type="textarea"
      resize="none"
      :rows="2"
      v-model="controls.text"

    />
  </el-form-item>
  <el-form-item>
    <el-button
      type="primary"
      native-type="submit"
      round
      >
      Create
    </el-button>
  </el-form-item>
</el-form>
</template>

<script>
export default {
  data() {
    return {
      controls: {
        name: '',
        text: ''
      },
      rules: {
        name: [
          { required: true, message: 'Имя не должно быть пустым', trigger: 'blur' }
        ],
         text: [
          { required: true, message: 'Введите ваш комментарий', trigger: 'blur' }
        ],
      }
    }
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          console.log('submit!');
        }
      });
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
