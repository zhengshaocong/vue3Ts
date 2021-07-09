<!--
 * @Author: your name
 * @Date: 2021-06-07 17:24:09
 * @LastEditTime: 2021-06-07 17:47:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3_ts\src\components\son.vue
-->
<template>
  <div>异步导出</div>
  <p>{{ msg }}</p>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "",
  setup() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          msg: "12312121",
        });
      }, 1000);
    });
  },
});
</script>
<style lang="scss" scoped></style>
