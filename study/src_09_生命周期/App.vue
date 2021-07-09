<template>
  <div>父级</div>
  <button @click="isShow = !isShow">off/on</button>
  <br />
  <br />
  <br />
  <Child v-if="isShow"></Child>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Child from "./components/Child.vue";
export default defineComponent({
  name: "",
  setup() {
    const isShow = ref(true);
    return {
      isShow,
    };
  },
  components: {
    Child,
  },
});
</script>
<style lang="scss" scoped></style>
