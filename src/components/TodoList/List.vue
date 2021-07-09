<!--
 * @Author: your name
 * @Date: 2021-06-08 15:10:00
 * @LastEditTime: 2021-06-09 15:32:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3_ts\src\components\TodoList\List.vue
-->
<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item.id">
        <Item :details="item" :changeCompleted="changeCompleted"></Item>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Item from "./Item.vue";
import { defineComponent } from "vue";
import { Todo } from "@/types/todo.js";
export default defineComponent({
  name: "List",
  props: ["list"],
  setup() {
    const changeCompleted = function (item: Todo, val: boolean) {
      item.isCompleted = val;
    };
    return {
      changeCompleted,
    };
  },
  components: {
    Item,
  },
});
</script>
<style scoped></style>
