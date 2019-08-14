import api from '@/services/api'
import { Trans } from '@/plugins/Translation'

const INITIAL_STATE = {
  awards: [
    {
      job: 'Black Box',
      award_list: [{
        name: '2019 CANNES LIONS',
        category: 'Industry Craft / Gold'
      }]
    }, {
      job: 'A Raquete do Jogo',
      award_list: [{
        name: '2016 El Ojo Esportes',
        category: 'Projeto de Produto / Bronze'
      }]
    }, {
      job: 'The Alchemist Ad',
      award_list: [{
        name: '2016 One Show',
        category: 'Promotional Items / Bronze'
      }]
    }, {
      job: 'A Loja Vazia',
      award_list: [{
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
      award_list: [{
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
      award_list: [{
        name: '2010 CANNES LIONS',
        category: 'Media / Shortlist'
      }, {
        name: '2010 CANNES LIONS',
        category: 'Direct / Bronze'
      }]
    }
  ]
}

const getters = {
  GET_AWARDS({ awards }) {
    let translatedAwards = [],
        locale = Trans.currentLanguage

    _.forEach(awards, function(award) {
      translatedAwards.push({
        job: _.isObject(award.job) ? award.job[locale] : award.job,
        award_list: award.award_list,
      })
    })

    return translatedAwards
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
