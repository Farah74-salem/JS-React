// تحديد العناصر من DOM
let passwordInput = document.querySelector('#password');
let strengthBar = document.querySelector('#strengthBar');
let strengthText = document.querySelector('#strengthText');
let togglePassword = document.querySelector('#togglePassword');
let eyeIcon = document.querySelector('#eyeIcon');
let submitBtn = document.querySelector('#submitBtn');

// قائمة الشروط مع التعبير النمطي (RegEx) الخاص بكل شرط
let requirements = {
    length: { el: document.querySelector('#reqLength'), regex: /^.{8,20}$/ },
    upper: { el: document.querySelector('#reqUpper'), regex: /[A-Z]/ },
    lower: { el: document.querySelector('#reqLower'), regex: /[a-z]/ },
    num: { el: document.querySelector('#reqNum'), regex: /[0-9]/ },
    special: { el: document.querySelector('#reqSpecial'), regex: /[^A-Za-z0-9]/ }
};

// إظهار وإخفاء كلمة المرور
togglePassword.onclick = () => {
    let isPassword = passwordInput.getAttribute('type') === 'password';
    passwordInput.setAttribute('type', isPassword ? 'text' : 'password');

    // تغيير أيكون العين
    eyeIcon.className = isPassword ? 'fa-regular fa-eye' : 'fa-regular fa-eye-slash';
};

// فحص الشروط وقوة كلمة المرور عند الكتابة
passwordInput.oninput = () => {
    let value = passwordInput.value;
    let passedCount = 0;

    // فحص كل شرط وتحديث حالة الأيقونات والألوان
    Object.keys(requirements).forEach(key => {
        let item = requirements[key];
        let isPassed = item.regex.test(value);
        let icon = item.el.querySelector('.icon-status');

        if (isPassed) {
            passedCount++;
            item.el.classList.add('passed');
            icon.className = 'fa-solid fa-circle-check icon-status';
        } else {
            item.el.classList.remove('passed');
            icon.className = 'fa-solid fa-circle-xmark icon-status';
        }
    });

    // تحديث شريط التقدم ونص حالة القوة
    updateStrengthIndicator(value, passedCount);
};

// عناصر النموذج والحقول المطلوب التحقق منها
let registerForm = document.querySelector('#registerForm');
let fullNameInput = document.querySelector('#fullName');
let emailInput = document.querySelector('#email');

let fields = [
    { input: fullNameInput, error: document.querySelector('#fullNameError'), message: 'الرجاء إدخال الاسم الكامل' },
    { input: emailInput, error: document.querySelector('#emailError'), message: 'الرجاء إدخال البريد الإلكتروني' },
    { input: passwordInput, error: document.querySelector('#passwordError'), message: 'الرجاء إدخال كلمة المرور' }
];

// إظهار رسالة الخطأ تحت الحقل
function showError(field, message) {
    field.error.textContent = message;
    field.input.classList.add('input-error');
}

// إخفاء رسالة الخطأ
function clearError(field) {
    field.error.textContent = '';
    field.input.classList.remove('input-error');
}

// إزالة رسالة الخطأ عند بدء الكتابة في الحقل
fields.forEach(field => {
    field.input.addEventListener('input', () => clearError(field));
});

// التحقق من الحقول قبل إرسال البيانات
registerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let isValid = true;

    fields.forEach(field => {
        if (field.input.value.trim() === '') {
            showError(field, field.message);
            isValid = false;
        } else {
            clearError(field);
        }
    });

    // التحقق من صيغة البريد الإلكتروني
    let emailField = fields[1];
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (emailInput.value.trim() !== '' && !emailRegex.test(emailInput.value.trim())) {
        showError(emailField, 'الرجاء إدخال بريد إلكتروني صحيح مثل name@example.com');
        isValid = false;
    }

    // التحقق من أن كلمة المرور تحقق جميع الشروط
    let passwordField = fields[2];
    if (passwordInput.value.trim() !== '') {
        let allPassed = Object.values(requirements).every(item => item.regex.test(passwordInput.value));
        if (!allPassed) {
            showError(passwordField, 'كلمة المرور لا تحقق جميع الشروط');
            isValid = false;
        }
    }

    if (isValid) {
        alert('تم تسجيل الحساب بنجاح');
        registerForm.reset();
        passwordInput.dispatchEvent(new Event('input'));
    }
});

// دالة تحديث شريط التقدم ونص الحالة
function updateStrengthIndicator(value, passedCount) {
    // إعادة تعيين الكلاسات
    strengthBar.className = 'progress-bar';

    if (value.length === 0) {
        strengthBar.style.width = '0%';
        strengthText.textContent = 'ضعيفة جداً';
        strengthText.style.color = '#94a3b8';
    } else if (passedCount <= 2) {
        strengthBar.classList.add('weak');
        strengthText.textContent = 'ضعيفة';
        strengthText.style.color = '#ef4444';
    } else if (passedCount <= 4) {
        strengthBar.classList.add('medium');
        strengthText.textContent = 'متوسطة';
        strengthText.style.color = '#f59e0b';
    } else {
        strengthBar.classList.add('strong');
        strengthText.textContent = 'قوية جداً';
        strengthText.style.color = '#10b981';
    }
}