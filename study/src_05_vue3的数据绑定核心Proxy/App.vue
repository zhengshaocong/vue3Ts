<template>
  <p>{{ obj.aaa }}</p>
  <button @click="uapte">aaa</button>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";

let aaa = {
  name: 123,
  age: 123,
};
var a = new Proxy(aaa, {
  get: function (target, prop) {
    console.log(Reflect.get(target, prop));
    return Reflect.get(target, prop);
  },
});
console.log(a.name);

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
  components: {},
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
