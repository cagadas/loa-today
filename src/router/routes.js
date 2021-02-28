
const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      { path: "/bi", component: () => import("pages/BI.vue") },
      { path: "/lmgss", component: () => import("pages/LMGSS.vue") },
      { path: "/tgig", component: () => import("pages/TGIG.vue") },
      { path: "/hosts", component: () => import("pages/Hosts.vue") },
      { path: "/formerhosts", component: () => import("pages/FormerHosts.vue") },
      { path: "/privacy", component: () => import("pages/Privacy.vue") },
      { path: "/terms", component: () => import("pages/Terms.vue") },
      { path: "/question", component: () => import("pages/Question.vue") },
      { path: "/contact", component: () => import("pages/Contact.vue") },
      { path: "/contacted", component: () => import("pages/Contacted.vue") },
      { path: "/links", component: () => import("pages/Links.vue") },
      { path: "/schedule", component: () => import("pages/Schedule.vue") },
      { path: "/moneygame", component: () => import("pages/MoneyGame.vue") },
      { path: "/highvibeliving", component: () => import("pages/HighVibeLiving.vue") },
      { path: "/rssotloa", component: () => import("pages/RSSOTLOA.vue") },
      { path: "/rssotloa2", component: () => import("pages/RSSOTLOA2.vue") },
      { path: "/streammeditation", component: () => import("pages/StreamMeditation.vue") }
    ]
  }
];

// Always leave this as last one
routes.push({
  path: '*',
  component: () => import('pages/Error404.vue')
})

export default routes
