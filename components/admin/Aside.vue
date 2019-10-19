<template>
  <el-menu
    :style="{height: '100%'}"
    :default-active="$route.path"
    router
    >
    <el-menu-item index="/admin">
      <i class="el-icon-menu"></i>
      <span>Аналитика</span>
    </el-menu-item>
    <el-menu-item index="/admin/create">
      <i class="el-icon-edit"></i>
      <span>Создать</span>
    </el-menu-item>
    <el-menu-item index="/admin/list">
      <i class="el-icon-notebook-2"></i>
      <span>Посты</span>
    </el-menu-item>
    <el-menu-item index="/admin/users">
      <i class="el-icon-user-solid"></i>
      <span>Пользователи</span>
    </el-menu-item>
    <el-menu-item index="/admin/logout">
      <i class="el-icon-eleme"></i>
      <span>Выход</span>
    </el-menu-item>

  </el-menu>
</template>
