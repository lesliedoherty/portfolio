import Hero from '@/components/hero/Hero'
let preferredLanguages = [
  {
    'name': 'English',
    'value': 'en',
    'selected': true
  },
  {
    'name': 'Chinese',
    'value': 'zh-hans',
    'selected': false
  },
  {
    'name': 'French',
    'value': 'fr',
    'selected': false
  },
  {
    'name': 'German',
    'value': 'de',
    'selected': false
  },
  {
    'name': 'Japanese',
    'value': 'js',
    'selected': false
  },
  {
    'name': 'Korean',
    'value': 'ko',
    'selected': false
  },
  {
    'name': 'Portuguese',
    'value': 'pt-br',
    'selected': false
  },
  {
    'name': 'Spanish',
    'value': 'es',
    'selected': false
  }
]

let termMapping = [
  {
    urlPrefix: 'https://www.tableau.com/',
    languages: [
      {
        name: 'French',
        shortCode: 'fr-fr'
      },
      {
        name: 'Chinese',
        shortCode: 'zn-ch'
      },
      {
        name: 'Korean',
        shortCode: 'ko-kr'
      },
      {
        name: 'Portuguese',
        shortCode: 'pt-br'
      },
      {
        name: 'German',
        shortCode: 'de-de'
      },
      {
        name: 'Japanese',
        shortCode: 'ja-jp'
      },
      {
        name: 'Spanish',
        shortCode: 'es-es'
      }
    ],
    terms: [
      {
        name: 'Getting Started',
        url: '/learn/training/live/getting-started'
      },
      {
        name: 'Mapping',
        url: '/learn/training/live/mapping'
      },
      {
        name: 'Statistics',
        url: '/learn/training/live/statistics'
      },
      {
        name: 'Calculations I',
        url: '/learn/training/live/Calculations1'
      },
      {
        name: 'Calcuations II',
        url: '/learn/training/live/Calculations2'
      },
      {
        name: 'Guided Analytics',
        url: '/learn/training/live/guided-analytics'
      },
      {
        name: 'Data Blending',
        url: '/learn/training/live/data-blending'
      },
      {
        name: 'Server Admin',
        url: '/learn/training/live/server-admin'
      }
    ]
  }
]

export default {
  name: 'tableau',
  components: {
    'hero': Hero
  },

  data: () => ({
    preferred_language: preferredLanguages,
    date: {},
    term_map: termMapping
  }),
  methods: {
    setDefaultSelectedLanguage () {
      // read if preferred_language.language.selected is true and return selected_language
    },
    updateSelectedLanguage () {
      // when the model change on select, be sure to set the selected value to that new language
    }
  },
  created: function () {
    // do I need to call the setdefaultSelectedLanguage function here?
  }
}

