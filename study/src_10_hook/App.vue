<template>
  <div>自定义hook</div>
  <p>x:{{ x }}</p>
  <p>y:{{ y }}</p>
  <p v-if="loading">loading....</p>
  <p v-else-if="errprMsg">错误：{{ errprMsg }}</p>
  <p v-else>
    {{ data }}
  </p>
</template>

<script lang="ts">
import { defineComponent, watch } from "vue";
import userMousePosition from "./hooks/userMousePosition";
import userRequest from "./hooks/userRequest";
interface isprice {
  id: number;
  address: string;
  price: string;
}
export default defineComponent({
  name: "",
  setup() {
    const { x, y } = userMousePosition();
    const { loading, data, errprMsg } =
      userRequest<isprice[]>("/data/address.json");
    watch(data, () => {
      if (data.value) {
        console.log(data.value.length);
      }
    });
    return {
      x,
      y,
      loading,
      data,
      errprMsg,
    };
  },
});
</script>
<style lang="scss" scoped></style>
