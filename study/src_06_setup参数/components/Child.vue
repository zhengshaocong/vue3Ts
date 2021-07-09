<!--
 * @Author: your name
 * @Date: 2021-06-01 17:26:31
 * @LastEditTime: 2021-06-02 11:17:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3_ts\src\components\Child.vue
-->
<template>
  <div>4654</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "aa",
  setup(prop, context) {
    console.log(prop);
    console.log(context);
    return {};
  },
  data() {
    return {
      aa: 123,
    };
  },
});
</script>
<style lang="scss" scoped></style>
