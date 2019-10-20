<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="'/admin/list'">Посты</el-breadcrumb-item>
    <el-breadcrumb-item>Пост {{$route.params.id}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  middleware: ['admin-auth'],
  layout: 'admin'
}
</script>
