<template>
  <!-- <el-slider v-model="slideValue" :show-tooltip="false"></el-slider> -->

  <div>
    <transition-group name="list-complete" tag="div" class="conent">
      <personal
        class="list-complete-item"
        v-for="el in store.getters.doneCards"
        :key="el._id"
        :userInfo="el"
      />
    </transition-group>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import personal from "./personal.vue";
import { useStore } from "../../store";
export default defineComponent({
  components: { personal },
  setup() {
    const store = useStore();
    store.dispatch("getPerson");
    let slideValue = ref(0);
    function valueadd() {
      slideValue.value++;
      store.commit("setSlideValue", slideValue.value);
      if (slideValue.value == 20) {
        clearInterval(time);
      }
    }
    let time = setInterval(valueadd, 200);

    // watch(slideValue, (n, o) => {

    // })
    return {
      store,
    };
  },
});
</script>


<style  scoped>
.conent {
  display: flex;
  flex-wrap: wrap;
}

.list-complete-item {
  transition: all 0.8s ease;
}
.list-complete-enter-from,
.list-complete-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.list-complete-leave-active {
  position: absolute;
}
</style>