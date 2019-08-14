import api from '@/services/api'
import { Trans } from '@/plugins/Translation'

const INITIAL_STATE = {
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
