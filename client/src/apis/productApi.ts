import axiosClient from "./axiosClient";

class ProductApi {
  getAll() {
    console.log("hic");
    const url: string = "/products";

    return axiosClient.get(url);
  }
}

export default new ProductApi();
