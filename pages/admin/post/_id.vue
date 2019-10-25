<template>
  <div class="post-wrapper">
    <el-breadcrumb separator="/" class="mb">
      <el-breadcrumb-item :to="'/admin/list'">Посты</el-breadcrumb-item>
      <el-breadcrumb-item>{{ post.title }}</el-breadcrumb-item>
    </el-breadcrumb>

    <el-form
      ref="form"
      :model="controls"
      :rules="rules"
      @submit.native.prevent="onSubmit"
    >
      <el-form-item label="Введите новый текст" prop="text">
        <el-input
          v-model="controls.text"
          type="textarea"
          resize="none"
          :rows="10"
        />
      </el-form-item>
      <div class="mb">
        <i class="el-icon-time"></i>
        <small class="mr">
          {{ this.post.date.toLocaleString() }}
        </small>
        <i class="el-icon-view"></i>
        <small>
          {{ this.post.views }}
        </small>
      </div>
      <el-form-item>
        <el-button
          type="primary"
          native-type="submit"
          round
          :loading="loading"
          >
          Обновить
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  middleware: ['admin-auth'],
  layout: 'admin',
  head() {
    return {
      title: `Пост | ${this.post.title}`
    }
  },
  validate({params}) {
    return Boolean(params.id)
  },
  async asyncData({store, params}) {
    const post = await store.dispatch('post/fetchAdminById', params.id)
    return {post}
  },
  data() {
    return {
      loading: false,
      controls: {
        text: '',
      },
      rules: {
        text: [
          { required: true, message: 'Текст не должен быть пустым', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(async valid => {
        if (valid) {
          this.loading = true

          const formDate = {
            text: this.controls.text,
            id: this.post._id
          }

          try {
            await this.$store.dispatch('post/update', formDate)
            this.$message.success('Пост успешно обновлен')
            this.controls.text = ''
          } catch (e) {} finally {
            this.loading = false
          }
        }
      })
    }
  },
  mounted() {
    this.controls.text = this.post.text
  }
}
</script>

<style scoped>
  .post-wrapper {
    width: 600px;
  }

  .mb {
    margin-bottom: 2rem;
  }

  .mr {
    margin-right: 2rem;
  }
</style>
