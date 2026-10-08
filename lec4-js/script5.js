let restrictedKeywords = [
    "رقم",
    "تواصل",
    "واتساب",
    "تليجرام",
    "خارج",
    "رقمك",
    "نتواصل"
];

function isSpam(userSentence) {
    let sentence = userSentence.toLowerCase();
    let matchedKeywords = restrictedKeywords.filter(word =>
        sentence.includes(word.toLowerCase())
    );
    return matchedKeywords.length >= 2;
}

let userInput = prompt("أدخل النص :");

if (userInput) {
    if (isSpam(userInput)) {
        alert(" هذه الجملة غير مرغوب فيها داخل المنصة");
    } else {
        alert("الجملة مقبولة");
    }
} else {
    alert("  ما في أي نص.");
}