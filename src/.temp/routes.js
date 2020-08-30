export default [
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/adminbue/Desktop/portfolio/node_modules/gridsome/app/pages/404.vue")
  },
  {
    path: "/:slug/",
    component: () => import(/* webpackChunkName: "page--src--templates--project-vue" */ "/Users/adminbue/Desktop/portfolio/src/templates/Project.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/adminbue/Desktop/portfolio/src/pages/Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/adminbue/Desktop/portfolio/node_modules/gridsome/app/pages/404.vue")
  }
]

