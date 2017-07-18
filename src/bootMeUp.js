// kick start all the things
//  and set globals
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
// import App from './App'

(function () {
  // Set up our global scope.
  window.Portfolio = window.Portfolio || {}

  // Initialize Vue.
  window.Portfolio.Vue = Vue
  window.Portfolio.Vue.use(VueRouter)
  window.Portfolio.Vue.use(Vuetify)
})()
