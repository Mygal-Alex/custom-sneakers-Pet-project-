let reg_em = /^((([0-9A-Za-z]{1}[-0-9A-z\.]{0,30}[0-9A-Za-z]?)|([0-9А-Яа-я]{1}[-0-9А-я\.]{0,30}[0-9А-Яа-я]?))@([-A-Za-z]{1,}\.){1,}[-A-Za-z]{2,})$/,
    reg_lit = /^[А-Яа-яёЁЇїІіЄєҐґ]+$/,
    reg_phone = /^[\+]?3?[\s]?8?[\s]?\(?0\d{2}?\)?[\s]?\d{3}[\s|-]?\d{2}[\s|-]?\d{2}$/,
    reg_pass = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/,
    reg_nic =/^[a-zA-Z][a-zA-Z0-9-]+$/
const personAuthorisation_active = document.getElementById("person-authorisation");
const personAuthorisation_popup = document.getElementById("person-authorisation_popup");
const personAuthorisation_close = document.getElementById("person-authorisation_popup__content-close")
personAuthorisation_active.addEventListener("click", (event) => opPersonAuthorisation(event));
function opPersonAuthorisation(event) {
    personCabinet_popup.classList.toggle("display_none")
    personAuthorisation_popup.classList.toggle("display_none")
}
const nicknameRegistered = document.getElementById("authorisation_nickname")
const passRegistered = document.getElementById("authorisation_pass")
const submitRegistered = document.getElementById("authorisation-submit")
const inputsRegistered = document.getElementsByClassName("inp-authorisation")
let counterRegistered = 0;
nicknameRegistered.addEventListener('keyup', (event) => {
    const message = document.querySelector(".inp-authorisation-message")
    message.classList.add("display_none")
    if (!validate(reg_nic, nicknameRegistered.value)) {
        notValid(nicknameRegistered);
    }
    else {
        valid(nicknameRegistered);
    };
});
passRegistered.addEventListener('keyup', (event) => {
    const message = document.querySelector(".inp-authorisation-message")
    message.classList.add("display_none")
    if (!validate(reg_pass, passRegistered.value)) {
        notValid(passRegistered);
    }
    else {
        valid(passRegistered);
    };
});
async function getUser(nickname) {
    const response = await fetch(`http://localhost:8080/api/user/${nickname}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });
    try {
        const jsonData = await response.json();
        return jsonData
    }
    catch (e) {
        const message = document.querySelector(".inp-authorisation-message")
        message.classList.remove("display_none")
        return "er"
    }
}
submitRegistered.addEventListener('click', (event) => {
    for (let input_ of inputsRegistered) {
        if (input_.classList.contains('is-valid') === true) {
            counterRegistered++
        }
    }
    if (counterRegistered === 3 && getUser(nicknameRegistered.value) !== "er") {
        const pass = passRegistered.value
        const userData = getUser(nicknameRegistered.value)
        if (userData !== null) {
            userData
                .then((value) => {
                    const userDataPassword = value.password_
                    let userDataNickname = value.nickname
                    const userDataADMIN = value.isadmin
                    if (pass === userDataPassword) {
                        if (userDataADMIN === true) {
                            const addProduct = document.querySelector(".add-product-btn-ADMIN")
                            addProduct.classList.remove("display_none")
                            document.querySelectorAll(".ADMIN-button").forEach(ADMIN_button => { ADMIN_button.classList.remove("display_none") });
                            const carouselBloc = document.querySelector(".carousel-spring-collection")
                            carouselBloc.classList.add("display_none")
                        }
                        userAuthorized =  value.isadmin
                        localStorage.setItem("user", JSON.stringify(userAuthorized));
                        nicknameRegistered.value = "";
                        passRegistered.value = "";
                        counterRegistered = 0;
                        const nick = document.querySelector(".person__nickname")
                        nick.innerHTML = `<div class="person__nickname">${userDataNickname}</div>`
                        const personCabinet = document.querySelector(".person-cabinet_popup__content-buttons")
                        personCabinet.innerHTML = ` <button class="btn btn-danger btn-delete btn-ex">Вийти</button>`
                        closePersonAuthorisation()
                    }
                    else {
                        const message = document.querySelector(".inp-authorisation-message")
                        message.classList.remove("display_none")
                    }
                })
        }
    }
    else {
        counterRegistered = 0;
    }
});
personAuthorisation_close.addEventListener("click", (event) => closePersonAuthorisation());
function closePersonAuthorisation() {
    body.classList.toggle("body_block")
    personAuthorisation_popup.classList.toggle("display_none")
}

