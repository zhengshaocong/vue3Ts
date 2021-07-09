<template>
  <div>ssss</div>
  <Suspense>
    <template #default>
      <Son></Son>
    </template>
    <template v-slot:fallback>
      <p>loading</p>
    </template>
  </Suspense>

  ===============================

  <Suspense>
    <template #default>
      <Son1></Son1>
    </template>
    <template v-slot:fallback>
      <p>loading</p>
    </template>
  </Suspense>

  ===============================

  <Suspense>
    <template #default>
      <Son555></Son555>
    </template>
    <template v-slot:fallback>
      <p>loading</p>
    </template>
  </Suspense>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from "vue";
import Son1 from "./components/son1.vue";
import Son555 from "./components/son12.vue";
export default defineComponent({
  name: "",
  setup() {
    return {};
  },
  components: {
    Son: defineAsyncComponent(() => import("./components/son.vue")),
    Son1,
    Son555,
  },
});
</script>
<style lang="scss" scoped></style>
