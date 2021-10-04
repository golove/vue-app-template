<template>
  <div class="sidebar">
    <sidelogo :collapse="store.state.collapseflag" />
    <el-menu
      class="el-menu-vertical-demo"
    
      @select="handleSelect"
      background-color="#449DFC"
    >
      <menuitem
        v-for="(route, i) in routes"
        :key="route.path"
        :index="i + ''"
        :route="route"
      />
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "../../store";
import route from "../../router";
import menuitem from "./menuItem.vue";
import sidelogo from "./sideLogo.vue";
export default defineComponent({
  components: {
    menuitem,
    sidelogo,
  },
  setup() {
    const routes = route.options.routes[0].children;
    console.log(routes);
    const store = useStore();
    const handleSelect = (key: string, keyPath: string) => {
      let arrykey = key.split("-").map(Number);

      let a = arrykey[0];
      let b = arrykey[1];

      const rArray = [
        "home",
        "about",
        ["ExportExcel", "SelectExcel", "MergeHeader", "UploadExcel"],
        "person",
      ];

      if (typeof rArray[a] === "string") {
        route.push({ name: rArray[a] });
      } else {
        route.push({ name: rArray[a][b] });
      }
    };

    return {
      routes,
      store,
      handleSelect,
    };
  },
});
</script>

<style>

.sidebar{
  height: 100vh;
}
</style>
