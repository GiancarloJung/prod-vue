<template>
  <section :class="{ 'vh-100 overflow-hidden': showModal }">
    <div class="container">
      <div class="row py-5 min-vh-100 align-items-center">
        <div class="col-12 pt-5">
          <h1 data-aos="fade" class="text-center mb-5">
            Contato
          </h1>

          <div class="row">
            <div class="col-12 mb-5">
              <GmapMap
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
                />
              </GmapMap>
            </div>

            <div class="col-12 col-lg-6 mb-5 mb-lg-0 text-white">
              <div data-aos="fade" data-aos-delay="900" class="d-flex justify-content-around mb-3 aos-nav-anchor">
                <address class="mb-0">
                  <strong><i>BR</i></strong><br>
                  R. Oliveira Dias, 163<br>
                  Jd. Paulista<br>
                  São Paulo, SP 01433 030<br>
                  +55 11 3854 8035
                </address>

                <address class="mb-0">
                  <strong><i>USA</i></strong><br>
                  201 S Biscayne Blvd<br>
                  #1200<br>
                  Miami, FL 33131<br>
                  +1 877 917 6648
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
                    <font-awesome-icon size="2x" :icon="['fab' , 'youtube']"/>
                  </a>
                </li>
              </ul>

              <a href="mailto:contato@produceria.com.br" class="d-block lead text-center mb-3">
                contato@produceria.com.br
              </a>

              <button @click="openModal" type="button" class="btn btn-primary d-block mx-auto mb-5 mb-lg-0">
                Entre em Contato
              </button>

              <Modal v-if="showModal" @close="closeModal">
                <form slot="content">
                  <div class="row">
                    <div class="col-12 text-center">
                      <h1>Olá!</h1>
                      <p class="lead">
                        Preencha o formulário abaixo para entrar em contato conosco.
                      </p>
                    </div>
                  </div>

                  <div class="col-12 col-lg-10 offset-lg-1">
                    <div class="form-group">
                      <label for="name">Nome</label>
                      <input v-model="contact.name" v-validate="'required|min:5'" type="text" name="name" autocomplete="name" class="form-control" placeholder="Preencha o seu Nome"/>
                    </div>

                    <div class="form-group">
                      <label for="phone">Telefone</label>
                      <input v-model="contact.phone" v-validate="'required|min:14'" v-mask="['+# (###) ###-####', '+## (##) #####-####', '+## (##) ####-####']" type="text" name="phone" autocomplete="phone" class="form-control" placeholder="Preencha o seu Telefone"/>
                    </div>

                    <div class="form-group">
                      <label for="email">Email</label>
                      <input v-model="contact.email" v-validate="'required|email'" type="email" name="email" autocomplete="email" class="form-control" placeholder="Preencha o seu Email"/>
                    </div>

                    <div class="form-group">
                      <label for="subject">Assunto</label>

                      <select v-model="contact.subject" v-validate="'required'" name="subject" class="custom-select">
                        <option selected value="contact">Contato</option>
                        <option value="quotation">Orçamento</option>
                        <option value="financial">Financeiro</option>
                        <option value="supplier">Fornecedor</option>
                        <option value="application">Currículo</option>
                      </select>
                    </div>

                    <div class="form-group">
                      <label for="message">Mensagem</label>
                      <textarea v-model="contact.message" v-validate="'required|min:5'" name="message" class="form-control" rows="4" placeholder="Preencha a sua Mensagem"/>
                    </div>

                    <button @click.prevent="submitForm" class="btn btn-primary pull-right" type="submit">
                      Enviar Mensagem
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
import AOS from 'aos'
import { mapActions } from 'vuex'
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
    mapPosition: { lat: -23.5828844, lng: -46.6689258 },
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

  mounted() {
    AOS.init({
      duration: 900,
      easing: 'ease-in-out',
      once: true,
    })
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
