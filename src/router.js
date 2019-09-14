import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Contents/Main/Home'
import Portfolio from "./components/Contents/Portfolio/Portfolio";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio
    }
  ]
})
