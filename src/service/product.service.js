import axiosInstance from "../assets/config/axios.config";

class ProductService {
    constructor(api){
        this.api = api;
    }

    async getProduct(){
        const res = await this.api.get("/products");
        return res.data?.products;
    }

    async getProductById(id){
        if (!id) {
            throw new Error("Id yo'q!")
        }
        const res = await this.api.get("/products/" + id);
        return res.data;
    }
}

export default new ProductService(axiosInstance);