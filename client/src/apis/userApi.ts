import axiosClient from "./axiosClient";

type UserInfo = {
  firstName: string;
  lastName: string;
  gender: string;
  dob: Date;
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
};

class UserApi {
  create(user: UserInfo) {
    const url: string = "/users";

    return axiosClient.post(url, {
      ...user,
    });
  }
}

export default new UserApi();
