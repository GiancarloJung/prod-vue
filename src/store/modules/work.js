import api from '@/services/api'
import { Trans } from '@/plugins/Translation'

const INITIAL_STATE = {
  works: [
    {
      name: 'Amerant Bank',
      image: require('@/assets/images/works/amerant1.png'),
      description: 'Campaign for various media, on and offline.'
    }, {
      name: 'Amerant Bank',
      image: require('@/assets/images/works/amerant2.png'),
      description: 'Campaign for various media, on and offline.'
    }, {
      name: 'Amerant Bank',
      image: require('@/assets/images/works/amerant3.png'),
      description: 'Campaign for various media, on and offline.'
    }, {
      name: 'Amerant Bank',
      image: require('@/assets/images/works/amerant4.png'),
      description: 'Campaign for various media, on and offline.'
    }, {
      name: 'Sesc',
      image: require('@/assets/images/works/sesc.png'),
      description: 'Landing page Bienal Naïfs do Brasil 2018.'
    }, {
      name: 'Jonson & Jonson',
      image: require('@/assets/images/works/jonson.png'),
      description: {
        en: 'Posters for campaign presentation.',
        pt: 'Posters para apresentação de campanha.'
      }
    }, {
      name: 'Santander',
      image: require('@/assets/images/works/santander.png'),
      description: {
        en: 'Farol Santander launch campaign.',
        pt: 'Campanha de lançamento do Farol Santander.'
      }
    }, {
      name: 'Mitsubishi',
      image: require('@/assets/images/works/mitsubishi.png'),
      description: {
        en: 'New Outlander launch campaign.',
        pt: 'Campanha de lançamento New Outlander.'
      }
    }, {
      name: 'Andorinha',
      image: require('@/assets/images/works/andorinha.png'),
      description: {
        en: 'Illustration, retouching and Key Vision.',
        pt: 'Ilustração, retoque e ambientação (KV).'
      }
    }, {
      name: 'Nubank',
      image: require('@/assets/images/works/nubank1.png'),
      description: {
        en: 'Internal campaign for design team.',
        pt: 'Campanha interna para equipe de design.'
      }
    }, {
      name: 'Santander',
      image: require('@/assets/images/works/santander2.png'),
      description: {
        en: 'Campaign for various media, on and offline.',
        pt: 'Campanha para diversas mídias, on e offline.'
      }
    }, {
      name: 'Localiza Hertz',
      image: require('@/assets/images/works/localiza-hertz.png'),
      description: {
        en: 'Launch campaign for brand merge.',
        pt: 'Campanha de lançamento, fusão de marcas.'
      },
    }, {
      name: 'Doritos',
      image: require('@/assets/images/works/doritos.png'),
      description: {
        en: 'Productions of pieces for Lollapalooza event.',
        pt: 'Produções de peças para evento Lollapalooza.'
      }
    }, {
      name: 'Nubank',
      image: require('@/assets/images/works/nubank2.png'),
      description: {
        en: 'Welcomekit to design team.',
        pt: 'Welcomekit para equipe de design.'
      }
    }, {
      name: 'Dr. Consulta',
      image: require('@/assets/images/works/drconsulta.png'),
      description: {
        en: 'Campaign for various media, on and offline.',
        pt: 'Campanha para diversas mídias, on e offline.'
      }
    }, {
      name: 'Baden Baden',
      image: require('@/assets/images/works/baden.png'),
      description: {
        en: 'Special poster, congratulations Campos do Jordão.',
        pt: 'Poster especial, parabéns Campos do Jordão.'
      }
    }
  ]
}

const getters = {
  GET_WORKS({ works }) {
    let translatedWorks = [],
        locale = Trans.currentLanguage

    _.forEach(works, function(work) {
      translatedWorks.push({
        name: _.isObject(work.name) ? work.name[locale] : work.name,
        image: work.image,
        description: _.isObject(work.description) ? work.description[locale] : work.description
      })
    })

    return translatedWorks
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
