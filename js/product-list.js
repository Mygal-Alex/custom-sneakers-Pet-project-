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
        <div class="product-buttons">
            <div class="product-button">
            <button class="btn btn-primary btn-buy" data-id=${product.id}> ${product.price} Buy</button>
            </div>
            <div class="product-ADMIN-button">
            <button class="btn btn-primary btn-manage" data-id=${product.id}>Manage</button>
            </div>
            <div class="product-ADMIN-button">
            <button class="btn btn-danger btn-delete" data-id=${product.id}>Delete</button>
            </div>
        </div>
        </div>
    </div>
    <div id="manage-product-${product.id}" class="manage-product-${product.id} manage-product_popup display_none">
        <div class="manage-product__body">
            <div class="manage-product__body-content">
                <a href="#" class="manage-product__content-close" id="manage-product__content-close-${product.id}" data-id=${product.id}>X</a>
                <div class="manage-product__content-title">product id:${product.id}</div>
                <div class="manage-product__content-img">
                <img class="manage-product-photo" src="./img/carousel-spring-collection/${product.image}">
                </div>
                <div class="manage-product-form-conteiner">
                    <form class="manage-product-form">
                        <input class="manage-inp" id="newtitle-${product.id}" placeholder="title" type="text">
                        <input class="manage-inp" id="newimage-${product.id}" placeholder="image" type="text">
                        <input class="manage-inp" id="newprice-${product.id}" placeholder="price" type="text">
                    </form>
                </div>
                <div class="manage-product__content-btn">
                    <button type="button" class="btn btn-secondary manage-save" id="manage-btn-${product.id}" data-id=${product.id}>Save changes</button>
                </div>
            </div>
        </div>
    </div>

    `;
    }
    addEventListeners() {
        document.querySelectorAll('.btn-buy').forEach(btn => {
            btn.addEventListener('click', this.addProductToCart.bind(this));
        });

        document.querySelector("#shopping-cart").addEventListener("click", this.checCarts(this));

        document.querySelectorAll('.btn-manage').forEach(btn_m => {
            btn_m.addEventListener('click', this.ProductManage.bind(this));
        });

        document.querySelectorAll('.manage-product__content-close').forEach(manage_close => {
            manage_close.addEventListener('click', this.ProductManageClose.bind(this));
        });
        document.querySelectorAll('.manage-save').forEach(save => {
            save.addEventListener('click', this.ProductManageSaveChanges.bind(this));
        });

        document.querySelectorAll('.btn-delete').forEach(delete_ => {
            delete_.addEventListener('click', this.ProductDelete.bind(this));
        });
    }
    checCarts(event) {
        function checCart() {
            if (localStorage.getItem('cart') != null) {
                productsInCart = JSON.parse(localStorage.getItem('cart'))
            }
        }
        checCart()
    }
    addProductToCart(event) {
        function checCart() {
            if (localStorage.getItem('cart') != null) {
                productsInCart = JSON.parse(localStorage.getItem('cart'))
            }
        }
        checCart()
        const id = event.target.dataset.id;
        if (productsInCart[id] !== undefined) {
            productsInCart[id] += 1
        }
        else {
            productsInCart[id] = 1;
        }
        localStorage.setItem("cart", JSON.stringify(productsInCart));
    }
    ProductManage(event) {
        const id = event.target.dataset.id;
        const manage_modal = document.getElementById(`manage-product-${id}`)
        manage_modal.classList.toggle("display_none")
        body.classList.toggle("body_block")
    }
    ProductManageClose(event){
        const id = event.target.dataset.id;
        const manage_modal = document.getElementById(`manage-product-${id}`)
        manage_modal.classList.toggle("display_none")
        body.classList.toggle("body_block")
    }
    ProductManageSaveChanges(event){
        class Canges{
            constructor(){
                this.id = id;
                this.title = title;
                this.image = image;
                this.price = price;
            }
        }
        const id = event.target.dataset.id;
            const title = document.getElementById(`newtitle-${id}`).value
            const image = document.getElementById(`newimage-${id}`).value
            const price = document.getElementById(`newprice-${id}`).value
            const canges = new Canges(id,title,image,price)
            const manage_modal = document.getElementById(`manage-product-${id}`)
            manage_modal.classList.toggle("display_none"),  body.classList.toggle("body_block")
            console.log(canges)
            return canges
            // location.reload()
    }
    ProductDelete(event){
        const id = event.target.dataset.id;
        console.log(`Delete item:${id}`)
        // location.reload()
    }
}
new ProductList();
