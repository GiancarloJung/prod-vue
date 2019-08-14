<template>
  <section :class="{ 'vh-100 overflow-hidden': showModal }">
    <div class="container">
      <div class="row min-vh-100 py-5">
        <div class="col-12 pt-5 text-center">
          <h1 data-aos="fade" class="mb-5">
            {{ $t('pages.portfolio.cases') }}
          </h1>

          <div class="row">
            <div v-for="(job, index) in orderedJobs" :key="`job-${index}`" class="col-12 col-sm-6 col-lg-4">
              <ItemJob :job="job" @openModal="openModal(index)" data-aos="fade" data-aos-delay="450" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <ModalJob v-if="showModal && currentJob" @close="closeModal" @nextJob="nextJob" @prevJob="prevJob" :job="currentJob">
      <h1 slot="header">{{ currentJob.name }}</h1>

      <vue-plyr slot="video" :options="{ratio: '16:9'}" :poster="currentJob.image" ref="player">
        <div :data-plyr-provider="currentJob.provider" :data-plyr-embed-id="currentJob.embed_id"></div>
      </vue-plyr>

      <div slot="body">
        <h3 class="mb-3">
          <b>{{ $t('pages.portfolio.client') }}</b>:  <small>{{ currentJob.client }}</small>
        </h3>

        <h3 class="mb-3">
          <b>{{ $t('pages.portfolio.agency') }}</b>:  <small>{{ currentJob.agency }}</small>
        </h3>

        <h3 class="mb-4">
          <b>{{ $t('pages.portfolio.media') }}</b>:  <small>{{ currentJob.media }}</small>
        </h3>

        <p v-html="currentJob.description"></p>
      </div>
    </ModalJob>

    <div class="container">
      <div class="row min-vh-100 py-5 align-items-center">
        <div class="col-12 text-center">
          <h1 data-aos="fade" class="mb-5">
            {{ $t('pages.portfolio.awards') }}
          </h1>

          <div class="row">
            <div v-for="(award, index) in awards" :key="`awards-${index}`" class="item-award col-12 col-sm-6 col-lg-4 mb-5 text-center">
              <div data-aos="zoom" data-aos-delay="450">
                <img src="@/assets/images/icons/star.svg" alt="Cannes Lions" class="img-fluid w-50 mb-4 text-white">
                <h4 class="mb-3 pb-4 font-weight-bold">
                  {{ award.job }}
                </h4>
                <p v-for="(item, index) in award.award_list" :key="index" class="mb-2">
                  <strong>{{ item.name }}</strong><br>
                  {{ item.category }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row vh-100 py-5 align-items-center">
        <div data-aos="fade" class="col-12 col-lg-6 pt-md-5 text-center text-lg-left">
          <h1 class="mb-5">{{ $t('pages.portfolio.works') }}</h1>

          <slick :options="slickCaptionsOptions" ref="slider-captions" class="slider-captions d-none d-lg-block">
            <div v-for="(work, index) in works" :key="`work-caption-${index}`" class="item-work-caption">
              <div class="content pl-4">
                <h2>{{ work.name }}</h2>
                <p>{{ work.description }}</p>
          		</div>
            </div>
          </slick>
        </div>

        <div data-aos="fade" data-aos-delay="450" class="col-12 col-lg-6 pb-5 pb-lg-0">
          <slick :options="slickImagesOptions" ref="slider-images" class="slider-images">
            <div v-for="(work, index) in works" :key="`work-${index}`" class="item-work p-4" :style="{ backgroundImage: `url('${work.image}')` }">
              <img :src="work.image" :alt="work.name" class="img-fluid d-block m-auto">

              <div class="content d-flex flex-wrap align-items-end pl-3 d-lg-none">
                <div>
                  <h2>{{ work.name }}</h2>
                  <p>{{ work.description }}</p>
                </div>
          		</div>
          	</div>
          </slick>

          <div class="slider-arrow slider-prev text-white">
            <font-awesome-icon icon="angle-left" size="2x" />
          </div>

          <div class="slider-arrow slider-next text-white">
            <font-awesome-icon icon="angle-right" size="2x" />
          </div>
        </div>
      </div>
    </div>

    <ScrollIndicator />
  </section>
</template>
<script>
import { mapGetters } from 'vuex'
import Slick from 'vue-slick'
import { ItemJob, ModalJob, ScrollIndicator } from '@/components'

export default {
  name: "PortfolioIndex",
  components: { Slick, ItemJob, ModalJob, ScrollIndicator },
  data: () => ({
    slickImagesOptions: {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      fade: true,
      asNavFor: '.slider-captions'
    },
    slickCaptionsOptions: {
      slidesToShow: 1,
      arrows: true,
      prevArrow: '.slider-prev',
      nextArrow: '.slider-next',
      dots: false,
      fade: true,
      asNavFor: '.slider-images'
    },
    activeJob: null,
    showModal: false,
    scrollY: 0,
  }),

  computed: {
    ...mapGetters({
      jobs: "job/GET_JOBS",
      awards: "award/GET_AWARDS",
      works: "work/GET_WORKS",
    }),

    currentJob() {
      if (this.activeJob != null) {
        return this.orderedJobs[this.activeJob]
      }
      return false
    },

    orderedJobs: function () {
      return _.orderBy(this.jobs, 'order')
    }
  },

  methods: {
    openModal(index) {
      this.activeJob = index
      this.showModal = true

      this.scrollY = window.scrollY
    },

    closeModal() {
      this.activeJob = null
      this.showModal = false

      // FIXME: timeout to scrollto may not work sometimes, must find another way to preserve scroll
      setTimeout(()=> {
        window.scrollTo(0, this.scrollY)
      }, 50)
    },

    prevJob() {
      this.activeJob > 0 ? this.activeJob-- : this.activeJob = this.jobs.length - 1

      this.$refs.player.player.source = {
        type: 'video',
        poster: this.currentJob.image,
        sources: [
          {
            src: this.currentJob.embed_id,
            provider: this.currentJob.provider
          },
        ],
      }
    },

    nextJob() {
      this.activeJob < this.jobs.length - 1 ? this.activeJob++ : this.activeJob = 0

      this.$refs.player.player.source = {
        type: 'video',
        poster: this.currentJob.image,
        sources: [
          {
            src: this.currentJob.embed_id,
            provider: this.currentJob.provider
          },
        ],
      }
    }
  }
}
</script>

<style scoped lang="scss">
  @import "~bootstrap/scss/bootstrap-grid.scss";
  @import '../../assets/sass/variables';
  @import '../../assets/sass/helpers';

  .item-award {
    img {
      max-width: 130px;
    }
    h4 {
      position: relative;
      padding-bottom: 8px;
      &::after {
        @extend %content;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        width: 75%;
        height: 2px;
        background: white;
      }
    }
  }

  .item-work {
    height: calc(100vh - 3rem);
    position: relative;
    max-height: 750px;
    background-size: cover;
    background-position: center center;
    overflow: hidden;
    &::before, &::after {
      @extend %content;
      width: 104%;
      height: 104%;
      position: absolute;
      top: -2%;
      left: -2%;
    }
    &::before {
      background: inherit;
      background-size: cover;
      transform-origin: center;
      transform: scale(1.2);
    }
    &::after {
      z-index: 5;
      background: url('../../assets/pattern.png') repeat,
        linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(0,0,0,.8) 40%, rgba(0,0,0,.3) 100%);
    }

    .content {
      position: absolute;
      width: 100%;
      height: 100px;
      bottom: 0;
      z-index: 15;
      background: linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,.7) 30%, rgba(0,0,0,0) 100%);
    }

    img {
      @include centered;
      z-index: 10;
      max-width: calc(100% - 3rem);
      max-height: calc(100% - 3rem);
    }
  }

  .slider-arrow {
    @include vertical-centered;
    &.slider-next {
      right: -15px;
    }
    &.slider-prev {
      left: -15px;
    }
  }

  @include media-breakpoint-down(md) {
    .slider-arrow {
      &.slider-next {
        right: -5px;
      }
      &.slider-prev {
        left: -5px;
      }
    }
  }

  @include media-breakpoint-down(sm) {
    .slider-arrow {
      &.slider-next {
        right: 5px;
      }
      &.slider-prev {
        left: 5px;
      }
    }

    .item-work {
      height: calc(100vh - 9rem);
    }
  }
</style>
