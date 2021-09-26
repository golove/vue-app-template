
<template>
  <el-card class="card" shadow="never">
    <el-timeline>
      <el-timeline-item
        :timestamp="e.date"
        placement="top"
        v-for="e in cardData"
        :key="e.msg"
      >
        <el-card>
          <h4>{{ e.title }}</h4>
          <p>{{ e.msg }}</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </el-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    let cardData = ref([
      {
        title: "Update Github template",
        msg: "Jack commit 2020/4/12 13:46",
        date: "2018/4/12",
      },
      {
        title: "Update Github template",
        msg: "Jack commit 2020/4/12 15:46",
        date: "2018/4/13",
      },
      {
        title: "Update Github template",
        msg: "Jack commit 2020/4/12 17:46",
        date: "2018/4/14",
      },
      {
        title: "Update Github template",
        msg: "Jack commit 2020/4/12 19:46",
        date: "2018/4/15",
      },
    ]);

    return {
      cardData,
    };
  },
});
</script>

<style scoped>
</style>
