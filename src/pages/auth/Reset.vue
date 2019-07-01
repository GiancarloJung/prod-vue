<template>
  <div class="container">
    <div class="row align-items-center h-100" v-if="!feedback">
      <div class="col-8 offset-2 col-md-6 offset-md-3 col-xl-4 offset-xl-4">
        <div class="card card-login shadow-none">
          <div class="card-header text-center">
            <h5>Resetar senha</h5>
          </div>
          <div class="card-body">
            <form class="form">
              <div class="form-group">
                <label for="email">Nova senha</label>
                <div class="input-group">
                  <input v-model="user.password" placeholder="No mínimo 6 caracteres" min="6" type="password" id="password" class="form-control" required autofocus>
                </div>
              </div>

              <div class="form-group">
                <label for="email">Confirmar nova senha</label>
                <div class="input-group">
                  <input v-model="user.confirm_password" placeholder="No mínimo 6 caracteres" min="6" type="password" id="confirm_password" class="form-control" required autofocus>
                </div>
              </div>

              <button class="btn btn-lg btn-dark btn-block" :disabled="!checkPassword" type="submit" @click.prevent="send()">
                Alterar
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
            <h5>Senha recuperada</h5>
          </div>
          <div class="card-body">
            <div class="text-center" v-if="message">
              <p>
                {{ message }}
              </p>
            </div>
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
        password: "",
        confirm_password: ""
      },
      token: this.$route.params.token,
      feedback: false,
      message: ""
    };
  },

  methods: {
    ...mapActions({
      resetPassword: "auth/RESET_PASSWORD"
    }),

    async send() {
      const response = await this.resetPassword({
        reset_token: this.token,
        password: this.user.password
      });
      this.feedback = true;

      if (!response.ok) {
        this.message = "Link para recuperação de senha expirado";
      }
    }
  },

  computed: {
    ...mapGetters({}),

    checkPassword() {
      if (this.user.password.length >= 6)
        return this.user.password === this.user.confirm_password;

      return false;
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
