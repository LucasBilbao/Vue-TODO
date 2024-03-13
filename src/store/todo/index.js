import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default {
  namespaced: true,
  state() {
    return {
      todos: [
        { id: 1, value: 'Learn Laravel' },
        { id: 2, value: 'Create a project in Laravel' },
        { id: 3, value: 'Learn Vue' },
        { id: 4, value: 'Create a project in Vue' },
      ],
    };
  },

  mutations,
  actions,
  getters,
};
