<template>
  <transition name="fade">
    <span v-if="!scrolledBottom" class="text-white scroll-indicator d-none d-md-block">
      <font-awesome-icon icon="angle-down" size="3x" />
    </span>
  </transition>
</template>
<script>

export default {
  name: "ScrollIndicator",

  data: () => ({
    scrolledBottom: false
  }),

  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },

  methods: {
    handleScroll(event) {
      this.scrolledBottom = (window.innerHeight + window.scrollY == document.querySelector('#app').offsetHeight)
    }
  }
}
</script>
<style lang="scss" scoped>
  .scroll-indicator {
    position: fixed;
    bottom: 15px;
    left: 0;
    right: 0;
    margin: auto;
    width: 30px;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
