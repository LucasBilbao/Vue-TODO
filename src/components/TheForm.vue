<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="todo" />
    <button type="submit">Submit</button>
  </form>
</template>

<script setup>
import { useTodoStore } from '@/hooks/todoStore';
import { ref } from 'vue';

const todo = ref('');
const { addTodo } = useTodoStore();

function onSubmit() {
  addTodo({ value: todo.value });
  todo.value = '';
}
</script>
