<template>
  <TodoList></TodoList>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TodoList from "./components/TodoList/index.vue";
export default defineComponent({
  name: "",
  setup() {
    return {};
  },
  components: {
    TodoList,
  },
});
</script>
<style lang="scss" scoped></style>
