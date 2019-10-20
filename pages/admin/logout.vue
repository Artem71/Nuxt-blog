<template>
  <div>
    <h1>Очищаем данные...</h1>
  </div>
</template>

<script>
export default {
  middleware: ['admin-auth'],
  layout: 'admin',
  beforeCreate() {
    this.$store.dispatch('auth/logout')
    this.$router.push('/admin/login?message=logout')
  }
}
</script>
