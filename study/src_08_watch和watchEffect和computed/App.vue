<template>
  <div>计算属性</div>
  <fieldset>
    <legend>姓名操作</legend>
    姓氏：<input type="text" v-model="user.firstName" />
    <br />
    名字：<input type="text" v-model="user.lastName" />
  </fieldset>

  <fieldset>
    <legend>计算属性和监视演示</legend>
    姓名：<input type="text" v-model="name" />
    <br />
    姓名：<input type="text" v-model="name2" />
    <br />
    姓名：<input type="text" v-model="name3" />
    <br />
    姓名：<input type="text" v-model="name4" />
    <br />
  </fieldset>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  ref,
  computed,
  watch,
  watchEffect,
} from "vue";
export default defineComponent({
  name: "",
  setup() {
    const user = reactive({
      firstName: "东方",
      lastName: "不败",
      aa: {
        oo: 12,
      },
    });
    var name = computed(() => {
      return user.firstName + "_" + user.lastName;
    });
    var name2 = computed({
      get() {
        return user.firstName + "_" + user.lastName;
      },
      set(val: string) {
        const names = val.split("_");
        user.firstName = names[0];
        user.lastName = names[1];
      },
    });
    const name3 = ref(" ");
    const name4 = ref(" ");
    // watch(
    //   user,
    //   ({ firstName, lastName }) => {
    //     name3.value = firstName + "_" + lastName;
    //   },
    //   { immediate: true }
    // );

    watch(
      [() => user.firstName, () => user.lastName],
      () => {
        name3.value = user.firstName + "_" + user.lastName;
      },
      { immediate: true }
    );

    watchEffect(() => {
      name4.value = user.firstName + "_" + user.lastName;
    });

    console.log(user.aa);
    return {
      user,
      name,
      name2,
      name3,
      name4,
    };
  },
});
</script>
<style lang="scss" scoped></style>
