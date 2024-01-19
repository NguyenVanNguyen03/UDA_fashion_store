import axiosClient from "./axiosClient";

class ProductApi {
  getAll() {
    const url: string = "/products";

    return axiosClient.get(url);
  }

  getProductById(productId: string) {
    const url = `/products/${productId}`;

    return axiosClient.get(url);
  }
}

export default new ProductApi();
