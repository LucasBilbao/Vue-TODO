<template>
  <li @click="onClick(props.id)">{{ props.value }} - {{ props.id }}</li>
</template>

<script setup>
const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
});

const emits = defineEmits(['deleteTodo']);
function onClick(todoId) {
  emits('deleteTodo', todoId);
}
</script>

<style scoped>
li {
  cursor: pointer;
}
</style>
