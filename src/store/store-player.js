const state = {
  listener: {},
  episode: [
    {
      episode_id: 0,
      listener_id: 0,
      episode_number: 0,
      episode_title: "",
      episode_time_update: 0,
      episode_date_started: "",
      episode_date_stopped: "",
      ip_address: "",
      title: "",
      date: "",
      description: "",
      mp3: ""
    }
  ]
};

const mutations = {
  setListenerMutation(state, payload) {
    Object.assign(state.listener, payload)
  },
  setEpisodeMutation(state, payload) {
    Object.assign(state.episode, payload)
  }
}

const actions = {
  setListener({ commit }, payload) {
    commit("setListenerMutation", payload)
  },
  setEpisode({ commit }, payload) {
    commit("setEpisodeMutation", payload)
  }
}

const getters = {
  getListener: state => {
    return state.listener
  },
  getEpisode: state => {
    return state.episode
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
