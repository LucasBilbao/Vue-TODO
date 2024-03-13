export default {
  addTodo({ commit }, payload) {
    commit('add', payload);
  },

  deleteTodo({ commit }, payload) {
    commit('delete', payload);
  },
};
