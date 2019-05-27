import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

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
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: () => import('./views/Detail.vue')
    },
    {
      path: '/trip-planner',
      name: 'Trip-planner',
      component: () => import('./views/TripPlanner.vue')
    },
    {
      path: '/category',
      name: 'Category-view',
      children: [
        { path: ':category', name: 'Category-view-select', component: () => import('./views/CategoryView.vue') }
      ],
      component: () => import('./views/CategoryView.vue')
    }
  ]
})
