
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Home/DataBuku.vue') },
      { path: 'inputdatabuku', component: () => import('pages/Home/InputDataBuku.vue') },
      { path: 'datatransaksi', component: () => import('pages/transaksi/DataTransaksi.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/LoginRegisLayout.vue'),
    children: [
      { path: 'auth/Login', component: () => import('pages/users/Login.vue') },
      { path: 'auth/Registrasi', component: () => import('pages/users/Registrasi.vue') }
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
