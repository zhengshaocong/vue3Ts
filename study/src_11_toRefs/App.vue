<template>
  <div>name:{{ ccc.bbb }} age:{{ state2.age }}</div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from "vue";
export default defineComponent({
  name: "",
  setup() {
    let state = reactive({
      name: "自来也",
      age: 47,
    });
    let aaa = {
      bbb: ref(123),
    };
    let bbb = ref(123);
    // setInterval(() => {
    //   state.name += "aaa";
    // }, 1000);
    let state2 = toRefs(state);
    return {
      state2,
      aaa,
      ccc: {
        bbb,
      },
    };
  },
});
</script>
<style lang="scss" scoped></style>
