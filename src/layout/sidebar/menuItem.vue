<template>
  <el-menu-item v-if="!route.children" :index="index">
    <i class="el-icon-menu"></i>
    <span v-show="!store.state.collapseflag">{{ route.meta.title }}</span>
  </el-menu-item>

  <el-sub-menu v-else :index="index">
    <template #title>
      <i class="el-icon-location"></i>
      <span v-show="!store.state.collapseflag">{{ route.meta.title }}</span>
    </template>
    <el-menu-item
      v-for="(e, i) in route.children"
      :key="e.meta.title"
      :index="index + '-' + i"
      >
      <i class="el-icon-location"></i>
      <span v-show="!store.state.collapseflag">{{ route.meta.title }}</span>
      </el-menu-item
    >
  </el-sub-menu>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "../../store";

export default defineComponent({
  props: {
    route: {
      type: Object,
      required: true,
    },
    index: { type: String, required: true },
  },
  setup() {
    const store = useStore();
    return {
      store,
    };
  },
});
</script>