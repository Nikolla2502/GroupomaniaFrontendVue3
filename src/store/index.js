import { createStore} from 'vuex'

import instance from "/services/axiosInterceptor";

const store = createStore({
  state: {
    status: '',
    user: {
      id: -1,
      token: '',
    }
  },
  mutations: {
    setStatus: function (state, status) {
      state.status = status;
    },
    logUser: function (state, user) {
      instance.defaults.headers.common['Authorization'] = user.token;
      state.user = user;
    }
  },
  actions: {
    signUp: ({ commit }, userInfos) => {
      commit("setStatus", "loading");
      return new Promise((resolve, reject) => {
        commit;
        instance.post("/user/signup", userInfos)
          .then(function (response) {
            commit('setStatus', 'created');
            resolve(response);
          })
          .catch(function (error) {
            commit('setStatus', 'error_create');
            reject(error);
          });

      })
    },
    login: ({ commit }, userInfos) => {
      commit('setStatus', 'loading');
      return new Promise((resolve, reject) => {
        instance.post("/user/login", userInfos)
          .then(function (response) {
            commit('setStatus', '');
            commit('logUser', response.data);
            resolve(response);
          })
          .catch(function (error) {
            commit('setStatus', 'error_login');
            reject(error);
          });

      })
    },
  },
  modules: {
  }
})

export default store;