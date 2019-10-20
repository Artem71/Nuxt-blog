<template>
  <el-table
    :data="posts"
    style="width: 100%">
    <el-table-column
      prop="title"
      label="Название"
    />
    <el-table-column label="Дата">
      <template slot-scope="{row: {date}}">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ new Date(date).toLocaleString() }}</span>
      </template>
    </el-table-column>
    <el-table-column label="Просмотры">
      <template slot-scope="{row: {views}}">
        <i class="el-icon-view"></i>
        <span style="margin-left: 10px">{{ views }}</span>
      </template>
    </el-table-column>
    <el-table-column label="Комментарии">
      <template slot-scope="{row: {comments}}">
        <i class="el-icon-message"></i>
        <span style="margin-left: 10px">{{ comments.length }}</span>
      </template>
    </el-table-column>
    <el-table-column label="Действия">
      <template slot-scope="{row}">
        <el-button
         @click="open(row._id)"
          type="primary"
          circle
          icon="el-icon-edit"
        >
        </el-button>
        <el-button
          @click="remove(row._id)"
          type="danger"
          circle
          icon="el-icon-delete"
        >
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  middleware: ['admin-auth'],
  layout: 'admin',
  async asyncData({store}) {
    const posts = await store.dispatch('post/fetchAdmin')
    return {posts}
  },
  methods: {
    open(id) {
      console.log('open', id)
    },
     remove(id) {
      console.log('remove', id)
    }
  }
}
</script>
