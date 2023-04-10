class ProductList {
    constructor() {
        this.container = document.querySelector(".products__gallery");
        this.productsService = new ProductsService();
        this.renderProducts();
    }
    async renderProducts() {
        let productListDomString = "";
        const products = await this.productsService.getProducts();
        products.forEach((product) => {
            productListDomString += this.createProductDomString(product);
        });
        this.container.innerHTML = productListDomString;
        this.addEventListeners();
    }
    createProductDomString(product) {
        return `           
        <div class="product-container">
        <img class="product-photo" src="./img/carousel-spring-collection/${product.image}">
        <div class="product-description">
            <div class="product-text">
                <p class="product-name">${product.title}</p>
            </div>
            <div class="product-button">
            <button type="button" class="btn btn-secondary btn-buy" data-id=${product.id}> ${product.price} Buy</button>
            </div>
        </div>
    </div>`;
    }
    addEventListeners() {
        document.querySelectorAll(".btn-buy").forEach((btn) => {
            btn.addEventListener("click", this.addProductToCart.bind(this));
        });
    }
    async showProductInfo(event) {
        const id = event.target.dataset.id;
        const product = await this.productsService.getProductById(id);
        const modal = document.querySelector("#product-info-modal");
        modal.querySelector(".modal-title").innerHTML = product.title;
        modal.querySelector(".product-image").src = `src="./img/carousel-spring-collection/${product.image}"`;
        modal.querySelector(".product-price").innerHTML = product.price;
        modal.querySelector(".btn-buy").dataset.id = product.id;
    }
    addProductToCart(event) {
        const id = event.target.dataset.id;
        const cart = new Cart();
        cart.addProduct(id);
        window.showAlert("Added to cart!");
    }
}
new ProductList();
