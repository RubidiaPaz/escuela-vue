import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateViewP from '../views/CreateViewP.vue'
import EditViewP from '../views/EditViewP.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/create',
    name: 'create',
    component: CreateViewP
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: EditViewP
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
