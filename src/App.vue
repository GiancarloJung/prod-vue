<template>
  <div id="app">
    <vue-progress-bar/>

    <NavbarDesktop/>

    <vue-page-transition name="fade">
      <router-view/>
    </vue-page-transition>

    <NavbarMobile/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { NavbarDesktop, NavbarMobile } from '@/components'

export default {
  name: 'App',

  components: {
    NavbarDesktop,
    NavbarMobile,
  },

  data: () => ({
  }),

  computed: {
    ...mapGetters({
      loggedin: 'auth/LOGGED_IN'
    })
  },
}
</script>
