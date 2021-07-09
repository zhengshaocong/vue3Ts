<template>
  <div>{{ user }}</div>
  <button @click="update">@@</button>
</template>

<script lang="ts">
import { defineComponent, markRaw, reactive, toRaw, toRefs } from "vue";
export default defineComponent({
  name: "",
  setup() {
    let state = {
      aaa: 123,
      bbb: 123,
    };
    let user = toRaw(state);
    let user2 = reactive(state);
    // let aaa = {
    //   a: 123,
    // };
    // let ab = markRaw(aaa);
    // console.log(ab);
    // let abb = toRefs(ab);
    // console.log(abb);
    let cc = markRaw(user2);
    console.log(cc);
    let ee = toRaw(cc);
    console.log(ee);
    let ff = reactive(ee);
    console.log(ff, "@");
    function update() {
      user2.aaa = 666;
    }
    return {
      user,
      user2,
      update,
    };
  },
});
</script>
<style lang="scss" scoped></style>
