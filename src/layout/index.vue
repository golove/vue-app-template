<script lang="ts" setup>
import topbar from "./topbar/index.vue";
import sidbar from "./sidebar/index.vue";
import {useStore} from "../store";
const store = useStore()
</script>

<template>
  <!-- <el-row :gutter="20">
    <el-col :span="4"><sidbar /></el-col>
    <topbar />
    <el-col :span="20"><router-view></router-view></el-col>
  </el-row> -->

  <el-container>
    <el-aside :class="store.state.collapseflag?'mincollapse':'maxcollapse'"><sidbar /></el-aside>
    <el-container>
      <el-header><topbar /></el-header>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
.el-header{
  --el-header-padding: 0 ;
}
.el-main{
    --el-main-padding: 0 ;
}
.el-aside{ 
  background-color:#F2F7FF ; 
 height: 100%;
  position: sticky;
  top: 0;
  left: 0; 
  transition: width ease .3s;
}
.maxcollapse{
--el-aside-width: 250px;
}
.mincollapse{
  --el-aside-width: 63px;
}
</style>
