<template>
  <transition name="modal">
    <div class="modal-mask" :style="{ backgroundImage: `url('${background}')` }">
      <div class="modal-wrapper">
        <button class="close-button text-white" @click.prevent="$emit('close')">
          <font-awesome-icon icon="times" size="3x" />
        </button>

        <div class="container">
          <div class="row min-vh-100 p-3 p-lg-5 align-items-center">
            <div class="col-12">
              <slot name="content" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "Modal",
  props: ['background'],
  data: () => ({
  }),

  mounted() {
    document.addEventListener("keydown", (e) => {
      if (e.keyCode == 27) {
        this.$emit('close')
      }
    })
  }
}
</script>
<style scoped lang="scss">
  @import '../assets/sass/variables';
  @import '../assets/sass/helpers';

  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .9);
    background-size: cover;
    background-position: center center;
    display: table;
    transition: opacity .3s ease;
    &::before {
      @extend %content;
      position: absolute;
      top: 0;
      left: 0;
      background: url('../assets/pattern.png') repeat,
        linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,.3) 100%);
    }
  }

  .close-button {
    position: absolute;
    top: 15px;
    right: 15px;
  }

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

</style>
