<template>
  <ul>
    <ListItem
      v-for="todo in todos"
      :key="todo.id"
      :id="todo.id"
      :value="todo.value"
      @delete-todo="deleteTodo"
    />
  </ul>
</template>

<script setup>
import ListItem from './ListItem.vue';
import { useTodoStore } from '@/hooks/todoStore';

const { todos, deleteTodo } = useTodoStore();
</script>
