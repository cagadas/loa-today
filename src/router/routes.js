
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/hosts', component: () => import('pages/Hosts.vue') },
      { path: '/privacy', component: () => import('pages/Privacy.vue') },
      { path: '/terms', component: () => import('pages/Terms.vue') },
      { path: '/contact', component: () => import('pages/Contact.vue') },
      { path: '/livestream', component: () => import('pages/Livestream.vue') },
      { path: '/youtube', component: () => import('pages/YouTube.vue') },
      { path: '/book', component: () => import('pages/Book.vue') },
      { path: '/zoom', component: () => import('pages/Zoom.vue') },
      { path: '/grass', component: () => import('pages/TheGrassIsGreener.vue') },
      { path: '/loatoday', component: () => import('pages/LOAToday.vue') }
    ]
  }
]

// Always leave this as last one
routes.push({
  path: '*',
  component: () => import('pages/Error404.vue')
})

export default routes
