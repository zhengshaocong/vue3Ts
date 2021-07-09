<!--
 * @Author: your name
 * @Date: 2021-06-08 15:10:32
 * @LastEditTime: 2021-06-09 15:44:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3_ts\src\components\TodoList\Item.vue
-->
<template>
  <label class="label jsb">
    <div class="df ai-c">
      <input type="checkbox" v-model="isCompleted" />
      <span>{{ details.title }}</span>
    </div>
    <button @click="deleteItem">删除</button>
  </label>
</template>

<script lang="ts">
import { computed, defineComponent, inject } from "vue";
import { Todo, deleteTodo } from "@/types/todo.js";
export default defineComponent({
  name: "Item",
  props: {
    details: {
      type: Object as () => Todo,
      required: true,
    },
    changeCompleted: {
      type: Function,
      required: true,
    },
    // delete: {
    //   type: Function,
    //   required: true,
    // },
  },
  setup(props) {
    const isCompleted = computed({
      get() {
        return props.details.isCompleted;
      },
      set(val) {
        props.changeCompleted(props.details, val);
      },
    });
    const deleteOne = inject("delete");
    const deleteItem = function () {
      (deleteOne as deleteTodo)(props.details.id);
    };
    return {
      isCompleted,
      deleteItem,
    };
  },
});
</script>
<style scoped>
.label {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 10px;
  cursor: pointer;
  height: 30px;
}
.label:hover {
  background: cornflowerblue;
}
.label button {
  display: none;
  cursor: pointer;
}
.label:hover button {
  display: block;
}
</style>
