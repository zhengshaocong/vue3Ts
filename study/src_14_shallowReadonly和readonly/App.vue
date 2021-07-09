<template>
  <div>a1</div>
  <div>b2</div>
  <div>a1</div>
  <button @click="update">@@</button>
</template>

<script lang="ts">
import { defineComponent, readonly, ref, shallowReadonly } from "vue";
export default defineComponent({
  name: "",
  setup() {
    const aaa = {
      o: 123,
      c: {
        b: 123,
      },
    };
    let b = ref(123);
    let a1 = readonly(aaa);
    let a2 = shallowReadonly(aaa);
    let b1 = readonly(b);
    function update() {
      b1.value += 1;
    }
    return {
      a1,
      a2,
      b1,
      update,
    };
  },
});
</script>
<style lang="scss" scoped></style>
