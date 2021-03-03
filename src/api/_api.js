const API = class {
  constructor() {
    this.url = "http://167.172.186.154"; // TODO: move endpoint to .env file
  }

  async request(
    path,
    { body = null, method = "GET", token } = {},
  ) {
    const headers = { "Content-Type": "application/json" };
    const referrerPolicy = "origin";

    if (token) headers.Authorization = `Bearer ${token}`;

    const response = fetch(
      `${this.url}${path}`,
      {
        body: body ? JSON.stringify(body) : null,
        headers,
        method,
        referrerPolicy,
      }
    );

    return response;
  }
}

export default API;
