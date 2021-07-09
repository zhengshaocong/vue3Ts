<template>
  <Child a="sss" :obj="obj"></Child>
  <button @click="uapte">aaa</button>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import Child from "./components/Child.vue";
export default defineComponent({
  name: "App",
  setup() {
    let obj = reactive({
      aaa: 123,
    });
    function uapte() {
      obj.aaa += 1;
    }
    return {
      uapte,
      obj,
    };
  },
  components: {
    Child,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
