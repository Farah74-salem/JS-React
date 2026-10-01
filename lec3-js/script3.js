let input = prompt("أدخل رقماً لحساب المضروب الرياضي:");
let num = Number(input);

if (isNaN(num) || input === "" || input === null) {
    console.log(" رجاااااءاا ادخل رقم صحيح.");
} else if (num < 0) {
    console.log(" المضروب الرياضي غير معرف للأعداد السلبية.");
} else {

    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    console.log(`المضروب الرياضي للرقم ${num} هو: ${result}`);
}