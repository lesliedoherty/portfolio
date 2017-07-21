export default {
  name: 'project-item',
  data () {
    return {
      projects: [
        {
          "id": 1,
          "class": [
            'background_white',
            'image_right'
          ],
          "name": "Papa Murphy\'s",
          "roll": "Front-end Architect",
          "link": "https://papamurphys.com",
          "description": "Strings Here",
          "challenges": "More Words Here",
          "solution": "Great Words Here",
          "testimonial": [{
            "name": "10th Doctor",
            "quote": "There's something else I've always wanted to say: Allons-y, Alonso! You'll find a little picture of me there, and the caption'll read 'Over my dead body'.",
            "link": "http://doctoripsum.com/"
          },
            {
              "name": "another person",
              "quote": "two people said good things!",
              "link": ''
            }
          ],
          "media": {
            "preview":  "/static/projects/pm-menu.png",
            "more" : [
            "./path/to/image2",
            "./path/to/image3"
          ]},
          "technology": [
            "Javascript",
            "Vue.js",
            "Bourbon",
            "Adobe AEM"
          ]
        },
        {
          "id": 2,
          "name": "HP",
          "class": [
            'background_white',
            'image_right'
          ],
          "roll": "Front-end Architect",
          "link": "https://hp.support.com",
          "description": "Strings Here",
          "challenges": "More Words Here",
          "solution": "Great Words Here",
          "testimonial": [{
            "name": "11th Doctor",
            "quote": "I never know why. I only know who. Bow ties are cool. Usually called 'The Doctor.' Or 'The Caretaker.' Or 'Get off this planet.' Though, strictly speaking, that probably isn't a name.",
            "link": "http://doctoripsum.com/"
          }
          ],
          "media": {
            "preview":  "/static/projects/pm-menu.png",
            "more" : [
            "./path/to/image2",
            "./path/to/image3"
          ]},

          "technology": [
            "Javascript",
            "Vue.js",
            "Foundation"
          ]
        },
        {
          "id": 3,
          "name": "Integris",
          "roll": "Front-end Architect",
          "link": "https://integris.io",
          "description": "Strings Here",
          "challenges": "More Words Here",
          "solution": "Great Words Here",
          "class": [
            'background_gray',
            'image_bottom'
          ],
          "testimonial": [{
            "name": "nice person",
            "quote": "Nice things they said about the project go here.",
            "link": "http://doctoripsum.com/"
          },
            {
              "name": "another person",
              "quote": "two people said good things!",
              "link":''
            }
          ],
          "media": {
            "preview":  "/static/projects/3/preview.jpgeg",
            "more" : [
            "./path/to/image2",
            "./path/to/image3"
          ]},
          "technology": [
            "Javascript",
            "Vue.js",
            "Foundation"
          ]
        },
        {
          "id": 4,
          "name": "Wellsfargo EIT",
          "class": [
            'background_white',
            'image_right'
          ],
          "roll": "Front-end Architect",
          "link": "",
          "description": "Strings WellsFargo Here",
          "challenges": "More Wells Words Here",
          "solution": "Great Wells Words Here",
          "testimonial": [{
            "name": "WellsFargo nice person",
            "quote": "Wells Nice things they said about the project go here.",
            "link": "http://doctoripsum.com/"
          },
            {
              "name": "another person",
              "quote": "two people said good things!",
              "link": ''
            }
          ],
          "media": [
            "./path/to/image",
            "./path/to/image2",
            "./path/to/image3"
          ],
          "technology": [
            "Javascript",
            "Vue.js",
            "Foundation"
          ]
        }
      ]
    }
  }
}