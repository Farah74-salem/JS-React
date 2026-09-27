let form = document.querySelector("form");
let fullName = document.querySelector("#fullName");
let email = document.querySelector("#email");
let password = document.querySelector("#password");

let fullNameError = document.querySelector("#fullNameError");
let emailError = document.querySelector("#emailError");
let passwordError = document.querySelector("#passwordError");

let strengthBar = document.querySelector("#strengthBar");
let strengthText = document.querySelector("#strengthText");

let reqLength = document.querySelector("#reqLength");
let reqCase = document.querySelector("#reqCase");
let reqNum = document.querySelector("#reqNum");
let reqSpecial = document.querySelector("#reqSpecial");

let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
let passedCount = 0;

form.onsubmit = (e) => {

    if (fullName.value.length == 0) {
        e.preventDefault();
        fullName.style.borderColor = "#f00";
        fullNameError.textContent = "الرجاء إدخال الاسم الكامل";
    } else {
        fullName.style.borderColor = "";
        fullNameError.textContent = "";
    }

    if (email.value.length == 0) {
        e.preventDefault();
        email.style.borderColor = "#f00";
        emailError.textContent = "الرجاء إدخال البريد الإلكتروني";
    } else if (!emailPattern.test(email.value)) {
        e.preventDefault();
        email.style.borderColor = "#f00";
        emailError.textContent = "الرجاء إدخال بريد إلكتروني صحيح مثل name@example.com";
    } else {
        email.style.borderColor = "";
        emailError.textContent = "";
    }

    if (password.value.length == 0) {
        e.preventDefault();
        password.style.borderColor = "#f00";
        passwordError.textContent = "الرجاء إدخال كلمة المرور";
    } else if (passedCount < 4) {
        e.preventDefault();
        password.style.borderColor = "#f00";
        passwordError.textContent = "كلمة المرور لا تحقق جميع الشروط";
    } else {
        password.style.borderColor = "";
        passwordError.textContent = "";
    }
};

fullName.onkeyup = function () {
    if (fullName.value.length > 0) {
        fullName.style.borderColor = "";
        fullNameError.textContent = "";
    }
};

email.onkeyup = function () {
    if (email.value.length > 0) {
        email.style.borderColor = "";
        emailError.textContent = "";
    }
};

password.onkeyup = function () {
    let value = password.value;

    if (value.length > 0) {
        password.style.borderColor = "";
        passwordError.textContent = "";
    }

    let hasLength = value.length >= 8 && value.length <= 20;
    let hasCase = /[A-Z]/.test(value) && /[a-z]/.test(value);
    let hasNum = /[0-9]/.test(value);
    let hasSpecial = /[^A-Za-z0-9]/.test(value);

    checkRequirement(reqLength, hasLength);
    checkRequirement(reqCase, hasCase);
    checkRequirement(reqNum, hasNum);
    checkRequirement(reqSpecial, hasSpecial);

    passedCount = 0;
    if (hasLength) passedCount++;
    if (hasCase) passedCount++;
    if (hasNum) passedCount++;
    if (hasSpecial) passedCount++;

    strengthBar.className = "progress-bar";

    if (value.length == 0) {
        strengthText.textContent = "ضعيفة جداً";
        strengthText.style.color = "#94a3b8";
    } else if (passedCount <= 2) {
        strengthBar.classList.add("weak");
        strengthText.textContent = "ضعيفة";
        strengthText.style.color = "#ef4444";
    } else if (passedCount <= 3) {
        strengthBar.classList.add("medium");
        strengthText.textContent = "متوسطة";
        strengthText.style.color = "#f59e0b";
    } else {
        strengthBar.classList.add("strong");
        strengthText.textContent = "قوية جداً";
        strengthText.style.color = "#10b981";
    }
};

function checkRequirement(item, passed) {
    let icon = item.querySelector("i");

    if (passed) {
        item.classList.add("passed");
        icon.className = "fa-solid fa-circle-check icon-status";
    } else {
        item.classList.remove("passed");
        icon.className = "fa-solid fa-circle-xmark icon-status";
    }
}
