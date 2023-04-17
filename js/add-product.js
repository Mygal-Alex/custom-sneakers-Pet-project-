const addProductActive = document.querySelector(".add-product-btn");
const addProductPopup = document.querySelector("#add-product_popup");
const addProductClose = document.querySelector("#add-product__content-close");
const addProductSubmit = document.querySelector(".add-product_btn-submit");
addProductActive.addEventListener("click", (event) => {
    addProductPopup.classList.toggle("display_none")
    body.classList.toggle("body_block")
});

addProductClose.addEventListener("click", (event) => {
    addProductPopup.classList.toggle("display_none")
    body.classList.toggle("body_block")
});
addProductSubmit.addEventListener("click", (event) => {
        class Create_product{
        constructor(title,image,price){
            this.title = title;
            this.image = image;
            this.price = price;
        }
    }
    const titleCreate = document.querySelector("#new-product-title");
    const imageCreate = document.querySelector("#new-product-image");
    const priceCreate = document.querySelector("#new-product-price");
    const newProdact = new Create_product(titleCreate.value,imageCreate.value,priceCreate.value)
    addProductPopup.classList.toggle("display_none")
    body.classList.toggle("body_block")
    console.log(newProdact)
    return newProdact
});
