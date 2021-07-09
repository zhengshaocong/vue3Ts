/*
 * @Author: your name
 * @Date: 2021-06-02 17:44:59
 * @LastEditTime: 2021-06-02 18:24:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3_ts\src\hooks\userRequest.ts
 */
import { ref } from "vue";
import axios from "axios";
export default function <T>(url: string) {
  const loading = ref(true);
  const data = ref<T | null>(null);
  const errprMsg = ref("");
  setTimeout(() => {
    axios
      .get(url)
      .then((response) => {
        data.value = response.data;
        loading.value = false;
      })
      .catch((error) => {
        errprMsg.value = error;
        loading.value = false;
      });
  }, 1000);
  return {
    loading,
    data,
    errprMsg,
  };
}
