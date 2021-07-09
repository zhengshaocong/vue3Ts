<!--
 * @Author: your name
 * @Date: 2021-06-08 15:09:48
 * @LastEditTime: 2021-06-09 15:53:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3_ts\src\components\TodoList\Head.vue
-->
<template>
  <input type="text" v-model="title" class="search" @keyup.enter="add" />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "Head",
  setup(props, { emit }) {
    const title = ref("");
    function add() {
      if (title.value) {
        emit("enter", title.value);
        title.value = "";
      }
    }
    return {
      add,
      title,
    };
  },
});
</script>
<style scoped>
.search {
  width: 100%;
  outline: none;
  padding: 3px 10px;
}
</style>
