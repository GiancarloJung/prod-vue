const routes = [
  {
    path: '',
    component: () => import(/* webpackChunkName: "home" */ '@/templates/Page.vue'),
    children: [
      {
        path: '',
        name: 'HomeIndex',
        component: () => import(/* webpackChunkName: "about" */ '@/pages/home/Index.vue'),
        meta: { bodyClass: 'home' }
      },
    ]
  }
]

export default routes
