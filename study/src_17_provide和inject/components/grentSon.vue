<!--
 * @Author: your name
 * @Date: 2021-06-04 17:31:38
 * @LastEditTime: 2021-06-04 17:44:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3_ts\src\components\grentSon.vue
-->
<template>
  <div>孙子</div>
  <p>{{ aaa }}</p>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";
export default defineComponent({
  name: "",
  setup() {
    let aaa = inject("aaa");
    return {
      aaa,
    };
  },
});
</script>
<style lang="scss" scoped></style>
