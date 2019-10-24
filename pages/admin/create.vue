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

    <el-button class="mb" type="success" plain @click="previewDialog = true">Предпросмотр</el-button>

    <el-upload
      class="mb"
      drag
      ref="upload"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-change="handleImageChange"
      :auto-upload="false"
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">Перетащите картинку <em>или нажмите</em></div>
      <div class="el-upload__tip" slot="tip">Файлы с расширением jpg/png</div>
    </el-upload>

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
      image: null,
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
        if (valid && this.image) {
          this.loading = true

          const formData = {
            title: this.controls.title,
            text: this.controls.text,
            image: this.image
          }

          try {
            await this.$store.dispatch('post/create', formData)
            this.$message.success('Пост успешно создан')
            this.$refs.upload.clearFiles()
            this.image = null
            this.controls.title = ''
            this.controls.text = ''
          } catch (e) {} finally {
            this.loading = false
          }
        } else {
          this.$message.warning('Форма не валидна')
        }
      })
    },
    handleImageChange(file, fileList) {
      this.image = file.raw
    }
  }
}
</script>

<style scoped>
  form {
    width: 600px;
  }
</style>
