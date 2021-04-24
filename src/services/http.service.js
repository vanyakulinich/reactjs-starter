import axios from "axios"

class HttpService {
  constructor() {
    this.baseUrl = process.env.REACT_APP_API_HOST
    this.methods = {
      get: "get",
      post: "post",
      put: "put",
      patch: "patch",
      delete: "delete",
    }
  }

  async apiCall({ route = "/", method = this.methods.get, options = {} }) {
    const response = await axios[method](route, options)
    return response.data
  }

  // add specific methods here

  // examples
  async getTestData() {
    return await this.apiCall({ route: "/test", method: this.methods.post })
  }

  async createTestData(testData = {}) {
    return await this.apiCall({ route: "/test", method: this.methods.post, options: { testData } })
  }
}

export default new HttpService()
