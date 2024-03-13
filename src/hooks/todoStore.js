import { computed } from 'vue';
import { useStore } from 'vuex';

export function useTodoStore() {
  const store = useStore();

  const todos = computed(() => store.getters['todo/todos']);

  function addTodo(todo) {
    store.dispatch('todo/addTodo', { todo });
  }

  function deleteTodo(todoId) {
    store.dispatch('todo/deleteTodo', { todoId });
  }

  return {
    todos,
    addTodo,
    deleteTodo,
  };
}
