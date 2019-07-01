<template>
  <div class="container">
    <div class="row align-items-center h-100">
      <div class="col-8 offset-2 col-md-6 offset-md-3 col-xl-4 offset-xl-4">
        <div class="card card-login shadow-none">
          <div class="card-body">
            <form  class="form">
              <div class="form-group">
                <label for="email">Email</label>
                <div class="input-group">
                  <input v-model="user.email" type="email" id="email" class="form-control" placeholder="Email" required autofocus>
                </div>
              </div>

              <div class="form-group">
                <label for="password">Senha</label>
                <div class="input-group">
                  <input v-model="user.password" type="password" id="password" class="form-control" placeholder="Senha" required>
                </div>
              </div>

              <div class="text-center">
                <button class="btn btn-dark btn-lg btn-block" type="submit" @click.prevent="loginUser(user)">
                  Entrar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },

  methods: {
    ...mapActions({
      login: 'auth/LOGIN'
    }),

    async loginUser( user ) {
      const response = await this.login(user)
      if (this.loggedin) {
        this.$router.push()
      } else {
        this.$toasted.show(response.data.error, {
          duration: 2000,
          position: 'bottom-right'
        })
      }
    }
  },

  computed: {
    ...mapGetters({
      loggedin: 'auth/LOGGED_IN',
      messageStatus: 'auth/GET_MESSAGE'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container {
    height: 100vh;
  }
</style>
