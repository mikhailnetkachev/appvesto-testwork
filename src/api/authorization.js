import API from "./_api";

const AuthorizationAPI = class extends API {
  signIn({ password, username } = {}) {
    return this.request(`/token/request`, {
      body: { password, username },
      method: "POST",
    });
  }
};

export default AuthorizationAPI;
