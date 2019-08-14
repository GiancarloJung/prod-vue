const routes = [
  {
    path: 'contact',
    component: () => import(/* webpackChunkName: "contact" */ '@/templates/Page.vue'),
    children: [
      {
        path: '',
        name: 'ContactIndex',
        component: () => import(/* webpackChunkName: "contact" */ '@/pages/contact/Index.vue'),
        meta: { bodyClass: 'contact' }
      },
    ]
  }
]

export default routes
