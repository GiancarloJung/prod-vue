const routes = [
  {
    path: '/clients',
    component: () => import(/* webpackChunkName: "clients" */ '@/templates/Page.vue'),
    children: [
      {
        path: '',
        name: 'ClientsIndex',
        component: () => import(/* webpackChunkName: "clients" */ '@/pages/clients/Index.vue'),
        meta: { bodyClass: 'clients' }
      },
    ]
  }
]

export default routes
