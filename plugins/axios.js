export default function({ $axios, redirect, store }) {

  $axios.interceptors.request.use(request => {
    if (store.getters['auth/isAuth'] && !request.header.common['Authorization']) {
      const token = store.getters['auth/token']
      request.header.common['Authorization'] = `Bearer ${token}`
    }

    return request
  })

  $axios.onError(error => {
    if (error.response) {
      if (error.response.status === 401) {
        redirect('/admin/login?message=session')
        store.dispatch('auth/logout')
      }

      if (error.response.status === 500) {
        console.error('Беда')
      }
    }
  })
}
