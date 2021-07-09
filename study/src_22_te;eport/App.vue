<template>
  <button @click="show = true">open</button>
  <Teleport to="body">
    <div v-if="show">
      <p>窗口</p>
      <button @click="show = false">关闭</button>
    </div>
  </Teleport>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "",
  setup() {
    const show = ref(false);
    return {
      show,
    };
  },
  components: {},
});
</script>
<style lang="scss" scoped></style>
