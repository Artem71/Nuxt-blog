export const state = () => ({
  token: true
})

export const mutations = {
  setToken(state, token) {
    state.token = token
  }
}

export const actions = {
  async login({commit, dispatch}, formData) {
    try {
      const token = await new Promise(resolve => {
        setTimeout(() => resolve('mock-token'), 2000)
      })
      dispatch('setToken', token)
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
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
