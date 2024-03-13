export default {
  add(state, { todo }) {
    const id = new Date().getTime();
    state.todos.unshift({ ...todo, id });
  },
  delete(state, { todoId }) {
    state.todos = state.todos.filter(({ id }) => todoId !== id);
  },
};
