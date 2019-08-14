import api from '@/services/api'
import { Trans } from '@/plugins/Translation'

const INITIAL_STATE = {
  services: [
    {
      icon: 'sitemap',
      title: {
        en: 'Foundational Projects',
        pt: 'Projetos Estruturais'
      },
      description: {
        en: 'Internal analysis of the production department; rooting out fragile spots, from the staff up to processes; and the proposition of a new structure that might fulfil every need.',
        pt: 'Análise interna da área de produção, detecção de pontos frágeis, desde equipe a processos e proposta de estruturação às necessidades.'
      }
    }, {
      icon: 'star',
      title: {
        en: 'Special Projects',
        pt: 'Projetos Especiais',
      },
      description: {
        en: 'Every idea/request that surpasses the known techniques or that requires a singular production strategy.',
        pt: 'Toda e qualquer ideia-demanda que excede as técnicas conhecidas, ou que requeira um tratamento de produção diferenciado.'
      }
    }, {
      icon: 'print',
      title: {
        en: 'Graphic Projects',
        pt: 'Projetos Gráficos',
      },
      description: {
        en: 'An excellent design calls for a great graphic production technique. We help develop it.',
        pt: 'Um execelente design precisa ser complementado com uma ótima técnica de produção gráfica, ajudamos a desenvolvê-lo.'
      }
    }, {
      icon: 'images',
      title: {
        en: 'Image Retouching',
        pt: 'Image Retouching',
      },
      description: {
        en: 'We are detail-driven when it comes to images, so they end up with good resolution and the needed quality for each type of media.',
        pt: 'Valorizamos detalhes importantes de cada imagem, para apresentarem boa resolução e a qualidade necessária para cada tipo de mídia.'
      }
    }, {
      icon: 'code',
      title: {
        en: 'Digital Projects',
        pt: 'Projetos Digitais',
      },
      description: {
        en: 'We help you from the initial idea all the way through the last application. We develop material for the web with focus on design, content and user’s experience.',
        pt: 'Vamos ajudá-lo desde a ideia até a aplicação final. Desenvolvemos para web com foco em design, conteúdo e experiência do usuário.'
      }
    }, {
      icon: 'video',
      title: {
        en: 'Motion & Film',
        pt: 'Motion & Filme',
      },
      description: {
        en: 'We produce films, motion graphics, motionless or animated 3D, edition with a mix of techniques, among others.',
        pt: 'Produzimos filmes, motion graphics, 3D estáticas ou animadas, edição com intercessões entre as técnicas, etc.'
      }
    }
  ]
}

const getters = {
  GET_SERVICES({ services }) {
    let translatedServices = [],
        locale = Trans.currentLanguage

    _.forEach(services, function(service) {
      translatedServices.push({
        icon: service.icon,
        title: service.title[locale],
        description: service.description[locale]
      })
    })

    return translatedServices
  },
}

const actions = {
}

const mutations = {
}

export default {
  namespaced: true,
  state: INITIAL_STATE,
  getters,
  actions,
  mutations,
}
