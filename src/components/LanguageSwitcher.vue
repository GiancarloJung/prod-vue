<template>
  <ul class="nav ml-3">
    <li v-for="(lang, index) in supportedLanguages" :key="index" v-show="!isCurrentLanguage(lang)" class="nav-item">
      <a @click.prevent="changeLanguage(lang)" class="nav-link" href="#">{{ lang }}</a>
    </li>
  </ul>
</template>

<script>
import { Trans } from '@/plugins/Translation'

export default {
  name: "LanguageSwitcher",

  computed: {
    supportedLanguages () {
      return Trans.supportedLanguages
    },
    currentLanguage () {
      return Trans.currentLanguage
    }
  },

  methods: {
    changeLanguage (lang) {
      const to = this.$router.resolve({ params: { lang } })
      return Trans.changeLanguage(lang).then(() => {
        this.$router.push(to.location)
      })
    },
    isCurrentLanguage (lang) {
      return lang === this.currentLanguage
    }
  }
}
</script>

<style scoped lang="scss">
  .nav {
    position: relative;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      margin: auto;
      width: 1px;
      height: 12px;
      background: white;
    }
  }
</style>
