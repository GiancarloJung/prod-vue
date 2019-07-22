<template>
  <div class="wrapper">
    <div v-if="isDesktop" class="video-background">
      <video src="@/assets/background.mp4" ref='video' muted loop />
    </div>

    <div v-if="slider" class="slider-background">
      <slick :options="slickOptions" ref="slider">
        <div v-for="(slide, index) in slides" :key="`slide-${index}`" :style="{ backgroundImage: `url('${slide}')` }" class="item"></div>
      </slick>
    </div>

    <div class="container vh-100">
      <div class="row align-items-center h-100">
        <div class="col-12 text-center">
          <canvas ref="logo" width="960" height="240" class="img-fluid"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Slick from 'vue-slick'
import Cobra from '@/plugins/cobra.js'
import { isMobile } from 'mobile-device-detect'

export default {
  name: "HomeIndex",
  components: { Slick },

  data: () => ({
    cobra: false,
    isDesktop: !isMobile,
    numberOfSlides: 36,
    slider: false,
    slickOptions: {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      fade: true,
      autoplay: true
    },
  }),

  computed: {
    slides() {
      let images = []

      for (let i = 0; i < this.numberOfSlides; i++) {
        images[i] = require(`@/assets/background/${i}.png`)
      }

      return images
    }
  },

  mounted() {
    this.cobra = new Cobra({
      canvas: this.$refs.logo,
      path: 'http://dev.addicted.coffee/produceria/logo/',
      numberOfFrames: 31,
    })

    setTimeout(() => {
      this.cobra.animate()
    }, 500)

    setTimeout(async () => {
      if (this.isDesktop) {
        this.$refs.video.classList.add('active')
        await this.$refs.video.play()
      }
      else { this.slider = true }
    }, 1500)
  }
}
</script>

<style scoped lang="scss">
  @import '../../assets/sass/variables';
  @import '../../assets/sass/helpers';

  .video-background {
    &::after {
      content: '';
      width: 100vw;
      height: 100vh;
      position: absolute;
      background: rgba(0, 0, 0, 0.7) url('../../assets/pattern.png') repeat;
    }

    video {
      object-fit: cover;
      width: 100vw;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      opacity: 0;
      transition: opacity .3s ease-in;
      &.active {
        opacity: 1;
      }
    }
  }

  .slider-background {
    position: absolute;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    &::after {
      @extend %content;
      position: absolute;
      top: 0;
      left: 0;
      background: rgba(0,0,0,0.7) url('../../assets/pattern.png');
    }

    .item {
      width: 100%;
      height: 100vh;
      background-position: center center;
      background-size: cover;
    }
  }

</style>
