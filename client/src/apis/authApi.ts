import axiosClient from "./axiosClient";

class AuthApi {
  login(email: string, password: string) {
    const url: string = "/auth/login";
    return axiosClient.post(url, {
      email,
      password,
    });
  }
}

export default new AuthApi();
