<template>
  <section :class="{ 'vh-100 overflow-hidden': showModal }">
    <div class="container">
      <div class="row py-5 min-vh-100 align-items-center">
        <div class="col-12 pt-5">
          <h1 data-aos="fade" class="text-center mb-5">
            {{ $t('pages.contact.title') }}
          </h1>

          <div class="row">
            <div class="col-12 mb-5">
              <GmapMap
                v-if="mapPosition"
                :center="mapPosition"
                :zoom="16"
                :options="mapOptions"
                map-type-id="terrain"
                style="width: 100%; height: 400px"
                data-aos="fade" data-aos-delay="450">
                <GmapMarker
                  :position="mapPosition"
                  :clickable="true"
                  :draggable="false"
                  :icon="{ url: require('@/assets/images/icons/marker.png')}"
                />
              </GmapMap>
            </div>

            <div class="col-12 col-lg-6 mb-5 mb-lg-0 text-white">
              <div data-aos="fade" data-aos-delay="900" class="d-flex justify-content-around mb-3 aos-nav-anchor">
                <address class="mb-0">
                  <strong><u>BR</u></strong><br>
                  R. Oliveira Dias, 163<br>
                  Jd. Paulista<br>
                  São Paulo, SP 01433 030<br>
                  +55 11 3854 8035<br>
                  <a @click="changeLocation('pt')" href="#" class="d-inline-block mt-2">
                    {{ $t('pages.contact.changeLocation') }}
                  </a>
                </address>

                <address class="mb-0">
                  <strong><u>USA</u></strong><br>
                  201 S Biscayne Blvd<br>
                  #1200<br>
                  Miami, FL 33131<br>
                  +1 877 917 6648<br>
                  <a @click="changeLocation('en')" href="#" class="d-inline-block mt-2">
                    {{ $t('pages.contact.changeLocation') }}
                  </a>
                </address>
              </div>
            </div>

            <div data-aos="fade" data-aos-delay="1500" data-aos-anchor=".aos-nav-anchor" class="col-12 col-lg-6 align-self-center">
              <ul class="nav justify-content-center">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <font-awesome-icon size="2x" :icon="['fab' , 'facebook-f']"/>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <font-awesome-icon size="2x" :icon="['fab' , 'instagram']"/>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <font-awesome-icon size="2x" :icon="['fab' , 'linkedin']"/>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <font-awesome-icon size="2x" :icon="['fab' , 'vimeo']"/>
                  </a>
                </li>
              </ul>

              <a href="mailto:contato@produceria.com" class="d-block lead text-center mb-3">
                {{ $t('pages.contact.email') }}
              </a>

              <button @click="openModal" type="button" class="btn btn-primary d-block mx-auto mb-5 mb-lg-0">
                {{ $t('pages.contact.button') }}
              </button>

              <Modal v-if="showModal" @close="closeModal">
                <form slot="content">
                  <div class="row">
                    <div class="col-12 text-center">
                      <h1>
                        {{ $t('pages.contact.modal.title') }}
                      </h1>
                      <p class="lead">
                        {{ $t('pages.contact.modal.lead') }}
                      </p>
                    </div>
                  </div>

                  <div class="col-12 col-lg-10 offset-lg-1">
                    <div class="form-group">
                      <label for="name">{{ $t('pages.contact.form.name.label') }}</label>
                      <input v-model="contact.name" v-validate="'required|min:5'" type="text" name="name" autocomplete="name" class="form-control" :placeholder="$t('pages.contact.form.name.placeholder')"/>
                    </div>

                    <div class="form-group">
                      <label for="phone">{{ $t('pages.contact.form.phone.label') }}</label>
                      <input v-model="contact.phone" v-validate="'required|min:14'" v-mask="['+# (###) ###-####', '+## (##) #####-####', '+## (##) ####-####']" type="text" name="phone" autocomplete="phone" class="form-control" :placeholder="$t('pages.contact.form.phone.placeholder')"/>
                    </div>

                    <div class="form-group">
                      <label for="email">{{ $t('pages.contact.form.email.label') }}</label>
                      <input v-model="contact.email" v-validate="'required|email'" type="email" name="email" autocomplete="email" class="form-control" :placeholder="$t('pages.contact.form.email.placeholder')"/>
                    </div>

                    <div class="form-group">
                      <label for="subject">{{ $t('pages.contact.form.subject.label') }}</label>

                      <select v-model="contact.subject" v-validate="'required'" name="subject" class="custom-select">
                        <option selected value="contact">
                          {{ $t('pages.contact.form.subject.options.contact') }}
                        </option>
                        <option value="quotation">
                          {{ $t('pages.contact.form.subject.options.quotation') }}
                        </option>
                        <option value="financial">
                          {{ $t('pages.contact.form.subject.options.financial') }}
                        </option>
                        <option value="supplier">
                          {{ $t('pages.contact.form.subject.options.supplier') }}
                        </option>
                        <option value="application">
                          {{ $t('pages.contact.form.subject.options.application') }}
                        </option>
                      </select>
                    </div>

                    <div class="form-group">
                      <label for="message">{{ $t('pages.contact.form.message.label') }}</label>
                      <textarea v-model="contact.message" v-validate="'required|min:5'" name="message" class="form-control" rows="4" :placeholder="$t('pages.contact.form.message.placeholder')"/>
                    </div>

                    <button @click.prevent="submitForm" class="btn btn-primary pull-right" type="submit">
                      {{ $t('pages.contact.form.button') }}
                    </button>
                  </div>
                </form>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex'
import { Trans } from '@/plugins/Translation'
import { Modal } from '@/components'

export default {
  name: "ContactIndex",
  components: {
    Modal
  },

  data: () => ({
    showModal: false,
    contact: {
      name: '',
      phone: '',
      email: '',
      subject: 'contact',
      message: ''
    },
    mapPositions: {
      en: { lat: 25.7720909, lng: -80.2217413 },
      pt: { lat: -23.5828844, lng: -46.6689258 }
    },
    mapPosition: false,
    mapOptions: {
      zoomControl: false,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      rotateControl: false,
      fullscreenControl: true,
      disableDefaultUi: true,
      styles: [
        {
          "stylers": [
            {
              "visibility": "on"
            },
            {
              "saturation": -100
            },
            {
              "gamma": 0.54
            }
          ]
        }, {
          "featureType": "road",
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "water",
          "stylers": [
            {
              "color": "#4d4946"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text",
          "stylers": [
            {
              "visibility": "simplified"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#ffffff"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels.text",
          "stylers": [
            {
              "visibility": "simplified"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#ffffff"
            }
          ]
        },
        {
          "featureType": "transit.line",
          "elementType": "geometry",
          "stylers": [
            {
              "gamma": 0.48
            }
          ]
        },
        {
          "featureType": "transit.station",
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "gamma": 7.18
            }
          ]
        }
      ]
    }
  }),

  computed: {
    currentLanguage () {
      return Trans.currentLanguage
    }
  },

  watch: {
    currentLanguage: function (newValue, oldValue) {
      this.mapPosition = _.get(this.mapPositions, [newValue])
    }
  },

  mounted() {
    this.mapPosition = _.get(this.mapPositions, [this.currentLanguage])
  },

  methods: {
    ...mapActions({
      postContact: 'POST_CONTACT'
    }),

    submitForm() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.sendContact()
        }
      })
    },

    changeLocation(lang) {
      this.mapPosition = _.get(this.mapPositions, [lang])
    },

    async sendContact () {
      const response = await this.postContact({ contact: this.contact })

      if (response) {
        this.$toasted.show(response.data.message, {
          duration: 3000,
          position: 'bottom-right',
          type: ( response.ok ? "success" : "error" )
        })

        this.closeModal()
      }
    },

    openModal() {
      this.showModal = true
      this.scrollY = window.scrollY
    },

    closeModal() {
      this.showModal = false
      // FIXME: timeout to scrollto may not work sometimes, must find another way to preserve scroll
      setTimeout(()=> {
        window.scrollTo(0, this.scrollY)
      }, 50)
    }
  }
}
</script>

<style scoped lang="scss">
  @import "~bootstrap/scss/bootstrap-grid.scss";

  address {
    width: 50%;
  }

  @include media-breakpoint-down(md) {
    address {
      width: auto;
    }
  }
</style>
