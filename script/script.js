// Elements
const form = document.querySelector(".footer__contact__formContainer__form");
const input = document.querySelector(".footer__contact__formContainer__form__label__input");

// Regex
const emailRegex = /^([\w-?]+)@([\w-?]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/ig;

// Functions
const checkValidity = () => {
    if(!(emailRegex.test(input.value)) === true) {
        input.style.border = "3px solid green";
    } 
    
    if((emailRegex.test(input.value))=== false) {
        input.style.border = "3px solid red";
    }

    return emailRegex.test(input.value);
};

const submitForm = (e) => { 
    if(input.value === "" || input.value === null) {
        e.preventDefault();
    }
    
    if(emailRegex.test(input.value) === false) {
        e.preventDefault();
    } 
};

// Event listeners
input.addEventListener("input", checkValidity)
form.addEventListener("submit", submitForm)