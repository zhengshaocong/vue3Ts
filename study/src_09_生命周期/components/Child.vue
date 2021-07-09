<!--
 * @Author: your name
 * @Date: 2021-06-02 14:23:33
 * @LastEditTime: 2021-06-02 15:33:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3_ts\src\components\Child.vue
-->
<template>
  <div>子级</div>
  <p>{{ msg }}</p>
  <button @click="update">@@</button>
</template>

<script lang="ts">
import {
  defineComponent,
  onBeforeMount,
  onBeforeUpdate,
  onMounted,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  ref,
} from "vue";
export default defineComponent({
  name: "",
  setup() {
    const msg = ref(0);
    function update() {
      msg.value += 1;
    }
    onBeforeMount(() => {
      console.log("3.x beforeMount");
    });
    onMounted(() => {
      console.log("3.x mounted");
    });
    onBeforeUpdate(() => {
      console.log("3.x beforeUpdate");
    });
    onUpdated(() => {
      console.log("3.x updated");
    });
    onBeforeUnmount(() => {
      console.log("3.x beforeUnmount");
    });
    onUnmounted(() => {
      console.log("3.x unmounted");
    });
    return {
      msg,
      update,
    };
  },

  beforeCreate() {
    console.log("2.x beforeCreate");
  },
  created() {
    console.log("2.x created");
  },
  beforeMount() {
    console.log("2.x beforeMount");
  },
  mounted() {
    console.log("2.x mounted");
  },
  beforeUpdate() {
    console.log("2.x beforeUpdate");
  },
  updated() {
    console.log("2.x updated");
  },
  beforeUnmount() {
    console.log("2.x beforeUnmount");
  },
  unmounted() {
    console.log("2.x unmounted");
  },
});
</script>
<style lang="scss" scoped></style>
