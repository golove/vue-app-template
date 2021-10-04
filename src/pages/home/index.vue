
<template>
  <AdminDashboard />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AdminDashboard from "./admin/Index.vue";

export default defineComponent({
  components: {
    AdminDashboard,
  },
});
</script>
