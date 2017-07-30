import ProjectItemHeader from '@/components/project-item-header/ProjectItemHeader'
import ProjectItemDescriptionListItem from '@/components/project-item-description-list-item/ProjectItemDescriptionListItem'
import ProjectTestimonial from '@/components/project-testimonial/ProjectTestimonial'
import ProjectTablet from '@/components/project-tablet/ProjectTablet'
import ProjectMacbook from '@/components/project-macbook/ProjectMacbook'

export default {
  name: 'project-item',
  components: {
    "project-item-header": ProjectItemHeader,
    "project-item-description-list-item": ProjectItemDescriptionListItem,
    "project-testimonial": ProjectTestimonial,
    "project-tablet": ProjectTablet,
    "project-macbook": ProjectMacbook
  },
  props: ['parentClass'],
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
          "role": "Lead Front-end UI Developer",
          "link": "",
          "description": "Specified, implemented, and enforced development guidelines, to ensure consistency within the codebase, and the final UI. Worked with the design team to translate design visuals in to UI templates, for use with Backbone.js.",
          "challenges": "Ensuring that an HTML5 application feels like a native app on both Android and iOS. Maintaining responsiveness whilst retrieving live traffic data from external APIs, over mobile networks of varying quality.",
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
            "preview":  "/static/projects/lincoln/lincoln-preview.png",
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
            'project_item--animation-center'
          ],
          "role": "Front-end Architect and Lead Developer for global team",
          "link": "https://pappamurphys.com",
          "description": "Managed a multi-discipline team of designers and developers, responsible for delivering a full UI redesign of the Pappa Murphy's website, and associated front-end templates. Worked closely with my counterpart in India, to integrate the front-end templates with a content management system.",
          "challenges": "Remote team was unfamiliar with some of the build process on the Front-End.",
          "solution": "We enabled the India team to move forward using templates and example guides from the US-based studio team.",
          "testimonial": [],
          "media": {
            "preview":  "",
            "animation":
            {
              "frame": "macbook",
              "image": "/static/projects/pm/pm-preview-mov.gif",
              "mobile": "/static/projects/pm/pm-preview.png"
            },
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
            "npm",
            "bower"
          ]
        },
        {
          "id": 3,
          "name": "Multiple Projects",
          "client": "Vector Media Group",
          "class": [
            'project_item--no-image',
            'project_item--display-testimony',
            'project_item--two-col-all'
          ],
          "role": "Lead Front-end Developer, Mentor, Advisor",
          "link": "",
          "description": "Vector Media Group is a New York web agency and Premier Google Partner with a strong focus on digital marketing and SEO. The majority of my time there was spent working on large API-powered Node applications. In addition to development, I also advised on the front-end architecture for a revamp of the award winning EL Education website.",

          "challenges": "Most clients are under NDA. Information is available on request.",
          "solution": "",
          "testimonial": [{
            "name": "Ben Smith: Director of Technology",
            "quote": "Leslie is an extremely detailed and thoughtful frontend architect that dedicates herself to her craft. She takes the time and care required to fully understand project requirements and use cases. She excels at the \"human\" side of development as well, including leadership, empathy, and understanding user behavior. She deeply cares about her projects, and it shows in the final output.",
            "link": "https://www.linkedin.com/in/benjaminsmithweb"
          }
          ],
          "media": [],
          "technology": [
            "Javascript",
            "Backbone.js",
            "Bootstrap",
            "node",
            "npm, bower",
            "Express Server",
            "Jenkins"
          ]
        },
        {
          "id": 4,
          "class": [
            'project_item--image_left',
            'project_item--image_left--bottom'
          ],
          "name": "HP Support",
          "client": "Deloitte",
          "role": "Front-end Architect",
          "link": "http://support.hp.com",
          "description": "Specified CSS and UI guidelines for team. Created UI templates from design team to integrate with backbone.js.",
          "challenges": "Maintaining 'native' feel to html5 app on android and iOS and utilize one set of code for both platforms. Integrate with INRIX API for traffic data and other endpoints.",
          "solution": "Component based templates for backbone.js allow re-use and simplified code making it easier to troubleshoot. Added conditional logic in the build for some device specific overrides to prevent too many collisions in properties. Worked closely with services team.",
          "testimonial": [{
            "name": "Andi Russu, Creative Director",
            "quote": "Leslie has been invaluable in putting in place and delivering a well architected and coded solution for the client. She has provided team management input numerous times and has overall benefited the team and the client in the process. Her emphasis on well formatted and structured code was essential on this project and has been of great value when integrating with our USI counterparts.",
            "link": "https://www.linkedin.com/in/andirusu/"
          }
          ],
          "media": {
            "preview":  "/static/projects/hp/hp-preview.png",
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
          "id": 5,
          "name": "Integris Dashboard",
          "client": "Integris",
          "role": "Front-end Architect and Advisor",
          "link": "https://integris.io",
          "description": " Integris required a front-end architect to develop a component-based styleguide based on design mockups, as well as structuring the right front-end framework to work with their API.",
          "challenges": "The API was in flux and the developers were busy handling service side and were not as familiar with Front-End UI elements. A previous version had been put together in Angular but staff admitted knowledge of Angular was not their strong suit.",
          "solution": "I created a component-based styleguide with plain HTML and CSS to build out pieces of the UI. We discussed options for frameworks and I created a vue.js project with routing and examples of components using the elements from the styleguide. The handoff process included training the developers on the UI side and getting them up to speed on the framework and base repo for future scaling and finishing implementation when the API was ready.",
          "class": [
            'project_item--animation_center',
            'project_item--two-col-content'
          ],
          "testimonial": [{
            "name": "nice person",
            "quote": "Nice things they said about the project go here.",
            "link": "http://doctoripsum.com/"
          }
          ],
          "media": {
            "preview":  "",
            "animation":
            {
              "frame": "iPad",
              "image": "/static/projects/integris/integris_styles.png",
              "mobile": "/static/projects/integris/integris-preview.png"
            },
            "more" : [
              "/static/projects/integris/integris-preview.png",
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
        }


      ]
    }
  }
}