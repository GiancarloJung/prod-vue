<template>
  <ul class="nav d-md-none fixed-bottom justify-content-center">
    <li class="nav-item">
      <router-link :to="{ name: 'AboutIndex' }" class="nav-link">
        Sobre
      </router-link>
    </li>

    <li class="nav-item">
      <router-link :to="{ name: 'PortfolioIndex' }" class="nav-link">
        Portfolio
      </router-link>
    </li>

    <li class="nav-item">
      <router-link  :to="{ name: 'ClientsIndex' }" class="nav-link">
        Clientes
      </router-link>
    </li>

    <li class="nav-item">
      <router-link  :to="{ name: 'ContactIndex' }" class="nav-link">
        Contato
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'NavbarMobile',

  data: () => ({
    show: false
  }),

  watch: {
    '$route.name' (to, from) {
      this.show = to != 'HomeIndex'
    }
  },
}
</script>

<style scoped lang="scss">
  .nav {
    background: linear-gradient(to top, black 0%, rgba(0,0,0,0.70) 35%, transparent 100%);
  }

  .nav-link {
    padding: 0.5rem 0.75rem;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
