<template>
  <div>{{ m1 }}</div>
  <div>{{ m2 }}</div>
  <div>{{ m3 }}</div>
  <button @click="update">@@</button>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
export default defineComponent({
  name: "",
  setup() {
    const m1 = ref("abc");
    const m2 = reactive({
      bb: 123,
    });
    const m3 = ref({
      aa: 123,
    });
    console.log(m1);
    console.log(m2);
    console.log(m3);
    function update() {
      console.log(123);
    }
    return {
      m1,
      m2,
      m3,
      update,
    };
  },
});
</script>
<style lang="scss" scoped></style>
