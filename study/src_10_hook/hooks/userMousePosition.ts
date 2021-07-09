/*
 * @Author: your name
 * @Date: 2021-06-02 17:06:02
 * @LastEditTime: 2021-06-02 17:14:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3_ts\src\hooks\userMousePosition.ts
 */
import { ref, onMounted, onBeforeUnmount } from "vue";
export default function () {
  const x = ref(-1);
  const y = ref(-1);
  const clickHandler = (event: MouseEvent) => {
    x.value = event.pageX;
    y.value = event.pageY;
  };
  onMounted(() => {
    window.addEventListener("click", clickHandler);
  });
  onBeforeUnmount(() => {
    window.removeEventListener("click", clickHandler);
  });
  return {
    x,
    y,
  };
}
