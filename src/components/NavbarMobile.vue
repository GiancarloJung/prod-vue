<template>
  <ul :class="[{ 'has-background': !isHome }, 'nav d-md-none fixed-bottom justify-content-center']">
    <li class="nav-item">
      <router-link :to="$i18nRoute({ name: 'AboutIndex' })" class="nav-link">
        {{ $t('pages.about.title') }}
      </router-link>
    </li>

    <li class="nav-item">
      <router-link :to="$i18nRoute({ name: 'PortfolioIndex' })" class="nav-link">
        {{ $t('pages.portfolio.title') }}
      </router-link>
    </li>

    <li class="nav-item">
      <router-link  :to="$i18nRoute({ name: 'ClientsIndex' })" class="nav-link">
        {{ $t('pages.clients.title') }}
      </router-link>
    </li>

    <li class="nav-item">
      <router-link  :to="$i18nRoute({ name: 'ContactIndex' })" class="nav-link">
        {{ $t('pages.contact.title') }}
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'NavbarMobile',

  data: () => ({
    isHome: true
  }),

  watch: {
    '$route.name' (to, from) {
      this.isHome = to == 'HomeIndex'
    }
  },
}
</script>

<style scoped lang="scss">
  .nav.has-background {
    background: linear-gradient(to top, black 0%, rgba(0,0,0,0.70) 35%, transparent 100%);
    height: 60px;
    padding-top: 15px;
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
