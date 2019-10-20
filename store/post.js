const posts = [
  { title: 'Post 1', date: new Date(), views: 22, comments: [1, 2], _id: 'id1' },
  { title: 'Post 2', date: new Date(), views: 22, comments: [1, 2], _id: 'id2' },
  { title: 'Post 3', date: new Date(), views: 22, comments: [1, 2], _id: 'id3' }
]

export const actions = {
  async fetchAdmin() {
    return await new Promise(resolve => {
      setTimeout(() => {
        resolve(posts)
      }, 1000)
    })
  },
  async fetchAdminById({}, id) {
    return await new Promise(resolve => {
      setTimeout(() => {
        resolve(posts.find(p => p._id === id))
      }, 1000)
    })
  },
  remove() {
    console.log('remove')
  },
  update({}, {text, id}) {
    console.log('update', text)
  },
  async create({commit}, {title, text, image}) {
    try {
      const formData = new FormData()

      formData.append('title', title)
      formData.append('text', text)
      formData.append('image', image, image.name)

      return await new Promise(resolve => {
        setTimeout(() => {
          resolve()
        }, 1000)
      })
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  }
}
