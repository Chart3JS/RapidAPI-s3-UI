import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Auth/Login'
import Dashboard from '@/pages/Dashboard/Dashboard.vue'

Vue.use(Router)
const authRoutes = [
  { path: '/login', name: 'Login', component: Login }
]

const privateRoutes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  }
]
const routes = authRoutes.concat(privateRoutes)
export default new Router({
  routes
})
