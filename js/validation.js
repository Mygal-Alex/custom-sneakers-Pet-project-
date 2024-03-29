const regEmail = /^((([0-9A-Za-z]{1}[-0-9A-z\.]{0,30}[0-9A-Za-z]?)|([0-9А-Яа-я]{1}[-0-9А-я\.]{0,30}[0-9А-Яа-я]?))@([-A-Za-z]{1,}\.){1,}[-A-Za-z]{2,})$/;
const regName = /^[А-Яа-яёЁЇїІіЄєҐґ]+$/;
const regPhone = /^[\+]?3?[\s]?8?[\s]?\(?0\d{2}?\)?[\s]?\d{3}[\s|-]?\d{2}[\s|-]?\d{2}$/;
const regPassword = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/;
const regUsername = /^[a-zA-Z][a-zA-Z0-9-]+$/;

const validate = (regex, inp) => {
    return regex.test(inp);
};

const notValid = (inp) => {
    inp.classList.remove('is-valid');
    inp.classList.add('is-invalid');
};

const valid = (inp) => {
    inp.classList.remove('is-invalid');
    inp.classList.add('is-valid');
};

module.exports = { validate, notValid, valid, regEmail, regName, regPhone, regPassword, regUsername };
