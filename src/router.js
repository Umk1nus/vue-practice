import { createRouter, createWebHashHistory } from 'vue-router';

const routerHistory = createWebHashHistory();

import HomePage from "@/pages/home";
import AboutPage from "@/pages/about";
import VacancyPage from "@/pages/vacancy";
// import NotFound from "@/pages/notFound";
import itemAlias from '@/pages/_itemAlias'

const routers = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      name: 'home',
      component: HomePage
    },
    {
      path: "/about",
      name: 'about',
      component: AboutPage
    },
    {
      path: "/vacancy",
      name: 'vacancy',
      component: VacancyPage
    },
    {
      path: "/:itemAlias",
      name: 'itemAlias',
      component: itemAlias
    },
    // {
    //   path: '/:CatchAll(.*)',
    //   name: '404',
    //   component: NotFound
    // }
  ]
})

export default routers;