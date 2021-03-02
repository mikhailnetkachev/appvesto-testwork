const API = class {
  constructor() {
    this.url = "http://167.172.186.154/api"; // TODO: move endpoint to .env file
  }

  async request(
    path,
    { method = "GET" } = {},
  ) {
    try {
      const response = await fetch(`${this.url}${path}`, {
        method,
      });
      const data = await response.json();

      return data;
    } catch (error) {
      console.log(error);
    }

    // const response = fetch(
    //   `${this.url}${path}`,
    //   { method }
    // ).then(response => response.json());

    // return response;
  }
}

export default API;