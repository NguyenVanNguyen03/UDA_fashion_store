import axiosClient from "./axiosClient";
class AuthApi {
  login(email: string, password: string) {
    const url: string = "/auth/login";
    return axiosClient.post(url, {
      email,
      password,
    });
  }

  logout(token: string) {
    const url: string = "/auth/logout";
    return axiosClient.post(
      url,
      {},
      {
        headers: {
          Authorization: token,
        },
      }
    );
  }
}

export default new AuthApi();
