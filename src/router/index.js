import Vue from 'vue'
import VueRouter from 'vue-router'
import Products from "./component/Products";
import Card from "./component/Card";


Vue.use(VueRouter)

const routes = [
  {
    path: '/products',
    component: Products
  },
  {
    path: '/card',
    component: Card
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
