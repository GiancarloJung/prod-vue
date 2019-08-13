<template>
  <section :class="{ 'vh-100 overflow-hidden': showModal }">
    <div class="container">
      <div class="row min-vh-100 py-5">
        <div class="col-12 pt-5 text-center">
          <h1 data-aos="fade" class="mb-5">Cases</h1>

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
          <b>Cliente</b>:  <small>{{ currentJob.client }}</small>
        </h3>

        <h3 class="mb-3">
          <b>Agência</b>:  <small>{{ currentJob.agency }}</small>
        </h3>

        <h3 class="mb-4">
          <b>Mídia</b>:  <small>{{ currentJob.media }}</small>
        </h3>

        <p v-html="currentJob.description"></p>
      </div>
    </ModalJob>

    <div class="container">
      <div class="row min-vh-100 py-5 align-items-center">
        <div class="col-12 text-center">
          <h1 data-aos="fade" class="mb-5">Prêmios</h1>

          <div class="row">
            <div v-for="(prize, index) in prizes" :key="`prizes-${index}`" class="item-prize col-12 col-sm-6 col-lg-4 mb-5 text-center">
              <div data-aos="zoom" data-aos-delay="450">
                <img src="@/assets/images/icons/star.svg" alt="Cannes Lions" class="img-fluid w-50 mb-4 text-white">
                <h4 class="mb-3 pb-4 font-weight-bold">
                  {{ prize.job }}
                </h4>
                <p v-for="(item, index) in prize.prize_list" :key="index" class="mb-2">
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
          <h1 class="mb-5">Outros Trabalhos</h1>

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
    jobs: [
      {
        name: 'Zoetrope Olinda',
        image: require('@/assets/images/jobs/zoetrope.png'),
        thumb: require('@/assets/images/jobs/thumb-zoetrope.png'),
        embed_id: '349450216',
        provider: 'vimeo',
        order: 7,
        client: 'L’Occitane',
        agency: 'Loducca',
        media: 'Exposição, Internet e Ação Solidária',
        description: 'A Zoetrope é um dispositivo para animação que produz a ilusão de movimento utilizando uma sequência de imagens ou figuras. Com essa técnica artesanal, foi criada uma ação especial em que os visitantes puderam interagir com a marca e com uma zoetrope elaborada para divulgar a linha de produtos da L’Occitane au Brésil, inspirada em mulheres da cidade pernambucana de Olinda.'
      }, {
        name: 'A Raquete do Jogo',
        image: require('@/assets/images/jobs/raquete.png'),
        thumb: require('@/assets/images/jobs/thumb-raquete.png'),
        embed_id: '349450734',
        provider: 'vimeo',
        order: 6,
        client: 'Guga Kuerten',
        agency: 'Loducca',
        media: 'Exposição, Internet, TV, Anúncio de Jornal e Revista',
        description: 'Em homenagem à trajetória do tenista brasileiro Guga Kuerten, foi criada uma série de raquetes personalizadas cujas cordas levavam lances marcantes da carreira do tenista. Idealizadas para serem vendidas em leilões beneficentes, o valor arrecadado com as raquetes foi revertido para o Instituto Guga Kuerten.'
      }, {
        name: 'Anúncio da Parafina',
        image: require('@/assets/images/jobs/parafina.png'),
        thumb: require('@/assets/images/jobs/thumb-parafina.png'),
        embed_id: '349451005',
        provider: 'vimeo',
        order: 11,
        client: 'Peugeot',
        agency: 'Loducca',
        media: 'Anúncio de Revista',
        description: 'Impresso 100% em parafina, material utilizado por surfistas como antiderrapante, o anúncio do Peugeot 207 Quicksilver foi feito para ser destacado e aplicado diretamente na prancha. O anúncio foi distribuído na principal revista de surf do Brasil, em praias de São Paulo e do Rio de Janeiro e no Super Surf (campeonato patrocinado pela Peugeot), unindo os valores da marca como inovação, tecnologia e design ao mundo do surf.'
      }, {
        name: 'A Música não Para',
        image: require('@/assets/images/jobs/musica.png'),
        thumb: require('@/assets/images/jobs/thumb-musica.png'),
        embed_id: '349451602',
        provider: 'vimeo',
        order: 10,
        client: 'MTV',
        agency: 'Loducca',
        media: 'TV e Internet',
        description: 'Projeto experimental feito em stop motion. Consistia em uma animação filmada de uma sequência de bexigas que estouravam em frente à câmera. Foram estourados 600 balões em um minuto, fixados e alinhados via laser em 200 metros de trilhos. Uma câmera posicionada sobre um carrinho que levava uma agulha era responsável por estourar as bexigas, gerando, assim, a animação.'
      }, {
        name: 'Anúncio em Airbag',
        image: require('@/assets/images/jobs/airbag.png'),
        thumb: require('@/assets/images/jobs/thumb-airbag.png'),
        embed_id: '349451960',
        provider: 'vimeo',
        order: 9,
        client: 'Peugeot',
        agency: 'Loducca',
        media: 'Anúncio de Revista',
        description: 'Para destacar a segurança do modelo Peugeot 408, que conta com seis airbags e oito pontos de proteção, foi desenvolvido um anúncio de revista especial que trazia uma miniatura de airbag encartada. Ao ser atingido, o airbag inflava em referência à segurança do automóvel.'
      }, {
        name: 'Anúncio Comestível',
        image: require('@/assets/images/jobs/comestivel.png'),
        thumb: require('@/assets/images/jobs/thumb-comestivel.png'),
        embed_id: '349452589',
        provider: 'vimeo',
        order: 12,
        client: 'MTV',
        agency: 'Loducca',
        media: 'Sustentabilidade, Anúncio de Revista e Jornal',
        description: 'Anúncio no formato de convite criado para o mercado publicitário para a apresentação do 4º Dossiê Universo Jovem da MTV, com o tema Sustentabilidade. A peça foi produzida em papel comestível e também contou com um hotsite para incentivar as pessoas a criar receitas inusitadas utilizando o anúncio.'
      }, {
        name: 'Cinta que Liga',
        image: require('@/assets/images/jobs/cinta.png'),
        thumb: require('@/assets/images/jobs/thumb-cinta.png'),
        embed_id: '349452743',
        provider: 'vimeo',
        order: 13,
        client: 'Nextel',
        agency: 'Loducca',
        media: 'Anúncio de Revista',
        description: 'Como forma de transmitir uma comunicação direta, eficiente e única, conceitos-chave para a marca Nextel, foi elaborada uma cinta especial entregue a executivos e personalidades do mundo dos negócios junto com a revista Exame. Ao receber a revista, com um simples toque, o consumidor era capaz de ligar para um consultor da operadora e ser atendido de maneira exclusiva e personalizada.'
      }, {
        name: 'A Loja Vazia',
        image: require('@/assets/images/jobs/loja.png'),
        thumb: require('@/assets/images/jobs/thumb-loja.png'),
        embed_id: '349452933',
        provider: 'vimeo',
        order: 8,
        client: 'Shopping Villa Lobos',
        agency: 'Loducca',
        media: 'Educação Ambiental, Sustentabilidade, TV e Internet',
        description: 'Elaborada para a campanha do agasalho de São Paulo, a Loja Vazia é um projeto criado com a licença “creative commons”, o que permitiu ser replicado de diversas formas no Brasil e no resto do mundo. Trata-se de uma ideia simples, um espaço de vidro onde, em vez de comprar, as pessoas podem deixar roupas em prateleiras vazias. No fim do dia, as roupas são retiradas e encaminhadas para instituições de caridade.'
      }, {
        name: 'Nossa Chama',
        image: require('@/assets/images/jobs/chama.png'),
        thumb: require('@/assets/images/jobs/thumb-chama.png'),
        embed_id: '349453289',
        provider: 'vimeo',
        order: 3,
        client: 'Santander',
        agency: 'Suno Creators',
        media: 'TV e Internet',
        description: 'Campanha Institucional para o novo posicionamento da marca. Foi ressaltado o conceito da chama que está presente na identidade do banco, fortalecendo essa imagem com ousadia, inspiração e transparência.<br>O projeto começou com um monstro composto por referências e resultou na produção completa do vídeo.'
      }, {
        name: 'Todos a Bordo',
        image: require('@/assets/images/jobs/eisenbahn.png'),
        thumb: require('@/assets/images/jobs/thumb-eisenbahn.png'),
        embed_id: '349453531',
        provider: 'vimeo',
        order: 2,
        client: 'Eisenbahn',
        agency: 'Suno Creators',
        media: 'Mobiliário Urbano, TV e Internet',
        description: 'O novo posicionamento de marca da Eisenbahn é, ao mesmo tempo, um convite para os consumidores conhecerem mais o universo das cervejas artesanais por meio de diferentes estilos e para a comunidade cervejeira compartilhar a sua paixão por fazer cerveja.'
      }, {
        name: 'Stories Impressos',
        image: require('@/assets/images/jobs/stories.png'),
        thumb: require('@/assets/images/jobs/thumb-stories.png'),
        embed_id: '349671844',
        provider: 'vimeo',
        order: 5,
        client: 'Bauducco / Instagram',
        agency: 'CP+B',
        media: 'Internet e Impressão',
        description: 'Ação inédita realizada pela Bauducco que permitiu ao público da cidade de São Paulo desenvolver seu próprio papel de presente utilizando o Instagram Stories. A ação durou seis horas e as criações foram impressas e entregues na casa dos criadores.'
      }, {
        name: 'A Onda de 10 Andares',
        image: require('@/assets/images/jobs/onda.png'),
        thumb: require('@/assets/images/jobs/thumb-onda.png'),
        embed_id: '349672087',
        provider: 'vimeo',
        order: 4,
        client: 'Mitsubishi',
        agency: 'Ampfy',
        media: 'Internet e Mídia exterior',
        description: 'No Dia do Surfista, a Mitsubishi Motors homenageou o atleta Carlos Burle, dando a dimensão da maior onda surfada por ele que marcou o recorde mundial, com um prédio de dez andares na cidade de Fortaleza.'
      }, {
        name: 'Black Box',
        image: require('@/assets/images/jobs/black.png'),
        thumb: require('@/assets/images/jobs/thumb-black.png'),
        embed_id: '349672271',
        provider: 'vimeo',
        order: 1,
        client: 'Zumbi dos Palmares',
        agency: 'JWT',
        media: 'Lorem Ipsum, Dolor Sit',
        description: 'Com o objetivo de divulgar o legado cultural e histórico dos afrodescendentes que não aparece nos livros didáticos, a Faculdade Zumbi dos Palmares e a J. Walter Thompson Brasil produziram o projeto Black Box. Trata-se de um livro com mais de 200 páginas com conteúdo inédito sobre a história negra.<br><br>Foi usado um mapa da região do Quilombo dos Palmares, símbolo de resistência à escravidão no Brasil. Por meio de design generativo, pequenas versões desse mapa foram reunidas para formar diversas imagens, deixando o DNA da história negra impresso em cada ilustração.<br><br>Ao folhear as páginas, os leitores se deparam com folhas de papel translúcido que omitem partes do texto com caixas pretas, que não permitem ler sobre as conquistas dos povos africanos.'
      }
    ],
    prizes: [
      {
        job: 'Black Box',
        prize_list: [{
          name: '2019 CANNES LIONS',
          category: 'Industry Craft / Gold'
        }]
      }, {
        job: 'A Raquete do Jogo',
        prize_list: [{
          name: '2016 El Ojo Esportes',
          category: 'Projeto de Produto / Bronze'
        }]
      }, {
        job: 'The Alchemist Ad',
        prize_list: [{
          name: '2016 One Show',
          category: 'Promotional Items / Bronze'
        }]
      }, {
        job: 'A Loja Vazia',
        prize_list: [{
          name: '2014 One Show',
          category: 'Experimental, Instalation / Bronze'
        }, {
          name: '2013 CANNES LIONS',
          category: 'Design / Gold'
        }, {
          name: '2013 Tomorrow Awards',
        }]
      }, {
        job: 'Balões / A Música não Para',
        prize_list: [{
          name: '2012 FIAP',
          category: 'Filme, Craft / Gold'
        }, {
          name: '2011 CANNES LIONS',
          category: 'Craft / Gold'
        }, {
          name: '2011 CANNES LIONS',
          category: 'Film / Bronze'
        }]
      }, {
        job: 'Anúncio de Parafina',
        prize_list: [{
          name: '2010 CANNES LIONS',
          category: 'Media / Shortlist'
        }, {
          name: '2010 CANNES LIONS',
          category: 'Direct / Bronze'
        }]
      }
    ],
    works: [
      {
        name: 'Sesc',
        image: require('@/assets/images/works/sesc.png'),
        description: 'Landing page Bienal Naïfs do Brasil 2018.'
      }, {
        name: 'Jonson & Jonson',
        image: require('@/assets/images/works/jonson.png'),
        description: 'Posters para apresentação de campanha.'
      }, {
        name: 'Santander',
        image: require('@/assets/images/works/santander.png'),
        description: 'Campanha de lançamento do Farol Santander.'
      }, {
        name: 'Baden Baden',
        image: require('@/assets/images/works/baden.png'),
        description: 'Poster especial, parabéns Campos do Jordão.'
      }, {
        name: 'Mitsubishi',
        image: require('@/assets/images/works/mitsubishi.png'),
        description: 'Campanha de lançamento New Outlander.'
      }, {
        name: 'Andorinha',
        image: require('@/assets/images/works/andorinha.png'),
        description: 'Ilustração, retoque e ambientação (KV).'
      }, {
        name: 'Nubank',
        image: require('@/assets/images/works/nubank1.png'),
        description: 'Campanha interna para equipe de design.'
      }, {
        name: 'Santander',
        image: require('@/assets/images/works/santander2.png'),
        description: 'Campanha para diversas mídias, on e offline.'
      }, {
        name: 'Localiza Hertz',
        image: require('@/assets/images/works/localiza-hertz.png'),
        description: 'Campanha de lançamento, fusão de marcas.',
      }, {
        name: 'Doritos',
        image: require('@/assets/images/works/doritos.png'),
        description: 'Produções de peças para evento Lollapalooza.'
      }, {
        name: 'Nubank',
        image: require('@/assets/images/works/nubank2.png'),
        description: 'Welcomekit para equipe de design.'
      }, {
        name: 'Dr. Consulta',
        image: require('@/assets/images/works/drconsulta.png'),
        description: 'Campanha para diversas mídias, on e offline.'
      }
    ],
  }),

  computed: {
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

  .item-prize {
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
