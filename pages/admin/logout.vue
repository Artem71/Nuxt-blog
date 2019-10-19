<template>
  <div>
    <h1>logout</h1>
  </div>
</template>

<script>
export default {
  middleware: ['admin-auth'],
  layout: 'admin'
}
</script>
