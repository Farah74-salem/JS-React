function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

let input = prompt("أدخل رقماً لحساب المضروب الرياضي:");
let num = Number(input);

if (isNaN(num) || input === "" || input === null) {
    console.log("رجاااااءاا ادخل رقم صحيح.");
} else if (num < 0) {
    console.log("المضروب الرياضي غير معرف للأعداد السلبية.");
} else {
    let result = factorial(num);
    console.log(`المضروب الرياضي للرقم ${num} هو: ${result}`);
}