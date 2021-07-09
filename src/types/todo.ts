/*
 * @Author: your name
 * @Date: 2021-06-08 17:05:42
 * @LastEditTime: 2021-06-09 15:36:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3_ts\src\types\todo.ts
 */
export interface Todo {
  id: number | string;
  title: string;
  isCompleted: boolean;
}

export interface deleteTodo {
  (id: string | number): void;
}
