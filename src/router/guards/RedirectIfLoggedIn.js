import store from '@/store';

export default (to, from, next) => {
  if (store.getters['auth/LOGGED_IN']) {
    next()
  } else {
    next()
  }
}
