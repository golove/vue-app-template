<script lang="ts" setup>
import topbar from "./topbar/index.vue";
import sidbar from "./sidebar/index.vue";
</script>

<template>
  <!-- <el-row :gutter="20">
    <el-col :span="4"><sidbar /></el-col>
    <topbar />
    <el-col :span="20"><router-view></router-view></el-col>
  </el-row> -->

  <el-container>
    <el-aside width="auto"><sidbar /></el-aside>
    <el-container>
      <el-header><topbar /></el-header>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
</style>
