import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProductIndex from '../views/Product/Index.vue'
import ProductCreate from '../views/Product/Create.vue'
import ProductEdit from '../views/Product/Edit.vue'
import Login from '../views/Auth/Login.vue'
import Register from '../views/Auth/Register.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/product',
      name: 'product',
      component: ProductIndex
    },
    {
      path: '/product/create',
      name: 'productCreate',
      component: ProductCreate
    },
    {
      path: '/product/:id/edit',
      name: 'productEdit',
      component: ProductEdit
    },
  ]
})

export default router
