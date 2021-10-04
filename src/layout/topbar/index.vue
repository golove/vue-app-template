<script lang="ts">
import {
  defineComponent,
  ref,
  watch,
  computed,
  watchEffect,
} from "vue";
import router from "../../router";
import { useI18n } from "vue-i18n";
import { useStore } from "../../store";
import { useRoute } from "vue-router";
export default defineComponent({
  setup() {
    const store = useStore();
    const route = useRoute();
    function changeCollapse() {
      store.commit("changeCollapse");
      console.log(store.state.collapseflag);
    }

    const { locale, t } = useI18n();
    let langFlag = ref(true);
    const handleSelect = (key: number) => {
      router.push({ name: ["home", "about", "user"][key] });
    };
    const handleSetLanguage = () => {
      langFlag.value = !langFlag.value;
      console.log(langFlag.value);
      if (langFlag.value) {
        locale.value = "zh";
      } else {
        locale.value = "en";
      }
    };

    

    // set activeMenuIndex
    let activeMenuIndex = ref("0");
    function changeActiveIndex() {
      // Get current path
      let path = computed(() => route.path);
      let ra = ["/home", "/about", "/user"];
      let index = ra.findIndex((e) => e == path.value);
      console.log(index);
      if (index > 0) {
        activeMenuIndex.value = index.toString();
      } else {
        activeMenuIndex.value = "0";
      }
    }
    watchEffect(changeActiveIndex);

 

    // for search
    const inputValue = ref("");
    watch(inputValue, (n) => {
      searchAct(n);
    });
    const searchAct = (value: string) => {
      // if(value.trim()==='')  return
      store.commit("search", value);
    };

    return {
      activeMenuIndex,
      t,
      handleSelect,
      handleSetLanguage,
      inputValue,
      changeCollapse,
    };
  },
});
</script>

<template>
  <div class="topbar">
    <el-button
      @click="changeCollapse"
      type="primary"
      icon="el-icon-menu"
    ></el-button>

    <el-menu
      :default-active="activeMenuIndex"
      class="el-menu-demo"
      mode="horizontal"
      text-color="#fff"
      @select="handleSelect"
      background-color="#449DFC"
    >
      <el-menu-item index="0">{{ t("route.home") }}</el-menu-item>
      <el-menu-item index="1">{{ t("route.about") }}</el-menu-item>
      <el-menu-item index="2">{{ t("route.profile") }}</el-menu-item>
    </el-menu>
    <div class="mixgroup">
      <div class="search">
        <svg>
          <use xlink:href="#magnify" />
        </svg>
        <!-- <input type="text" placeholder="search" /> -->
        <!-- <div class="h-36 mx-auto w-full md:w-1/4 p-4"> -->
        <input placeholder="search" type="text" v-model="inputValue" />
        <!-- </div> -->
      </div>

      <el-button-group>
        <el-button
          @click="handleSetLanguage"
          type="primary"
          icon="el-icon-edit"
        ></el-button>
        <el-button type="primary" icon="el-icon-share"></el-button>
        <el-button type="primary" icon="el-icon-delete"></el-button>
      </el-button-group>
    </div>
  </div>
</template>

<style lang='scss' scoped>
.topbar {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  background-color: #449dfc;
  .el-menu {
    min-width: 300px;
  }

  .mixgroup {
    display: flex;
    .search {
      height: 36px;
      width: 182px;
      border-radius: 18px;
      margin: 12px 24px;
      position: relative;
      display: flex;
      svg {
        position: absolute;
        top: 4px;
        left: 2px;
        fill: rgb(0, 183, 255);
        height: 30px;
        width: 30px;
      }
      input {
        background-color: rgba(153, 27, 27, 0);
        padding: 2px;
        box-shadow: 0 0 0 2px white inset;
        text-indent: 35px;
        border-style: none;
        border-radius: 17px;
        &:focus {
          background-color: rgb(255, 255, 255);
          outline: none;
        }
      }
    }
    .el-button-group {
      .el-button {
        margin: auto;
        height: 100%;
      }
    }
  }
}
</style>
