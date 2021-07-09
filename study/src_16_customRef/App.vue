<template>
  <input type="text" v-model="aa" />
  <p>{{ aa }}</p>
</template>

<script lang="ts">
import { customRef, defineComponent } from "vue";
function timeOut<T>(value: T, time: number) {
  let istimeOutId: number;
  return customRef((track, trigger) => {
    return {
      get() {
        track();
        return value;
      },
      set(newValue: T) {
        clearTimeout(istimeOutId);
        istimeOutId = setTimeout(() => {
          value = newValue;
          trigger();
        }, time);
      },
    };
  });
}
export default defineComponent({
  name: "",
  setup() {
    let aa = timeOut<string>("sss", 1231);
    return {
      aa,
    };
  },
});
</script>
<style lang="scss" scoped></style>
