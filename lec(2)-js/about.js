let count = 0

const questions = [
    {
        question: "مين أفضل مهندس حاسوب في الوطن العربي؟",
        answer: " المهندس الهكرررر محمد ابو الزيييين"
    },
    {
        question: "مين أفضل مركز في قطاع غزة؟",
        answer: "PCIT"
    },
    {
        question: "مين أفضل إدارة في الكوكب؟",
        answer: "يافا الكفارنة"
    }
];

for (let i = 0; i < questions.length; i++) {

    let userAnswer = prompt(questions[i].question);

    if (userAnswer) {
        userAnswer = userAnswer.trim();

        if (userAnswer.toLowerCase() === questions[i].answer.toLowerCase()) {
            count++
        }
    }
}

alert(`نتيجتك النهائية هي: ${count} من ${questions.length}`)