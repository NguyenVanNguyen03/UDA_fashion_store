// AuthApi.ts
import axiosClient from "./axiosClient";
import { ApiResponse } from "./ApiResponse"; // Đường dẫn đúng tới ApiResponse

class AuthApi {
  async login(email: string, password: string): Promise<ApiResponse> {
    const url: string = "/auth/login";
    return axiosClient.post(url, {
      email,
      password,
    });
  }

  async logout(token: string): Promise<ApiResponse> {
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


