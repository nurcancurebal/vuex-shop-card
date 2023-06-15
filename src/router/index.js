import Vue from 'vue'
import VueRouter from 'vue-router'
import Products from "@/components/Products";
import Card from "../components/Card";


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
