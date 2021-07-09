<!--
 * @Author: your name
 * @Date: 2021-06-08 15:10:16
 * @LastEditTime: 2021-06-09 17:32:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3_ts\src\components\TodoList\Footer.vue
-->
<template>
  <div class="df jsb ai-c">
    <div class="df ai-c">
      <input type="checkbox" v-model="check" />
      <span>已完成{{ checkedLength }}/全部{{ allLength }}</span>
    </div>
    <button @click="deleteCheck">清除已完成任务</button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
export default defineComponent({
  name: "Footer",
  props: {
    checkedLength: {
      type: Number,
      default: 0,
    },
    allLength: {
      type: Number,
      default: 0,
    },
  },
  setup(props, { emit }) {
    const check = computed({
      get() {
        return (
          props.checkedLength === props.allLength && props.checkedLength > 0
        );
      },
      set(val) {
        emit("changAll", val);
      },
    });
    function deleteCheck() {
      emit("deleteCheck");
    }
    return {
      check,
      deleteCheck,
    };
  },
});
</script>
<style scoped></style>
