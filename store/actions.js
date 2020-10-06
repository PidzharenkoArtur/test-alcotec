export default {
  async postProducts({}, data) {
    let url, response, id, page, perpage

    page = 1
    perpage = 15
    id = data.id
    url = '/products/' + id

    try {
      response = await this.$axios.$post(url, {
        page,
        perpage,
      })
      return Promise.resolve(response)
    } catch {}
  },

  async postAlias({}, name) {
    let url, response

    url = '/pages/' + name

    try {
      response = await this.$axios.$get(url)
      return Promise.resolve(response)
    } catch {}
  },
}
