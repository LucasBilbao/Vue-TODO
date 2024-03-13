<template>
  <div>
    <h1>TODO LIST</h1>

    <TheForm />

    <TodoList />
  </div>
</template>

<script setup>
import TheForm from './components/TheForm.vue';
import TodoList from './components/TodoList.vue';
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
  margin-top: 2rem;
  height: 100%;
}
</style>

<style>
li + li {
  margin-top: 2rem;
}
</style>
