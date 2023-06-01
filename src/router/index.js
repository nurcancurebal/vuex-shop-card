import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Products from "../components/Products";
import Card from "../components/Card";

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/products',
      component: Products
    },
    {
      path: '/card',
      component: Card
    }
  ]
})