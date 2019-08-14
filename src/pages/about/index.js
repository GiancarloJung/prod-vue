const routes = [
  {
    path: 'sobre',
    component: () => import(/* webpackChunkName: "about" */ '@/templates/Page.vue'),
    children: [
      {
        path: '',
        name: 'AboutIndex',
        component: () => import(/* webpackChunkName: "about" */ '@/pages/about/Index.vue'),
        meta: { bodyClass: 'about' }
      },
    ]
  }
]

export default routes
