let productsInCart = {};
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
        <div class="product-container card">
        <img class="product-photo" src="./img/carousel-spring-collection/${product.image}">
        <div class="product-description">
            <div class="product-text">
                <p class="product-name">${product.title}</p>
            </div>
            <div class="product-button">
            <button class="btn btn-primary btn-buy" data-id=${product.id}> ${product.price} Buy</button>
            </div>
        </div>
    </div>`;
    }
    addEventListeners() {
        document.querySelectorAll('.btn-buy').forEach(btn => {
            btn.addEventListener('click', this.addProductToCart.bind(this));
            document.querySelector("#shopping-cart").addEventListener("click", this.checCarts(this))
        });
    }
    checCarts(event){
        function checCart(){
            if(localStorage.getItem('cart')!= null){
                productsInCart= JSON.parse(localStorage.getItem('cart'))
            }
        }
        checCart() 
    }
    addProductToCart(event) {
        function checCart(){
            if(localStorage.getItem('cart')!= null){
                productsInCart= JSON.parse(localStorage.getItem('cart'))
            }
        }
        checCart() 
        const id = event.target.dataset.id;
        if(productsInCart[id]!== undefined){
            productsInCart[id]+=1
        }
        else{
            productsInCart[id]=1;   
        }
        localStorage.setItem("cart", JSON.stringify(productsInCart));
    }
}
new ProductList();
