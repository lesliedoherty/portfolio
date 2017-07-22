import ProjectItemHeader from '@/components/project-item-header/ProjectItemHeader'
import ProjectItemDescriptionListItem from '@/components/project-item-description-list-item/ProjectItemDescriptionListItem'
import ProjectTestimonial from '@/components/project-testimonial/ProjectTestimonial'
export default {
  name: 'project-item',
  components: {
    "project-item-header": ProjectItemHeader,
    "project-item-description-list-item": ProjectItemDescriptionListItem,
    "project-testimonial": ProjectTestimonial
  },
  data () {
    return {
      projects: [
        {
          "id": 1,
          "class": [
            'project_item--image_right'
          ],
          "name": "MyLincoln App",
          "client": "INRIX",
          "roll": "Lead Front-end UI Developer",
          "link": "",
          "description": "Specified CSS and UI guidelines for team. Created UI templates from design team to integrate with backbone.js.",
          "challenges": "Maintaining 'native' feel to html5 app on android and iOS and utilize one set of code for both platforms. Integrate with INRIX API for traffic data and other endpoints.",
          "solution": "Component based templates for backbone.js allow re-use and simplified code making it easier to troubleshoot. Added conditional logic in the build for some device specific overrides to prevent too many collisions in properties. Worked closely with services team.",
          "testimonial": [{
            "name": "Bill Shchwabel",
            "quote": "This is really long and need to clean up so adding later",
            "link": "https://www.linkedin.com/in/billschwebel/"
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
            "HTML",
            "CSS",
            "SASS",
            "Backbone.js",
            "Phonegap",
            "Javascript"
          ]
        },
        {
          "id": 2,
          "name": "Pappa Murphy\'s",
          "client": "Deloitte",
          "class": [
            'project_item--image_left'
          ],
          "roll": "Front-end Architect and Lead Developer for global team",
          "link": "https://pappamurphys.com",
          "description": "Papa Murphy's pizza company worked with Deloitte to overhaul its website. My team was responsible for the UI and delivering built templates to the India-based back-end team for integration.",
          "challenges": "More Words Here",
          "solution": "Great Words Here",
          "testimonial": [{
            "name": "11th Doctor",
            "quote": "I never know why. I only know who. Bow ties are cool. Usually called 'The Doctor.' Or 'The Caretaker.' Or 'Get off this planet.' Though, strictly speaking, that probably isn't a name.",
            "link": "http://doctoripsum.com/"
          }
          ],
          "media": {
            "preview":  "/static/projects/pm/pm-preview.png",
            "more" : [
              "./path/to/image2",
              "./path/to/image3"
            ]},

          "technology": [
            "HTML",
            "SASS",
            "Jade",
            "Bootstrap",
            "Angular",
            "Gulp",
            "node",
            "npm, bower"
          ]
        },
        {
          "id": 3,
          "name": "Integris Dashboard",
          "client": "Integris",
          "roll": "Front-end Architect and Advisor",
          "link": "https://integris.io",
          "description": " Integris required a front-end architect to develop a component-based styleguide based on design mockups, as well as structuring the right front-end framework to work with their API.",
          "challenges": "The API was in flux and the developers were busy handling service side and were not as familiar with Front-End UI elements. A previous version had been put together in Angular but staff admitted knowledge of Angular was not their strong suit.",
          "solution": "I created a component-based styleguide with plain HTML and CSS to build out pieces of the UI. We discussed options for frameworks and I created a vue.js project with routing and examples of components using the elements from the styleguide. The handoff process included training the developers on the UI side and getting them up to speed on the framework and base repo for future scaling and finishing implementation when the API was ready.",
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
            "preview":  "/static/projects/integris/integris-preview.png",
            "more" : [
              "./path/to/image2",
              "./path/to/image3"
            ]},
          "technology": [
            "Javascript",
            "Vue.js",
            "Foundation",
            "node",
            "npm",
            "Webpack",
            "SASS"
          ]
        },
        {
          "id": 4,
          "name": "Vector Media Group",
          "client": "",
          "class": [
            'project_item--no-image',
            'project_item--display-testimony'
          ],
          "roll": "Lead Front-end Developer, Mentor, Advisor",
          "link": "",
          "description": "Vector Media Group is a New York web agency and Premier Google Partner with a strong focus on digital marketing and SEO. The majority of my time there was spent working on large API-powered Node applications.",
          "challenges": "",
          "solution": "",
          "testimonial": [{
            "name": "Ben Smith: Director of Technology",
            "quote": "Leslie is an extremely detailed and thoughtful frontend architect that dedicates herself to her craft. She takes the time and care required to fully understand project requirements and use cases. She excels at the \"human\" side of development as well, including leadership, empathy, and understanding user behavior. She deeply cares about her projects, and it shows in the final output.",
            "link": "https://www.linkedin.com/in/benjaminsmithweb"
          }
          ],
          "media": [
            "./path/to/image",
            "./path/to/image2",
            "./path/to/image3"
          ],
          "technology": [
            "Javascript",
            "Backbone.js",
            "Bootstrap",
            "node",
            "npm, bower",
            "Express Server",
            "Jenkins"
          ]
        }
      ]
    }
  }
}