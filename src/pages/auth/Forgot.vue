<template>
  <div class="container">
    <div class="row align-items-center h-100" v-if="!feedback">
      <div class="col-8 offset-2 col-md-6 offset-md-3 col-xl-4 offset-xl-4">
        <div class="card card-login shadow-none">
          <div class="card-header text-center">
            <h5>Esqueci minha senha</h5>
          </div>
          <div class="card-body">
            <form class="form">
              <div class="form-group">
                <label for="email">E-mail</label>
                <div class="input-group">
                  <input v-model="user.email" type="email" id="email" class="form-control" required autofocus>
                </div>
              </div>

              <button class="btn btn-lg btn-dark btn-block" :disabled="!checkEmail" type="submit" @click.prevent="send(password)">
                Enviar
              </button>

              <div class="text-center">
                <router-link to="/" class="form-link m-auto">
                  Login
                </router-link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="row align-items-center h-100" v-if="feedback">
      <div class="col-8 offset-2 col-md-6 offset-md-3 col-xl-4 offset-xl-4">
        <div class="card card-login shadow-none">
          <div class="card-header text-center">
            <h5>Email enviado</h5>
          </div>
          <div class="card-body">
            <div class="text-center">
              <router-link to="/" class="form-link m-auto">
                Login
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex"

export default {
  data() {
    return {
      user: {
        email: ""
      },
      feedback: false
    };
  },

  methods: {
    ...mapActions({
      forgotPassword: "auth/FORGOT_PASSWORD"
    }),

    async send() {
      const { data, ok } = await this.forgotPassword(this.user.email);
      this.feedback = true;
    }
  },

  computed: {
    ...mapGetters({}),

    checkEmail() {
      return this.user.email;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  height: 100vh;
}
</style>
