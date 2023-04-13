const person_active = document.getElementById("person-modal");
const personCabinet_popup = document.getElementById("person-cabinet_popup");
const personCabinet_close = document.getElementById("person-cabinet_popup__content-close")

person_active.addEventListener("click", (event) => opPersonCabinet(event));
function opPersonCabinet(event) {
    body.classList.toggle("body_block")
    personCabinet_popup.classList.toggle("display_none")
}

personCabinet_close.addEventListener("click", (event) => closePersonCabinet(event));
function closePersonCabinet(event) {
    body.classList.toggle("body_block")
    personCabinet_popup.classList.toggle("display_none")
}