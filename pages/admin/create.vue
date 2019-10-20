<template>
  <el-form
    ref="form"
    :model="controls"
    :rules="rules"
    @submit.native.prevent="onSubmit"
  >
    <h1>Создать новый пост</h1>

    <el-form-item label="Название поста" prop="title">
      <el-input v-model="controls.title" />
    </el-form-item>

    <el-form-item label="Текст в формате *md или *html" prop="text">
      <el-input
        v-model="controls.text"
        type="textarea"
        resize="none"
        :rows="10"
        />
    </el-form-item>

    <el-dialog title="Предпросмотр" :visible.sync="previewDialog">
      <div :key="controls.text">
        <vue-markdown>{{controls.text}}</vue-markdown>
      </div>
    </el-dialog>

    <el-button class="mb" type="success" plain @click="showDialog">Предпросмотр</el-button>

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
import VueMarkdown from 'vue-markdown'

export default {
  middleware: ['admin-auth'],
  layout: 'admin',
  data() {
    return {
      previewDialog: false,
      loading: false,
      controls: {
        title: '',
        text: ''
      },
      rules: {
        title: [
          { required: true, message: 'Название поста не должно быть пустым', trigger: 'blur' }
        ],
        text: [
          { required: true, message: 'Введите ваш текст', trigger: 'blur' }
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
              login: this.controls.title,
              password: this.controls.text
            }

            await this.$store.dispatch('post/create', formData)
            this.$message.success('Пост успешно создан')

            this.controls.title = ''
            this.controls.text = ''
          } catch (e) {} finally {
            this.loading = false
          }
        }
      })
    },
    showDialog() {
      this.previewDialog = true
    }
  }
}
</script>

<style scoped>
  form {
    width: 600px;
  }
</style>
