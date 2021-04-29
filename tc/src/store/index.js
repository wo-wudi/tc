import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: localStorage.getItem("token")
      ? JSON.parse(localStorage.getItem("token"))
      : {},
    user: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : {},
  },
  mutations: {
    addUser(state, payload) {
      state.user = payload;
    },
    addToken(state, payload) {
      state.token = payload;
    },
  },
  actions: {},
  modules: {},
});
