<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <router-link :to="{ name: 'HomeIndex' }" class="navbar-item">
          [AD]
        </router-link>

        <span class="navbar-burger burger" data-target="navbarMenuHeroA">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>

      <div id="navbarMenuHeroA" class="navbar-menu">
        <div class="navbar-end">
          <router-link :to="{ name: 'AboutIndex' }" class="navbar-item">
            about
          </router-link>
          <router-link :to="{ name: 'Login' }" class="navbar-item">
            login
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import { routes } from '@/router'

export default {
  name: 'Navbar',
  components: {},
  data () {
    return {
    }
  },

  mounted () {
  },

  methods: {
    ...mapActions({
      logout: 'auth/LOGOUT'
    }),

    async logoutUser() {
      await this.logout()
      this.$router.push('/')
    }
  },

  computed: {
    ...mapGetters({
      loggedin: 'auth/LOGGED_IN',
      currentUser: 'user/GET_USER',
      roles: 'auth/GET_ROLES'
    })
  }
}
</script>
