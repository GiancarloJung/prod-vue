<template>
  <transition name="modal">
    <div class="modal-mask" :style="{ backgroundImage: `url('${job.image}')` }">
      <div class="modal-wrapper">
        <button class="close-button text-white" @click.prevent="$emit('close')">
          <font-awesome-icon icon="times" size="3x" />
        </button>

        <transition name="fade">
          <div class="container-fluid">
            <div class="row min-vh-100 p-3 p-lg-5 align-items-center">
              <div class="col-12">
                <div class="row">
                  <div class="col-12 text-center mb-3 mb-lg-5">
                    <slot name="header" />
                  </div>

                  <div class="col-12 col-lg-8 mb-4 mb-lg-0">
                    <slot name="video" />
                  </div>

                  <div class="col-12 col-lg-4 align-self-center">
                    <slot name="body" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>

        <div class="navigation">
          <button class="prev-job text-white" @click.prevent="$emit('prevJob')">
            <font-awesome-icon icon="angle-left" size="3x" />
          </button>
          <button class="next-job text-white" @click.prevent="$emit('nextJob')">
            <font-awesome-icon icon="angle-right" size="3x" />
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ModalJob',
  props: ['job'],
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
    z-index: 30;
    position: absolute;
    top: 15px;
    right: 15px;
  }

  .navigation {
    .next-job,
    .prev-job {
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto;
    }
    .prev-job {
      left: 15px;
    }
    .next-job {
      right: 15px;
    }
  }

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }


  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
