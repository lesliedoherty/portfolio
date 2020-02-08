// kick start all the things
//  and set globals
import Vue from 'vue'
import VueRouter from 'vue-router'
import vueSmoothScroll from 'vue-smooth-scroll'
import VueResource from 'vue-resource'
import LoadScript from 'vue-plugin-load-script'

(function () {
  // Set up our global scope.
  window.Portfolio = window.Portfolio || {}

  // Initialize Vue.
  window.Portfolio.Vue = Vue
  window.Portfolio.Vue.use(VueRouter)
  window.Portfolio.Vue.use(vueSmoothScroll)
  window.Portfolio.Vue.use(VueResource)
  window.Portfolio.Vue.use(LoadScript)
})()
