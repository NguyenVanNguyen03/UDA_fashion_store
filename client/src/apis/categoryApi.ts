import axiosClient from "./axiosClient";

type Category = {
  id: string;
  categoryName: string;
};

class CategoryApi {
  getAllCategory() {
    const url = "/categories";

    return axiosClient.get(url);
  }

  addCategory(categoryName: string) {
    const url = "/categories";

    return axiosClient.post(url, {
      categoryName,
    });
  }

  getCategoryById(categoryId: string) {
    const url = `/${categoryId}`;

    return axiosClient.get(url);
  }

  deleteCategory(categoryId: string) {
    const url = `/${categoryId}`;

    return axiosClient.delete(url);
  }

  updateCategory(category: Category) {
    const url = `/${category.id}`;

    return axiosClient.put(url, {
      categoryName: category.categoryName,
    });
  }
}

export default new CategoryApi();
