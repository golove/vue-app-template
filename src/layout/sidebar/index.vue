<template>
  
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="store.state.collapseflag"
    @open="handleOpen"
    @close="handleClose"
    background-color="#449DFC"
  >
    <el-sub-menu index="1">
      <template #title>
        <i class="el-icon-location"></i>
        <span>Navigator One</span>
      </template>
      <el-menu-item-group>
        <template #title><span>Group One</span></template>
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="1-4">
        <template #title><span>item four</span></template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <template #title>Navigator Two</template>
    </el-menu-item>
    <el-menu-item index="3">
      <i class="el-icon-document"></i>
      <template #title>Navigator Three</template>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-setting"></i>
      <template #title>Navigator Four</template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts">
import { defineComponent} from "vue";
import {useStore} from '../../store'

export default defineComponent({
  setup() {
      const store = useStore()
    const handleOpen = (key:any, keyPath:number) => {
      console.log(key, keyPath);
    };
    const handleClose = (key:any, keyPath:number) => {
      console.log(key, keyPath);
    };
    return {
        store,
      handleOpen,
      handleClose,
    };
  },
});
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
