const personAuthorisation_active = document.getElementById("person-authorisation");
const personAuthorisation_popup = document.getElementById("person-authorisation_popup");
const personAuthorisation_close = document.getElementById("person-authorisation_popup__content-close")

personAuthorisation_active.addEventListener("click", (event) => opPersonAuthorisation(event));
class RegisteredUser {
    constructor(nickname,password) {
        this.nickname = nickname
        this.password = password
    }
}
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
    if (!validate(reg_nic, nicknameRegistered.value)) {
        notValid(nicknameRegistered);
    }
    else {
        valid(nicknameRegistered);
    };
});
passRegistered.addEventListener('keyup', (event) => {
    if (!validate(reg_pass,passRegistered.value)) {
        notValid(passRegistered);
    }
    else {
        valid(passRegistered);
    };
});
submitRegistered.addEventListener('click', (event) => {
    for(let input_ of inputsRegistered){
        if( input_.classList.contains('is-valid') === true){
            counterRegistered++
        }
    }
    if(counterRegistered===3){
        const result = new RegisteredUser(nicknameRegistered.value,passRegistered.value)
        nicknameRegistered.value="";
        passRegistered.value="";
        counterRegistered=0;
        closePersonAuthorisation()
        return result
    }
    else{
        counterRegistered = 0;
    }
    });
personAuthorisation_close.addEventListener("click", (event) => closePersonAuthorisation());
function closePersonAuthorisation() {
    body.classList.toggle("body_block")
    personAuthorisation_popup.classList.toggle("display_none")
}