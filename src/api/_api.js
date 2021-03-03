const API = class {
  constructor() {
    this.url = "http://167.172.186.154"; // TODO: move endpoint to .env file
  }

  async request(
    path,
    { body = null, method = "GET" } = {},
  ) {
    const response = fetch(
      `${this.url}${path}`,
      {
        body: body ? JSON.stringify(body) : null,
        method,
      }
    );

    return response;
  }
}

export default API;
