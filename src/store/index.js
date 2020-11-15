import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    globalCount: 0,
    profile: null
  },
  mutations: {
    globalIncrement(state){
      state.globalCount++
    },
    setGithubProfile(state, paylod){
      state.profile = paylod;
    }
  },
  actions: {
    async fetchGithubProfile(store, paylod) {
      if (store.state.profile !== null) return;

      const response = await fetch(`https://api.github.com/users/${paylod.user_id}`)
      .then((res) => {
        return res.json();
      });
      store.commit("setGithubProfile", response);
    }
  },
  modules: {
  }
})
