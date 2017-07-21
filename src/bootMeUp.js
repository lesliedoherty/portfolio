// kick start all the things
//  and set globals
import Vue from 'vue'
import VueRouter from 'vue-router'

(function () {
  // Set up our global scope.
  window.Portfolio = window.Portfolio || {}

  // Initialize Vue.
  window.Portfolio.Vue = Vue
  window.Portfolio.Vue.use(VueRouter)
})()
