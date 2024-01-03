
const shopping_active = document.getElementById("shopping-cart");
const shopping_popup = document.getElementById("shopping_popup");
const body = document.body
const shopping_close = document.getElementById("shopping_popup__content-close")

shopping_active.addEventListener("click", (event) => opShopping(event));
function opShopping(event) {
    body.classList.toggle("body_block")
    shopping_popup.classList.toggle("display_none")

    class ProductListCard {
        constructor() {
            this.container = document.querySelector(".shopping_popup__content-products");
            this.productsService = new ProductsService();
            this.renderProducts();
        }
        async renderProducts() {
            let productListDomString = "";
            const productsIndex = [];
            for (let w in productsInCart) {
                productsIndex.push(w);
            }
            const products = []
            for (let index in productsIndex) {
                const product = await this.productsService.getProductById(productsIndex[index]);
                products.push(product)
            }
            products.forEach((product_) => {
                productListDomString += this.createProductDomString(product_);
            });
            this.container.innerHTML = productListDomString;
            this.addEventListeners();
        }
        createProductDomString(product_) {
            const prise = product_.price*productsInCart[product_.id]
            return `           
            <div class="shopping_popup__content-product prodact-id-content${product_.id}">
                <img src="${product_.productsimage} " class="product-photo-card">
                <div class="product-info">
                    <p class="product-name-card">${product_.title}</p>
                </div>
                <div class="product-change-quantity">
                <div class="quantity-container">
                    <div class="quantity prodact-id-quantity${product_.id}">${productsInCart[product_.id]}</div>
                    <a href="#" class="Increase-quantity quantity  prodact-id-${product_.id}"data-id=${product_.id}>+</a>
                    <a href="#" class="Decrease-quantity quantity  prodact-id-${product_.id}"data-id=${product_.id}>-</a>
                </div>
                <div class="prise-cortainer-${product_.id}">
                    <div class="total-prise prise-id-${product_.id}">price:${prise}</div>
                </div>
            </div>
            </div>`;
        }
        addEventListeners() {
            document.querySelectorAll('.Increase-quantity').forEach(IncQuantity => {
                IncQuantity.addEventListener('click', this.IncreaseQuantity.bind(this));
            });
            document.querySelectorAll('.Decrease-quantity').forEach(DecQuantity => {
                DecQuantity.addEventListener('click', this.DecreaseQuantity.bind(this));
            });
        }
        IncreaseQuantity(event) {
            const id = event.target.dataset.id
            const reg = /^[a-zA-z\d]+[:]/
            const quantityShow = document.querySelector(`.prodact-id-quantity${id}`)
            const quantity = Number(quantityShow.textContent)
            const heQuantity = quantity+1
            quantityShow.innerHTML = `<div class="quantity prodact-id-quantity${id}">${heQuantity}</div>`
            const priseShow = document.querySelector(`.prise-id-${id}`)
            const priceOut = document.querySelector(`.prise-cortainer-${id}`)
            const prise =  Number(priseShow.textContent.replace(reg, ""))
            const startPrice =  prise/quantity
            console.log(prise)
            const hePrise = prise+startPrice
            priceOut.innerHTML = `<div class="total-prise prise-id-${id}">price:${hePrise}</div>`
                function checCart(){
                    if(localStorage.getItem('cart')!= null){
                        productsInCart= JSON.parse(localStorage.getItem('cart'))
                    }
                }
                checCart() 
                if(productsInCart[id]!== undefined){
                    productsInCart[id]+=1
                }
                else{
                    productsInCart[id]=1;   
                }
                localStorage.setItem("cart", JSON.stringify(productsInCart));
            }
        DecreaseQuantity(event){
            const id = event.target.dataset.id
            const reg = /^[a-zA-z\d]+[:]/
            const quantityShow = document.querySelector(`.prodact-id-quantity${id}`)
            const quantity = Number(quantityShow.textContent)
            console.log(quantity)
            const heQuantity = quantity-1
            quantityShow.innerHTML = `<div class="quantity prodact-id-quantity${id}">${heQuantity}</div>`
            const priseShow = document.querySelector(`.prise-id-${id}`)
            const priceOut = document.querySelector(`.prise-cortainer-${id}`)
            const prise =  Number(priseShow.textContent.replace(reg, ""))
            const startPrice =  prise/quantity
            console.log(prise)
            const hePrise = prise-startPrice
            priceOut.innerHTML = `<div class="total-prise prise-id-${id}">price:${hePrise}</div>`
                function checCart(){
                    if(localStorage.getItem('cart')!= null){
                        productsInCart= JSON.parse(localStorage.getItem('cart'))
                    }
                }
                checCart() 
                if(productsInCart[id]!== undefined){
                    productsInCart[id]-=1
                    console.log(productsInCart)
                }
                if(productsInCart[id]<1){
                    productsInCart = JSON.parse(localStorage.getItem('cart'))

                    delete productsInCart[id]
                        this.renderProducts();
                }
                localStorage.setItem("cart", JSON.stringify(productsInCart));
        }
        }
    new ProductListCard();

}
shopping_close.addEventListener("click", (event) => closeShopping(event));
function closeShopping(event) {
    body.classList.toggle("body_block")
    shopping_popup.classList.toggle("display_none")
}
module.exports =  { ProductListCard, ProductsService };