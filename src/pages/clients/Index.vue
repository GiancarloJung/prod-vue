<template>
  <section class="section-about">
    <div class="container">
      <div class="row py-5 min-vh-100 align-items-center">
        <div class="col-12 pt-5 text-center">
          <h1 data-aos="fade" class="mb-5">
            {{ $t('pages.clients.title') }}
          </h1>

          <div data-aos="fade" data-aos-delay="450" class="d-flex flex-wrap">
            <div v-for="(client, index) in clients" :key="`client-${index}`" class="item-client">
              <img :src="client.image" :alt="client.name" class="img-fluid mx-auto mb-3">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import AOS from 'aos'

export default {
  name: "ClientsIndex",
  data: () => ({
    clients: [
      {
        name: 'Ampfy',
        image: require('@/assets/images/clients/client-ampfy.png')
      }, {
        name: 'Andorinha',
        image: require('@/assets/images/clients/client-andorinha.png')
      }, {
        name: 'Baden-Baden',
        image: require('@/assets/images/clients/client-baden-baden.png')
      }, {
        name: 'Bayer',
        image: require('@/assets/images/clients/client-bayer.png')
      }, {
        name: 'Ben',
        image: require('@/assets/images/clients/client-ben.png')
      }, {
        name: 'Bradesco',
        image: require('@/assets/images/clients/client-bradesco.png')
      }, {
        name: 'Casa do Saber',
        image: require('@/assets/images/clients/client-casa-do-saber.png')
      }, {
        name: 'CP+B',
        image: require('@/assets/images/clients/client-cpb.png')
      }, {
        name: 'Doritos',
        image: require('@/assets/images/clients/client-doritos.png')
      }, {
        name: 'Dr. Consulta',
        image: require('@/assets/images/clients/client-dr-consulta.png')
      }, {
        name: 'Eisenbahn',
        image: require('@/assets/images/clients/client-eisenbahn.png')
      }, {
        name: 'Econre Hotel',
        image: require('@/assets/images/clients/client-encore-hotel.png')
      }, {
        name: 'Estadão',
        image: require('@/assets/images/clients/client-estadao.png')
      }, {
        name: 'Facebook',
        image: require('@/assets/images/clients/client-facebook.png')
      }, {
        name: 'Getnet',
        image: require('@/assets/images/clients/client-getnet.png')
      }, {
        name: 'Gol',
        image: require('@/assets/images/clients/client-gol.png')
      }, {
        name: 'GrecoDesign',
        image: require('@/assets/images/clients/client-grecodesign.png')
      }, {
        name: 'Grupo TV1',
        image: require('@/assets/images/clients/client-grupo-tv1.png')
      }, {
        name: 'Heineken',
        image: require('@/assets/images/clients/client-heineken.png')
      }, {
        name: 'Iguatemi',
        image: require('@/assets/images/clients/client-iguatemi.png')
      }, {
        name: 'iFood',
        image: require('@/assets/images/clients/client-ifood.png')
      }, {
        name: 'Instagram',
        image: require('@/assets/images/clients/client-instagram.png')
      }, {
        name: 'Johnson & Johnson',
        image: require('@/assets/images/clients/client-jonsonnjonson.png')
      }, {
        name: 'JWT',
        image: require('@/assets/images/clients/client-jwt.png')
      }, {
        name: 'Kick',
        image: require('@/assets/images/clients/client-kick.png')
      }, {
        name: 'La Casa Bernacca',
        image: require('@/assets/images/clients/client-la-casa-bernacca.png')
      }, {
        name: 'Lenovo',
        image: require('@/assets/images/clients/client-lenovo.png')
      }, {
        name: 'Libbs',
        image: require('@/assets/images/clients/client-libbs.png')
      }, {
        name: 'Localiza Hertz',
        image: require('@/assets/images/clients/client-localiza-hertz.png')
      }, {
        name: 'Localiza Seminovos',
        image: require('@/assets/images/clients/client-localiza-seminovos.png')
      }, {
        name: 'Mitsubishi',
        image: require('@/assets/images/clients/client-mitsubishi.png')
      }, {
        name: 'Moura Leite',
        image: require('@/assets/images/clients/client-moura-leite.png')
      }, {
        name: 'Nubank',
        image: require('@/assets/images/clients/client-nubank.png')
      }, {
        name: 'Cafés Orfeu',
        image: require('@/assets/images/clients/client-orfeu.png')
      }, {
        name: 'Perdigão',
        image: require('@/assets/images/clients/client-perdigao.png')
      }, {
        name: 'Risqué',
        image: require('@/assets/images/clients/client-risque.png')
      }, {
        name: 'Santander',
        image: require('@/assets/images/clients/client-santander.png')
      }, {
        name: 'SemParar',
        image: require('@/assets/images/clients/client-semparar.png')
      }, {
        name: 'Sesc',
        image: require('@/assets/images/clients/client-sesc.png')
      }, {
        name: 'SKY',
        image: require('@/assets/images/clients/client-sky.png')
      }, {
        name: 'SOL',
        image: require('@/assets/images/clients/client-sol.png')
      }, {
        name: 'SUNO',
        image: require('@/assets/images/clients/client-suno.png')
      }, {
        name: 'Suzuki',
        image: require('@/assets/images/clients/client-suzuki.png')
      }, {
        name: 'TendTudo',
        image: require('@/assets/images/clients/client-tendtudo.png')
      }, {
        name: 'Tidal',
        image: require('@/assets/images/clients/client-tidal.png')
      }, {
        name: 'To.Do',
        image: require('@/assets/images/clients/client-todo.png')
      }, {
        name: 'Udacity',
        image: require('@/assets/images/clients/client-udacity.png')
      }, {
        name: 'Vivara',
        image: require('@/assets/images/clients/client-vivara.png')
      },
    ]
  }),

  mounted() {
    AOS.init({
      duration: 900,
      easing: 'ease-in-out',
      once: true,
    })
  }
}
</script>

<style scoped lang="scss">
  @import "~bootstrap/scss/bootstrap-grid.scss";

  .item-client {
    max-width: 12.5%;
  }

  @include media-breakpoint-down(md) {
    .item-client {
      max-width: 25%;
    }
  }
</style>
