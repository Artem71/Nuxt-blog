<template>
  <div class="admin-wrapper">
    <el-container :style="{height: '100%'}">
      <el-aside width="250px">
        <app-admin-aside />
      </el-aside>
      <el-main>
        <nuxt />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import AppAdminAside from '@/components/admin/Aside'

export default {
  components: {
    AppAdminAside
  }
}
</script>

<style scoped>
  .admin-wrapper {
    width: 100%;
    height: 100vh;
  }
</style>
