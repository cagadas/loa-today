
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/Index.vue') },
      { path: '/hosts', component: () => import('pages/Hosts.vue') },
      { path: '/privacy', component: () => import('pages/Privacy.vue') },
      { path: '/terms', component: () => import('pages/Terms.vue') },
      { path: '/youtube', component: () => import('pages/YouTube.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
