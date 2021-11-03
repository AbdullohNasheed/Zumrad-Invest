import axios from "axios";

export let url = "http://192.168.100.230:8080";

export let requests = {
    products: {
        getProducts: () => axios.get(`${url}/products`),
        createProduct: (data) => axios.post(`${url}/products`, data)
    },
    file: {
        upload: (credentials) => axios.post(`${url}/file-upload`, credentials)
    }
}