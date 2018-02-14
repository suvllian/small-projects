<template>
  <el-menu :default-active="activeKey" background-color="#545c64" 
    text-color="#fff" active-text-color="#ffd04b" 
    class="el-menu-demo" mode="horizontal">
    <el-menu-item index="1"><router-link to="/list" class="manage-link">文章管理</router-link></el-menu-item>
    <el-menu-item index="2"><router-link to="/add" class="manage-link">添加文章</router-link></el-menu-item>
  </el-menu>
</template>

<script>
export default {
  props: ['activeKey']
}
</script>

