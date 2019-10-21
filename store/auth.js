export const state = () => ({
  token: true
})

export const mutations = {
  setToken(state, token) {
    state.token = token
  },
  clearToken(state) {
    state.token = null
  }
}

export const actions = {
  async login({commit, dispatch}, formData) {
    try {
      const {token} = this.$axios.$post('/api/auth/admin/login', formData)
      console.log('token', token)
      dispatch('setToken', token)
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  logout({commit}) {
    commit('clearToken')
  },
  createUser({}, formData) {
    try {
      console.log('createUser', formData)
    } catch (e) {

    }
  },
  setToken({commit}, token) {
    commit('setToken', token)
  }
}

export const getters = {
  isAuth: state => Boolean(state.token)
}
