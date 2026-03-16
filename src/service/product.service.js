import axiosInstance from "../assets/config/axios.config";

class ProductService {
  constructor(api) {
    this.api = api;
  }

  async getProduct() {
    const res = await this.api.get("/products");
    return res.data?.products;
  }

  async getProductById(id) {
    if (!id) {
      throw new Error("Id yo'q!");
    }
    const res = await this.api.get("/products/" + id);
    return res.data;
  }
  async getProducts(page = 1, limit = 9) {
    const res = await this.api.get(`/products?page=${page}&limit=${limit}`);
    return {
      products: res.data?.products || [],
      total: res.data?.total || 0,
      totalPages:
        res.data?.totalPages || Math.ceil((res.data?.total || 0) / limit),
      currentPage: page,
    };
  }
}

export default new ProductService(axiosInstance);
