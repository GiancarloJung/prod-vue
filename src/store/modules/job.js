import api from '@/services/api'
import { Trans } from '@/plugins/Translation'

const INITIAL_STATE = {
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
      media: {
        en: 'Exposição, Internet e Ação Solidária',
        pt: 'Exposição, Internet e Ação Solidária'
      },
      description: {
        en: "Zoetrope is an optical animation device that produces the illusion of movement using a sequence of images or pictures. This craft technique was used for a special action where visitors could interact with the brand and with a zoetrope designed to promote L'Occitane au Brésil's product line inspired by women from the Pernambuco city of Olinda.",
        pt: 'A Zoetrope é um dispositivo para animação que produz a ilusão de movimento utilizando uma sequência de imagens ou figuras. Com essa técnica artesanal, foi criada uma ação especial em que os visitantes puderam interagir com a marca e com uma zoetrope elaborada para divulgar a linha de produtos da L’Occitane au Brésil, inspirada em mulheres da cidade pernambucana de Olinda.'
      }
    }, {
      name: {
        en: 'The Match Rackets',
        pt: 'A Raquete do Jogo'
      },
      image: require('@/assets/images/jobs/raquete.png'),
      thumb: require('@/assets/images/jobs/thumb-raquete.png'),
      embed_id: '349450734',
      provider: 'vimeo',
      order: 6,
      client: {
        en: 'Guga Kuerten',
        pt: 'Guga Kuerten'
      },
      agency: 'Loducca',
      media: {
        en: 'Exposição, Internet, TV, Anúncio de Jornal e Revista',
        pt: 'Exposição, Internet, TV, Anúncio de Jornal e Revista',
      },
      description: {
        en: 'To honor the career of Brazilian tennis player Guga Kuerten, a series of tailor-made tennis rackets were created with strings that had striking moments of his career imprinted on them. They were conceived to be sold at charity auctions and the revenue from the rackets were given to Guga Kuerten Institute.',
        pt: 'Em homenagem à trajetória do tenista brasileiro Guga Kuerten, foi criada uma série de raquetes personalizadas cujas cordas levavam lances marcantes da carreira do tenista. Idealizadas para serem vendidas em leilões beneficentes, o valor arrecadado com as raquetes foi revertido para o Instituto Guga Kuerten.',
      }
    }, {
      name: {
        en: 'Paraffin Wax Ad',
        pt: 'Anúncio da Parafina'
      },
      image: require('@/assets/images/jobs/parafina.png'),
      thumb: require('@/assets/images/jobs/thumb-parafina.png'),
      embed_id: '349451005',
      provider: 'vimeo',
      order: 11,
      client: 'Peugeot',
      agency: 'Loducca',
      media: {
        en: 'Anúncio de Revista',
        pt: 'Anúncio de Revista'
      },
      description: {
        en: "This Peugeot 207 Quicksilver ad was printed 100% on paraffin wax and could be detached from the magazine and applied directly onto the surfboard.<br>The ad came out in Brazil's leading surf magazine, at beaches in São Paulo and Rio de Janeiro, and at Super Surf (a surf championship sponsored by Peugeot), combining the brand's values, such as innovation, technology and design, with the surfing world.",
        pt: 'Impresso 100% em parafina, material utilizado por surfistas como antiderrapante, o anúncio do Peugeot 207 Quicksilver foi feito para ser destacado e aplicado diretamente na prancha. O anúncio foi distribuído na principal revista de surf do Brasil, em praias de São Paulo e do Rio de Janeiro e no Super Surf (campeonato patrocinado pela Peugeot), unindo os valores da marca como inovação, tecnologia e design ao mundo do surf.'
      }
    }, {
      name: {
        en: 'Music Never Stops',
        pt: 'A Música não Para'
      },
      image: require('@/assets/images/jobs/musica.png'),
      thumb: require('@/assets/images/jobs/thumb-musica.png'),
      embed_id: '349451602',
      provider: 'vimeo',
      order: 10,
      client: 'MTV',
      agency: 'Loducca',
      media: {
        en: 'TV e Internet',
        pt: 'TV e Internet'
      },
      description: {
        en: "This experimental project was produced using stop motion technique. It consisted of an animated film of a row of balloons that popped in front of a camera. Six hundred balloons were popped in a minute, fixed and aligned with laser over 200 meters of rail.<br>A camera positioned on a cart carrying a needle was responsible for popping the balloons, thus creating the animation effect.",
        pt: 'Projeto experimental feito em stop motion. Consistia em uma animação filmada de uma sequência de bexigas que estouravam em frente à câmera. Foram estourados 600 balões em um minuto, fixados e alinhados via laser em 200 metros de trilhos. Uma câmera posicionada sobre um carrinho que levava uma agulha era responsável por estourar as bexigas, gerando, assim, a animação.'
      }
    }, {
      name: {
        en: 'Airbag Ad',
        pt: 'Anúncio em Airbag'
      },
      image: require('@/assets/images/jobs/airbag.png'),
      thumb: require('@/assets/images/jobs/thumb-airbag.png'),
      embed_id: '349451960',
      provider: 'vimeo',
      order: 9,
      client: 'Peugeot',
      agency: 'Loducca',
      media: {
        en: 'Anúncio de Revista',
        pt: 'Anúncio de Revista'
      },
      description: {
        en: 'To highlight the safety of Peugeot 408, which features six airbags and eight protection spots, we produced a special magazine ad that came with a miniature airbag. When pressed, the airbag would inflate in reference to the car safety.',
        pt: 'Para destacar a segurança do modelo Peugeot 408, que conta com seis airbags e oito pontos de proteção, foi desenvolvido um anúncio de revista especial que trazia uma miniatura de airbag encartada. Ao ser atingido, o airbag inflava em referência à segurança do automóvel.'
      }
    }, {
      name: {
        en: 'Edible Ad',
        pt: 'Anúncio Comestível'
      },
      image: require('@/assets/images/jobs/comestivel.png'),
      thumb: require('@/assets/images/jobs/thumb-comestivel.png'),
      embed_id: '349452589',
      provider: 'vimeo',
      order: 12,
      client: 'MTV',
      agency: 'Loducca',
      media: 'Sustentabilidade, Anúncio de Revista e Jornal',
      description: {
        en: 'This ad was conceived as an invitation to present the 4th MTV Youth Universe Dossier, whose focus was on Sustainability. The ad was produced on edible paper and there was a hotsite to encourage people to create unusual recipes using it.',
        pt: 'Anúncio no formato de convite criado para o mercado publicitário para a apresentação do 4º Dossiê Universo Jovem da MTV, com o tema Sustentabilidade. A peça foi produzida em papel comestível e também contou com um hotsite para incentivar as pessoas a criar receitas inusitadas utilizando o anúncio.'
      }
    }, {
      name: {
        en: 'Using Your Magazine to Make a Call',
        pt: 'Cinta que Liga'
      },
      image: require('@/assets/images/jobs/cinta.png'),
      thumb: require('@/assets/images/jobs/thumb-cinta.png'),
      embed_id: '349452743',
      provider: 'vimeo',
      order: 13,
      client: 'Nextel',
      agency: 'Loducca',
      media: {
        en: 'Anúncio de Revista',
        pt: 'Anúncio de Revista'
      },
      description: {
        en: "Nextel is a communication company whose key purpose is to deliver direct, efficient and unique communication. And to impart those ideas, we produced a special band that went wrapped around Exame magazine to executives and business personalities.<br>After getting the magazine, with a simple touch, the receiver was able to call an operator consultant and get an exclusive and personalized service.",
        pt: 'Como forma de transmitir uma comunicação direta, eficiente e única, conceitos-chave para a marca Nextel, foi elaborada uma cinta especial entregue a executivos e personalidades do mundo dos negócios junto com a revista Exame. Ao receber a revista, com um simples toque, o consumidor era capaz de ligar para um consultor da operadora e ser atendido de maneira exclusiva e personalizada.'
      }
    }, {
      name: {
        en: 'The Empty Store',
        pt: 'A Loja Vazia'
      },
      image: require('@/assets/images/jobs/loja.png'),
      thumb: require('@/assets/images/jobs/thumb-loja.png'),
      embed_id: '349452933',
      provider: 'vimeo',
      order: 8,
      client: {
        en: 'Villa Lobos Mall',
        pt: 'Shopping Villa Lobos'
      },
      agency: 'Loducca',
      media: {
        en: 'Educação Ambiental, Sustentabilidade, TV e Internet',
        pt: 'Educação Ambiental, Sustentabilidade, TV e Internet'
      },
      description: {
        en: "Organized for the São Paulo winter clothing campaign, The Empty Store is a project created under the “creative commons” license, which enabled its replication in several ways in Brazil and across the world. It's a simple idea, a cube-shaped room made of glass where instead of buying clothes people leave them on empty shelves. At the end of the day, the clothes are taken to charity.",
        pt: 'Elaborada para a campanha do agasalho de São Paulo, a Loja Vazia é um projeto criado com a licença “creative commons”, o que permitiu ser replicado de diversas formas no Brasil e no resto do mundo. Trata-se de uma ideia simples, um espaço de vidro onde, em vez de comprar, as pessoas podem deixar roupas em prateleiras vazias. No fim do dia, as roupas são retiradas e encaminhadas para instituições de caridade.'
      }
    }, {
      name: {
        en: 'Our Flame',
        pt: 'Nossa Chama'
      },
      image: require('@/assets/images/jobs/chama.png'),
      thumb: require('@/assets/images/jobs/thumb-chama.png'),
      embed_id: '349453289',
      provider: 'vimeo',
      order: 3,
      client: 'Santander',
      agency: 'Suno Creators',
      media: {
        en: 'TV e Internet',
        pt: 'TV e Internet'
      },
      description: {
        en: "Institutional campaign for the new brand positioning, which emphasizes the concept of the flame that is present in the bank's identity, strengthening this image with boldness, inspiration and transparency.<br>The project began as a draft made up of references and gave rise to the complete production of the video.",
        pt: 'Campanha Institucional para o novo posicionamento da marca. Foi ressaltado o conceito da chama que está presente na identidade do banco, fortalecendo essa imagem com ousadia, inspiração e transparência.<br>O projeto começou com um monstro composto por referências e resultou na produção completa do vídeo.'
      }
    }, {
      name: {
        en: 'Everyone on Board',
        pt: 'Todos a Bordo'
      },
      image: require('@/assets/images/jobs/eisenbahn.png'),
      thumb: require('@/assets/images/jobs/thumb-eisenbahn.png'),
      embed_id: '349453531',
      provider: 'vimeo',
      order: 2,
      client: 'Eisenbahn',
      agency: 'Suno Creators',
      media: {
        en: 'Mobiliário Urbano, TV e Internet',
        pt: 'Mobiliário Urbano, TV e Internet'
      },
      description: {
        en: "Eisenbahn's new brand positioning is an invitation for consumers to learn more about the craft beer world through different styles and for the brewing community to share their passion for brewing.",
        pt: 'O novo posicionamento de marca da Eisenbahn é, ao mesmo tempo, um convite para os consumidores conhecerem mais o universo das cervejas artesanais por meio de diferentes estilos e para a comunidade cervejeira compartilhar a sua paixão por fazer cerveja.'
      }
    }, {
      name: {
        en: 'Printed Stories',
        pt: 'Stories Impressos'
      },
      image: require('@/assets/images/jobs/stories.png'),
      thumb: require('@/assets/images/jobs/thumb-stories.png'),
      embed_id: '349671844',
      provider: 'vimeo',
      order: 5,
      client: 'Bauducco / Instagram',
      agency: 'CP+B',
      media: {
        en: 'Internet e Impressão',
        pt: 'Internet e Impressão'
      },
      description: {
        en: "Bauducco carried out an innovative action that enabled consumers in the city of São Paulo to create their own gift wrap using Instagram Stories.<br>The action lasted six hours and the creations were printed and delivered to the creators’ homes.",
        pt: 'Ação inédita realizada pela Bauducco que permitiu ao público da cidade de São Paulo desenvolver seu próprio papel de presente utilizando o Instagram Stories. A ação durou seis horas e as criações foram impressas e entregues na casa dos criadores.'
      }
    }, {
      name: {
        en: 'The Ten-Story Wave',
        pt: 'A Onda de 10 Andares'
      },
      image: require('@/assets/images/jobs/onda.png'),
      thumb: require('@/assets/images/jobs/thumb-onda.png'),
      embed_id: '349672087',
      provider: 'vimeo',
      order: 4,
      client: 'Mitsubishi',
      agency: 'Ampfy',
      media: {
        en: 'Internet e Mídia exterior',
        pt: 'Internet e Mídia exterior'
      },
      description: {
        en: "On Surfer's Day, Mitsubishi Motors praised athlete Carlos Burle with a ten-story building in the city of Fortaleza to illustrate the size of the biggest wave he surfed and that set the world record.",
        pt: 'No Dia do Surfista, a Mitsubishi Motors homenageou o atleta Carlos Burle, dando a dimensão da maior onda surfada por ele que marcou o recorde mundial, com um prédio de dez andares na cidade de Fortaleza.'
      }
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
      description: {
        en: "In order to spread the cultural and historical legacy of the African descent people usually not in textbooks, Zumbi dos Palmares School and J. Walter Thompson Brazil developed the Black Box project, a 200-page book that tells the unpublished story of black people.<br><br>The foundational material was a map of Quilombo dos Palmares region, a symbol of slave resistance in Brazil. Through generative design, small versions of this map were brought together to form various images, leaving the DNA of black history imprinted on each illustration.<br><br>When flipping through the book, readers see pages of translucent paper that hide parts of the text with black boxes that prevent them from reading about the achievements of the African people.",
        pt: 'Com o objetivo de divulgar o legado cultural e histórico dos afrodescendentes que não aparece nos livros didáticos, a Faculdade Zumbi dos Palmares e a J. Walter Thompson Brasil produziram o projeto Black Box. Trata-se de um livro com mais de 200 páginas com conteúdo inédito sobre a história negra.<br><br>Foi usado um mapa da região do Quilombo dos Palmares, símbolo de resistência à escravidão no Brasil. Por meio de design generativo, pequenas versões desse mapa foram reunidas para formar diversas imagens, deixando o DNA da história negra impresso em cada ilustração.<br><br>Ao folhear as páginas, os leitores se deparam com folhas de papel translúcido que omitem partes do texto com caixas pretas, que não permitem ler sobre as conquistas dos povos africanos.'
      }
    }
  ]
}

const getters = {
  GET_JOBS({ jobs }) {
    let translatedJobs = [],
        locale = Trans.currentLanguage

    _.forEach(jobs, function(job) {
      translatedJobs.push({
        name: _.isObject(job.name) ? job.name[locale] : job.name,
        image: job.image,
        thumb: job.thumb,
        embed_id: job.embed_id,
        provider: job.provider,
        order: job.order,
        client: _.isObject(job.client) ? job.client[locale] : job.client,
        agency: job.agency,
        media: _.isObject(job.media) ? job.media[locale] : job.media,
        description: _.isObject(job.description) ? job.description[locale] : job.description
      })
    })

    return translatedJobs
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
