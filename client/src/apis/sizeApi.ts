import axiosClient from "./axiosClient";

class SizeApi {
  getAllSize() {
    const url = "/sizes";

    return axiosClient.get(url);
  }

  addSize(sizeName: string) {
    const url = "/sizes";

    return axiosClient.post(url, sizeName);
  }

  getDSizeById(sizeId: string) {
    const url = `/${sizeId}`;

    return axiosClient.get(url);
  }

  deleteSize(sizeId: string) {
    const url = `/${sizeId}`;

    return axiosClient.delete(url);
  }

  updateCategory(sizeName: string) {
    const url = `/sizes`;

    return axiosClient.put(url, {
      sizeName,
    });
  }
}

export default new SizeApi();
