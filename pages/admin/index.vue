<template>
  <h1>Admin page</h1>
</template>

<script>
export default {
  middleware: ['admin-auth'],
  layout: 'admin'
}
</script>
