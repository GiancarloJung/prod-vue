import api from '@/services/api'
import * as _ from 'lodash'

const INITIAL_STATE = {
  loggedin: false,
  message: '',
  token: false,
  role: false
}

const getters = {
  GET_ROLES({ roles }) {
    return roles
  },

  LOGGED_IN({ loggedin }) {
    return loggedin
  },

  GET_ACCESS_TOKEN({ token }) {
    return token
  },

  GET_MESSAGE({ message }) {
    return message
  },

  AUTH(state) {
    return state
  }
}

const actions = {
  async LOGIN({ commit, dispatch }, credentials) {
    commit('SET_MESSAGE', '');
    const response = await api.post('sessions/login/', credentials)
    const { data, ok } = response

    if (ok) {
      commit('SET_ACCESS_TOKEN', data.token)
      await dispatch('AUTHENTICATE')
    } else {
      commit('SET_LOGGED_IN', false)
    }

    return response
  },

  async AUTHENTICATE({ commit, dispatch, state }) {
    const response = await api.get('sessions/user/');
    const { data, ok } = response;

    if (ok) {
      commit('SET_LOGGED_IN', true);
      commit('user/SET_USER', data.user, { root: true });
      commit('SET_ROLES', data.roles);
    } else {
      dispatch('REFRESH_TOKEN', state.token);
    }
  },

  async REFRESH_TOKEN({ commit }, token) {
    const response = await api.post('sessions/refresh/', { token });
    const { data, ok } = response;

    if (ok) {
      commit('SET_ACCESS_TOKEN', data.token);
    } else {
      commit('SET_LOGGED_IN', false);
      commit('user/SET_USER', false, { root: true });
      commit('CLEAR_ACCESS_TOKEN', false);
    }
  },

  async LOGOUT({ commit }) {
    const response = await api.post('sessions/logout/');

    commit('SET_LOGGED_IN', false);
    commit('user/SET_USER', false, { root: true });
    commit('SET_ROLES', false);
    commit('CLEAR_ACCESS_TOKEN', false);

    return response
  },

  async FORGOT_PASSWORD({ commit }, email) {
    const response = await api.post('sessions/forgot', { email })
    return response
  },

  async RESET_PASSWORD({ commit }, body) {
    const response = await api.post('sessions/reset_password', body)
    return response
  },
}

const mutations = {
  SET_ROLES(state, roles) {
    state.roles = roles;
  },

  SET_ACCESS_TOKEN(state, token) {
    localStorage.setItem('accessToken', token);
    state.token = token;
    api.setHeader('Authorization', `Bearer ${token}`);
  },

  CLEAR_ACCESS_TOKEN(state) {
    localStorage.removeItem('accessToken');
    state.token = false;
    api.setHeader('Authorization', '');
  },

  SET_LOGGED_IN(state, status) {
    state.loggedin = status;
  },

  SET_MESSAGE(state, message) {
    state.message = message;
  }
}

export default {
  namespaced: true,
  state: INITIAL_STATE,
  getters,
  actions,
  mutations
}
