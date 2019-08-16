<template>
  <nav :class="[activeClass, { 'has-background': !isHome }, 'navbar navbar-expand-md fixed-top justify-content-between']">
    <span class="line align-self-center"></span>

    <transition name="fade">
      <router-link v-if="!isHome" :to="$i18nRoute({ name: 'HomeIndex' })" class="navbar-brand d-md-none pull-right">
        <img src="@/assets/logo.png" alt="Produceria" class="logo">
      </router-link>
    </transition>

    <div class="collapse navbar-collapse">
      <ul class="navbar-nav ml-auto">
        <router-link v-if="!isHome" :to="$i18nRoute({ name: 'HomeIndex' })" tag="li" class="navbar-item">
          <a class="nav-link" href="#">
            {{ $t('pages.home.title') }}
          </a>
        </router-link>

        <router-link :to="$i18nRoute({ name: 'AboutIndex' })" tag="li" class="navbar-item">
          <a class="nav-link" href="#">
            {{ $t('pages.about.title') }}
          </a>
        </router-link>

        <router-link :to="$i18nRoute({ name: 'PortfolioIndex' })" tag="li" class="navbar-item">
          <a class="nav-link" href="#">
            {{ $t('pages.portfolio.title') }}
          </a>
        </router-link>

        <router-link :to="$i18nRoute({ name: 'ClientsIndex' })" tag="li" class="navbar-item">
          <a class="nav-link" href="#">
            {{ $t('pages.clients.title') }}
          </a>
        </router-link>

        <router-link :to="$i18nRoute({ name: 'ContactIndex' })" tag="li" class="navbar-item">
          <a class="nav-link" href="#">
            {{ $t('pages.contact.title') }}
          </a>
        </router-link>
      </ul>

      <LanguageSwitcher />
    </div>
  </nav>
</template>

<script>
import { LanguageSwitcher } from '@/components'

export default {
  name: 'NavbarDesktop',

  components: {
    LanguageSwitcher
  },

  data: () => ({
    activeClass: '',
    isHome: true,
  }),

  watch: {
    '$route.name' (to, from) {
      this.isHome = to == 'HomeIndex'
    }
  },

  mounted() {
    setTimeout(() => {
      this.activeClass = 'active'
    })
  }
}
</script>

<style scoped lang="scss">
  @import "~bootstrap/scss/bootstrap-grid.scss";
  @import '../assets/sass/variables';
  @import '../assets/sass/helpers';

  .navbar {
    &.has-background {
      background: rgba(0,0,0,.7);
      &::before {
        @extend %content;
        background: linear-gradient(rgba(0,0,0,0.7) 0%, transparent 100%);
        position: absolute;
        bottom: -100%;
        left: 0;
      }
    }
    .line {
      width: 560px;
      &::before {
        @extend %content;
        width: 0;
        height: 2px;
        background: white;
        transition: width .9s ease-in-out;
      }
    }

    .navbar-nav {
      opacity: 0;
      transition: opacity .9s ease-out;
      .nav-link {
        position: relative;
        overflow: hidden;

        &::before {
          @extend %content;
          height: 2px;
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          margin: auto;
          background: white;
          transform: translate(-101%, 0);
        }

        &:hover::before {
          transform: translate(101%, 0);
          transition: transform .3s ease-in-out;
        }
      }

      .navbar-item.active .nav-link {
        color: #d9d9d9;
      }
    }

    &.active {
      .line::before {
        width: 100%;
      }
      .navbar-nav {
        opacity: 1;
        .navbar-item.active .nav-link::before {
          opacity: 0;
        }
      }
    }
  }

  .logo {
    height: 35px;
  }

  @include media-breakpoint-down(md) {
    .navbar {
      height: 60px;
      .line {
        width: 365px;
      }
    }
  }

  @include media-breakpoint-down(sm) {
    .navbar {
      .line {
        width: 50%;
      }
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
