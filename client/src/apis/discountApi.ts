import axiosClient from "./axiosClient";

type DiscountCode = {
  id: string;
  code: string;
  discountAmmount: number;
  timeStart: Date;
  timeEnd: Date;
};

class DisCountCodeApi {
  getAllDiscountCode() {
    const url = "/discountCode";

    return axiosClient.get(url);
  }

  addDiscountCode(discountCode: DiscountCode) {
    const url = "/discountCode";

    return axiosClient.post(url, {
      ...discountCode,
    });
  }

  getDecountCodeById(discountCodeId: string) {
    const url = `/${discountCodeId}`;

    return axiosClient.get(url);
  }

  deleteDiscountCode(discountCodeId: string) {
    const url = `/${discountCodeId}`;

    return axiosClient.delete(url);
  }

  updateCategory(discountCode: DiscountCode) {
    const url = `/${discountCode.id}`;

    const { code, discountAmmount, timeStart, timeEnd } = discountCode;

    return axiosClient.put(url, {
      code,
      discountAmmount,
      timeStart,
      timeEnd,
    });
  }
}

export default new DisCountCodeApi();
