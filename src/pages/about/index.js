const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "about" */ '@/pages/about/About.vue'),
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
