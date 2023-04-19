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
async function sendProduct(title, image, price) {
    const response = await fetch("http://localhost:8080/api/product", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "title": title,
            "productsimage": image,
            "price":price
        }),
    });
}
addProductSubmit.addEventListener("click", (event) => {
    const titleCreate = document.querySelector("#new-product-title");
    const imageCreate = document.querySelector("#new-product-image");
    const priceCreate = document.querySelector("#new-product-price");
    sendProduct(titleCreate.value, imageCreate.value, priceCreate.value)
    addProductPopup.classList.toggle("display_none")
    body.classList.toggle("body_block")
});
