<template>
  <section class="section-about">
    <div class="container">
      <div class="row vh-100 align-items-center">
        <div class="col-12">
          <div class="row">
            <div class="col-12 align-self-center col-lg-6">
              <h1 data-aos="fade">
                Conceito
              </h1>
            </div>

            <div class="col-12 col-lg-6">
              <p data-aos="fade" data-aos-delay="450" class="concept">
                O princípio básico da Produceria é produzir coisas. Qualquer tipo de coisa. Um material impresso, um filme, um projeto digital, um projeto especial, uma instalação artística ou até um simples anúncio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row min-vh-100 py-5 align-items-center">
        <div class="col-12 pt-5 text-center">
          <h1 data-aos="fade" class="aos-services-anchor mb-5">
            Serviços
          </h1>

          <div class="row">
            <div v-for="(service, index) in services" :key="`service-${index}`" class="col-sm-6 col-lg-4 mb-5">
              <div data-aos="fade" :data-aos-delay="150 * (index + 1)" data-aos-anchor=".aos-services-anchor" class="text-center">
                <font-awesome-icon :icon="service.icon" size="3x" class="mb-3 text-white"/>

                <h4 class="card-title">{{ service.title }}</h4>
                <p class="card-text">
                  {{ service.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="false" class="container">
      <div class="row py-5 min-vh-100 align-items-center">
        <div class="col-12 pt-5 text-center">
          <h1 data-aos="fade" class="aos-team-anchor mb-5">
            Equipe
          </h1>

          <div class="d-flex flex-wrap justify-content-around">
            <div v-for="(person, index) in people" :key="`person-${index}`" data-aos="fade" data-aos-delay="450" data-aos-anchor=".aos-team-anchor" class="item-person text-center mb-3">
              <img :src="person.picture" :alt="person.name" class="mb-2">
              <p>
                <b>{{ person.name }}</b><br>
                {{ person.profession }}<br>
                <a :href="`mailto:${person.email}`">
                  <font-awesome-icon icon="envelope" />
                </a>

                <a :href="`tel:${person.phone}`">
                  <font-awesome-icon icon="mobile-alt" />
                </a>
              </p>
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
  name: "AboutIndex",
  data: () => ({
    services: [
      {
        icon: 'sitemap',
        title: 'Projetos Estruturais',
        description: 'Análise interna da área de produção, detecção de pontos frágeis, desde equipe a processos e proposta de estruturação às necessidades.',
      }, {
        icon: 'star',
        title: 'Projetos Especiais',
        description: 'Toda e qualquer ideia-demanda que excede as técnicas conhecidas, ou que requeira um tratamento de produção diferenciado.',
      }, {
        icon: 'print',
        title: 'Projetos Gráficos',
        description: 'Um execelente design precisa ser complementado com uma ótima técnica de produção gráfica, ajudamos a desenvolvê-lo.',
      }, {
        icon: 'images',
        title: 'Image Retouching',
        description: 'Valorizamos detalhes importantes de cada imagem, para apresentarem boa resolução e a qualidade necessária para cada tipo de mídia.',
      }, {
        icon: 'code',
        title: 'Projetos Digitais',
        description: 'Vamos ajudá-lo desde a ideia até a aplicação final. Desenvolvemos para web com foco em design, conteúdo e experiência do usuário.',
      }, {
        icon: 'video',
        title: 'Motion & Filme',
        description: 'Produzimos filmes, motion graphics, 3D estáticas ou animadas, edição com intercessões entre as técnicas, etc.',
      }
    ],
    people: [
      {
        name: 'Allan Nunes',
        picture: require('@/assets/images/team/team-allan-nunes.png'),
        profession: 'Arte Finalista',
        email: 'allan.nunes@produceria.com.br',
        phone: '+551138548035'
      }, {
        name: 'Carlos César',
        picture: require('@/assets/images/team/team-carlos-cesar-marcos.png'),
        profession: 'Arte Finalista',
        email: 'carlos.cesar@produceria.com.br',
        phone: '+551138548035'
      }, {
        name: 'Carol Galastri',
        picture: require('@/assets/images/team/team-carol-galastri.png'),
        profession: 'Producer',
        email: 'carol.galastri@produceria.com.br',
        phone: '+551138548035'
      }, {
        name: 'Celso Dal Sasso',
        picture: require('@/assets/images/team/team-celso-dal-sasso.png'),
        profession: 'Arte Finalista',
        email: 'celso.sasso@produceria.com.br',
        phone: '+551138548035'
      }, {
        name: 'Cleusa Quadros',
        picture: require('@/assets/images/team/team-cleusa-quadros.png'),
        profession: 'Revisora',
        email: 'cleusa.quadros@produceria.com.br',
        phone: '+551138548035'
      }, {
        name: 'Daniel Costa',
        picture: require('@/assets/images/team/team-daniel-costa.png'),
        profession: 'Producer',
        email: 'daniel@produceria.com.br',
        phone: '+551138548035'
      }, {
        name: 'David Maia',
        picture: require('@/assets/images/team/team-david-maia.png'),
        profession: 'Retocador',
        email: 'david.maia@produceria.com.br',
        phone: '+551138548035'
      }, {
        name: 'Edson Santos',
        picture: require('@/assets/images/team/team-edson-santos.png'),
        profession: 'Producer',
        email: 'edson.santos@produceria.com.br',
        phone: '+551138548035'
      }, {
        name: 'Eduardo Coleoni',
        picture: require('@/assets/images/team/team-eduardo-coleoni.png'),
        profession: 'Tráfego',
        email: 'eduardo.coleoni@produceria.com.br',
        phone: '+551138548035'
      }, {
        name: 'Fernando Bueno',
        picture: require('@/assets/images/team/team-fernando-bueno.png'),
        profession: 'Tecnologia',
        email: 'contato@produceria.com.br',
        phone: '+551138548035'
      }, {
        name: 'Giancarlo Jung',
        picture: require('@/assets/images/team/team-giancarlo.png'),
        profession: 'Web Developer',
        email: 'giancarlo@produceria.com.br',
        phone: '+5511975056732'
      }, {
        name: 'Ian Bortz',
        picture: require('@/assets/images/team/team-ian-bortz.png'),
        profession: 'Motion Design',
        email: 'ian.bortz@produceria.com.br',
        phone: '+551138548035'
      }, {
        name: 'Luciano Marangoni',
        picture: require('@/assets/images/team/team-luciano-marangoni.png'),
        profession: 'Producer',
        email: 'luciano@produceria.com.br',
        phone: '+551138548035'
      }, {
        name: 'Marcelo Tonet',
        picture: require('@/assets/images/team/team-marcelo-tonet.png'),
        profession: 'Programador',
        email: 'marcelo.tonet@produceria.com.br',
        phone: '+551138548035'
      }, {
        name: 'Marina Jarouche',
        picture: require('@/assets/images/team/team-marina-jarouche.png'),
        profession: 'Revisora',
        email: 'marina.jarouche@produceria.com.br',
        phone: '+551138548035'
      }, {
        name: 'Nelson Graça',
        picture: require('@/assets/images/team/team-nelson-graca.png'),
        profession: 'Financeiro',
        email: 'nelson.graca@produceria.com.br',
        phone: '+551138548035'
      }, {
        name: 'Rodolfo Belon',
        picture: require('@/assets/images/team/team-rodolfo-bellon.png'),
        profession: 'Editor de Video',
        email: 'rodolfo.belon@produceria.com.br',
        phone: '+551138548035'
      }, {
        name: 'Sid Fernandes',
        picture: require('@/assets/images/team/team-sid-fernandes.png'),
        profession: 'Diretor',
        email: 'sid@produceria.com.br',
        phone: '+551138548035'
      }, {
        name: 'Takeshi Suguio',
        picture: require('@/assets/images/team/team-takeshi-suguio.png'),
        profession: 'Arte Finalista',
        email: 'takeshi@produceria.com.br',
        phone: '+551138548035'
      }, {
        name: 'Telmo Ursini',
        picture: require('@/assets/images/team/team-telmo-ursini.png'),
        profession: 'Producer',
        email: 'telmo.ursini@produceria.com.br',
        phone: '+551138548035'
      }, {
        name: 'Zefinha',
        picture: require('@/assets/images/team/team-josefa.png'),
        profession: 'Colaboradora',
        email: 'contato@produceria.com.br',
        phone: '+551138548035'
      }
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

  .concept {
    font-size: 2rem;
  }

  .item-person {
    width: 14.25%;
    img {
      width: 75px;
      height: 75px;
    }
    a {
      margin-right: 6px;
    }
  }

  @include media-breakpoint-down(md) {
    .item-person {
      width: 20%;
    }
  }

  @include media-breakpoint-down(sm) {
    .item-person {
      width: 25%;
    }
  }
</style>
