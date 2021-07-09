<template>
  <div>11</div>
  <Son></Son>
  <button @click="update">@@</button>
</template>

<script lang="ts">
import { defineComponent, provide, ref } from "vue";
import Son from "./components/son.vue";
export default defineComponent({
  name: "",
  setup() {
    const aaa = ref(123);
    function update() {
      aaa.value += 1;
    }
    provide("aaa", aaa);
    return {
      update,
    };
  },
  components: {
    Son,
  },
});
</script>
<style lang="scss" scoped></style>
