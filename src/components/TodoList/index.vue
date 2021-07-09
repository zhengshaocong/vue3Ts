<!--
 * @Author: your name
 * @Date: 2021-06-08 15:10:24
 * @LastEditTime: 2021-06-09 18:03:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3_ts\src\components\TodoList\index.vue
-->
<template>
  <div class="TodoList">
    <Head @enter="add"></Head>
    <List :list="listData"></List>
    <Footer
      :checkedLength="checkedLength"
      :allLength="allLength"
      @changAll="changAll"
      @deleteCheck="deleteCheck"
    ></Footer>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, provide, reactive, watch } from "vue";
import Head from "./Head.vue";
import List from "./List.vue";
import Footer from "./Footer.vue";
import { Todo } from "../../types/todo.js";
export default defineComponent({
  name: "TodoList",
  setup() {
    let listData = reactive<Todo[]>(
      JSON.parse(window.sessionStorage.listData || "[]")
    );
    function createRandomId() {
      return (
        (Math.random() * 10000000).toString(16).substr(0, 4) +
        "-" +
        new Date().getTime() +
        "-" +
        Math.random().toString().substr(2, 5)
      );
    }
    function add(title: string) {
      let id = createRandomId();
      listData.unshift({
        id,
        title,
        isCompleted: false,
      });
    }
    function deleteItem(id: number | string) {
      let index = listData.findIndex((item) => item.id === id);
      if (index > -1) {
        listData.splice(index, 1);
      }
    }
    provide("delete", deleteItem);
    const checkedLength = computed(() => {
      let arr = listData.filter((item) => item.isCompleted);
      return arr.length;
    });
    const allLength = computed(() => {
      return listData.length;
    });
    const changAll = function (val: boolean) {
      listData.forEach((item) => {
        item.isCompleted = val;
      });
    };
    function deleteCheck() {
      listData
        .filter((item) => item.isCompleted)
        .map((item) => item.id)
        .forEach((id) => {
          deleteItem(id);
        });
    }
    watch(listData, () => {
      window.sessionStorage.listData = JSON.stringify(listData);
    });
    return {
      listData,
      add,
      checkedLength,
      allLength,
      changAll,
      deleteCheck,
    };
  },
  components: {
    Head,
    List,
    Footer,
  },
});
</script>
<style scoped>
.TodoList {
  width: 300px;
  margin: 0 auto;
}
</style>
