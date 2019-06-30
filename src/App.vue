<template>
  <div id="app">
    <Navbar />

    <vue-progress-bar/>

    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Navbar } from '@/components'

export default {
  name: 'App',

  components: {
    Navbar,
  },

  computed: {
    ...mapGetters({
      loggedin: 'auth/LOGGED_IN'
    })
  }
}
</script>
