<template>
  <div>{{ m1 }}</div>
  <div>{{ m2 }}</div>
  <div>{{ m3 }}</div>
  <div>{{ m4 }}</div>
  <button @click="update">@@</button>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  shallowReactive,
  shallowRef,
  ref,
} from "vue";
export default defineComponent({
  name: "",
  setup() {
    let m1 = reactive({
      aa: {
        cc: {
          ff: 123,
        },
      },
    });
    let m2 = shallowReactive({
      bb: {
        dd: {
          ee: 123,
        },
      },
    });
    let m3 = ref({
      aa: {
        cc: 123,
      },
    });
    let m4 = shallowRef({
      bb: {
        dd: 123,
      },
    });
    function update() {
      // m1.aa.cc.ff += 1;
      m2.bb.dd.ee += 1;
      // m3.value.aa.cc += 1;
      // m4.value.bb.dd += 1;
    }
    return {
      m1,
      m2,
      m3,
      m4,
      update,
    };
  },
});
</script>
<style lang="scss" scoped></style>
