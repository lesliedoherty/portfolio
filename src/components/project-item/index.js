export default {
  name: 'project-item',
  data () {
    return {
      projects: [
        {
          "id": 1,
          "class": [
            'project_item--image_right'
          ],
          "name": "My Lincoln App",
          "client": "INRIX",
          "roll": "Lead Front-end UI Developer",
          "link": "",
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
            "preview":  "/static/projects/ex2.png",
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
          "name": "HP Support Redesign",
          "client": "HP",
          "class": [
            'project_item--image_left'
          ],
          "roll": "Front-end Architect at Deloitte Digital",
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
            "preview":  "/static/projects/ex1.png",
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
            'project_item--image_center'
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
            "preview":  "/static/projects/ex3.png",
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
            'project_item--no-image'
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