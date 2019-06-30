import store from '@/store';

export default (to, from, next) => {
  if (!store.getters['auth/LOGGED_IN']) {
    store.dispatch('auth/LOGOUT')
    return next('/')
  }
  return next()
}
