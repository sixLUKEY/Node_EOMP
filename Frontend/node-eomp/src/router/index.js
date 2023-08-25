import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import( '../views/ContactView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import( '../views/ProductsView.vue')
  },
  {
    path: '/products/product/:id',
    name: 'product',
    component: () => import('../views/ProductView.vue'),
    props: true
  },
  {
    path: '/admin/add',
    name: 'admin add',
    component: () => import('../views/AdminAdd.vue')
  },
  {
    path: '/admin/edit/:id',
    name: 'admin edit',
    component: () => import('../views/AdminEdit.vue'),
    props: true
  },
  {
    path: '/admin/users/edit/:id',
    name: 'admin user edit',
    component: () => import('../views/AdminEditUser.vue'),
    props: true
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminView.vue'),
    children: [
      {
      path: 'users',
      component: () => import('../views/AdminUsers.vue')
    },{
      path: 'products',
      component: () => import('../views/AdminProducts.vue')
    }
  ],
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
