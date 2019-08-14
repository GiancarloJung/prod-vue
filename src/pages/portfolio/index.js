const routes = [
  {
    path: 'portfolio',
    component: () => import(/* webpackChunkName: "portfolio" */ '@/templates/Page.vue'),
    children: [
      {
        path: '',
        name: 'PortfolioIndex',
        component: () => import(/* webpackChunkName: "portfolio" */ '@/pages/portfolio/Index.vue'),
        meta: { bodyClass: 'portfolio' }
      },
    ]
  }
]

export default routes
