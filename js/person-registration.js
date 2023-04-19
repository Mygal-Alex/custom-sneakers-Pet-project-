
$(document).ready(() => { $("#registration-phon").mask("+38(999)999-99-99"); });
const personRegistration_active = document.getElementById("person-registration");
const personRegistration_popup = document.getElementById("person-registration_popup");
const personRegistration_close = document.getElementById("person-registration_popup__content-close")

personRegistration_active.addEventListener("click", (event) => opPersonRegistration(event));
function opPersonRegistration(event) {
    personCabinet_popup.classList.toggle("display_none")
    personRegistration_popup.classList.toggle("display_none")
}

const email = document.getElementById("registration_email")
const nickname = document.getElementById("registration_nickname")
const phon = document.getElementById("registration-phon")
const pass_1 = document.getElementById("registration_pass_1")
const pass_2 = document.getElementById("registration_pass_2")
const name_user = document.getElementById("registration_name")
const surname_user = document.getElementById("registration_surname")
const submit = document.getElementById("registration-submit")
const inputs = document.getElementsByClassName("inp-registration")
let counter = 0;
email.addEventListener('keyup', (event) => {
    if (!validate(reg_em, email.value)) {
        notValid(email);
    }
    else {
        valid(email);
    };
});
nickname.addEventListener('keyup', (event) => {
    if (!validate(reg_nic, nickname.value)) {
        notValid(nickname);
    }
    else {
        valid(nickname);
    };
});
phon.addEventListener('keyup', (event) => {
    if (!validate(reg_phone, phon.value)) {
        notValid(phon);
    }
    else {
        valid(phon);
    };
});
pass_1.addEventListener('keyup', (event) => {
    if (!validate(reg_pass, pass_1.value)) {
        notValid(pass_1);
    }
    else {
        valid(pass_1);
    };
});
pass_2.addEventListener('keyup', (event) => {
    if (!validate(reg_pass, pass_2.value) || pass_2.value !== pass_1.value) {
        notValid(pass_2);
    }
    else {
        valid(pass_2);
    };
});
name_user.addEventListener('keyup', (event) => {
    if (!validate(reg_lit, name_user.value)) {
        notValid(name_user);
    }
    else {
        valid(name_user);
    };
});
surname_user.addEventListener('keyup', (event) => {
    if (!validate(reg_lit, surname_user.value)) {
        notValid(surname_user);
    }
    else {
        valid(surname_user);
    };
});
async function regUser(email, nickname, phon, pass_1, name_user, surname_user) {
    const response = await fetch("http://localhost:8080/api/user", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "email": email,
            "nickname": nickname,
            "phone": phon,
            "password_": pass_1,
            "name_": name_user,
            "surname": surname_user,
            "isadmin": "false"
        }),
    });
}
submit.addEventListener('click', (event) => {
    for (let input of inputs) {
        if (input.classList.contains('is-valid') === true) {
            counter++
        }
    }
    if (counter === 8) {
        regUser(email.value, nickname.value, phon.value, pass_1.value, name_user.value, surname_user.value);
        email.value = "";
        nickname.value = "";
        phon.value = "";
        pass_1.value = "";
        name_user.value = "";
        surname_user.value = "";
        counter = 0;
        closePersonRegistration()
    }
    else {
        counter = 0;
    }
});

personRegistration_close.addEventListener("click", (event) => closePersonRegistration());
function closePersonRegistration() {
    body.classList.toggle("body_block")
    personRegistration_popup.classList.toggle("display_none")
}