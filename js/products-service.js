class ProductsService {
    constructor() {
        if (!ProductsService._instance) ProductsService._instance = this;
        return ProductsService._instance;
    }
    
    async getProducts() {
        const response = await fetch(`http://localhost:8080/api/product`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        .then((value)=>{this.products=value.json()})
        return this.products
    }

    async getProductById(id) {
        const response = await fetch(`http://localhost:8080/api/product/${id}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        .then((value)=>{this.products=value.json()})
        return this.products
    }
}


