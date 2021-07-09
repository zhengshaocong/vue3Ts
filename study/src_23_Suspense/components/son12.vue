<!--
 * @Author: your name
 * @Date: 2021-06-07 17:24:09
 * @LastEditTime: 2021-06-07 18:00:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3_ts\src\components\son.vue
-->
<template>
  <div>异步导出2</div>
  <p>{{ data }}</p>
</template>

<script lang="ts">
import axios from "axios";
import { defineComponent } from "vue";
export default defineComponent({
  name: "",
  async setup() {
    let aaa = await axios.get("/data/address.json").then((response) => {
      return {
        data: response.data,
      };
    });
    return aaa;
  },
});
</script>
<style lang="scss" scoped></style>
