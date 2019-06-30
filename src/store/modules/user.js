import api from '@/services/api'
import * as _ from 'lodash'

const INITIAL_STATE = {
  user: false,
}

const getters = {
  GET_USER({ user }) {
    return user
  },
}

const actions = {
  async UPDATE_USER(context, data) {
    const userId = context.getters.get('GET_USER').id;
    const response = await api.patch(`users/${userId}/`, data);
    context.commit('user/SET_USER', response.data);
  },
}

const mutations = {
  SET_USER(state, user) {
    state.user = user;
  },

  CLEAR_USER(state) {
    state.user = false;
  },
}

export default {
  namespaced: true,
  state: INITIAL_STATE,
  getters,
  actions,
  mutations,
}
