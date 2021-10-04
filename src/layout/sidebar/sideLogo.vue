
<template>
  <div class="sidelogo">
    <h2 v-if="collapse">G</h2>
    <h2 v-else>golove</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// import Logo from "../../assets/images/home/2035557.png";
export default defineComponent({
  props: {
    collapse: {
      type: Boolean,
      default: true,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.sidelogo {
  width: 100%;
  height: 100px;
  overflow: hidden;
  position: relative;
  background-color: cadetblue;
  h2 {
    position: absolute;
    top: 0;
    left: 30%;
    margin: auto;
    text-align: center;
    line-height: 90px;
    color: rgb(244, 252, 255);
  }
}
</style>
