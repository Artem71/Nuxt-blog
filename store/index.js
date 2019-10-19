export const state = () => ({
  error: null
})

export const mutations = {
  setError(state, error) {
    console.log(error)
    state.error = error
  },
  clearError(state) {
    state.error = null
  }
}

export const getters = {
  error: state => state.error
}
