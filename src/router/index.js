import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'

import Login from '../views/Login.vue';
import Logout from '../views/Logout.vue';
import UsersNew from '../views/UsersNew.vue';

import LettersIndex from '../views/LettersIndex.vue';
import LettersEdit from '../views/LettersEdit.vue';
import LettersNew from '../views/LettersNew.vue';
import LettersShow from '../views/LettersShow.vue';

import LettersFinalizeShow from '../views/LettersFinalizeShow.vue';
import LettersPrintableShow from '../views/LettersPrintableShow.vue';

import RecipientsIndex from '../views/RecipientsIndex.vue';
import RecipientsEdit from '../views/RecipientsEdit.vue';
import RecipientsNew from '../views/RecipientsNew.vue';
import RecipientsShow from '../views/RecipientsShow.vue';

import RefereesIndex from '../views/RefereesIndex.vue';
import RefereesEdit from '../views/RefereesEdit.vue';
import RefereesNew from '../views/RefereesNew.vue';
import RefereesShow from '../views/RefereesShow.vue';

Vue.use(VueRouter)

  const routes = [

  {path: '/', name: 'root', component: Login},

  // {path: '/', name: 'Home', component: Home},
  {path: '/about', name: 'About', component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')},
  {path: '/dashboard', name: 'dashboard', component: Dashboard},

  {path: '/users/new', name: 'users-new', component: UsersNew},

  {path: '/login', name: 'login', component: Login},
  {path: '/logout', name: 'logout', component: Logout},

  {path: '/letters', name: 'letters-index', component: LettersIndex},
  {path: '/letters/new', name: 'letters-new', component: LettersNew},
  {path: '/letters/:id', name: 'letters-show', component: LettersShow},
  {path: '/letters/:id/edit', name: 'letters-edit', component: LettersEdit},

  {path: '/letters/:id/finalize', name: 'letters-finalize-show', component: LettersFinalizeShow},
  {path: '/letters/:id/printable', name: 'letters-printable-show', component: LettersPrintableShow},

  {path: '/recipients', name: 'recipients-index', component: RecipientsIndex},
  {path: '/recipients/new', name: 'recipients-new', component: RecipientsNew},
  {path: '/recipients/:id', name: 'recipients-show', component: RecipientsShow},
  {path: '/recipients/:id/edit', name: 'recipients-edit', component: RecipientsEdit},

  {path: '/referees', name: 'referees-index', component: RefereesIndex},
  {path: '/referees/new', name: 'referees-new', component: RefereesNew},
  {path: '/referees/:id', name: 'referees-show', component: RefereesShow},
  {path: '/referees/:id/edit', name: 'referees-edit', component: RefereesEdit}

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
