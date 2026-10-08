function play() {
    let choices = ["حجر", "ورقة", "مقص"];
    let userInput = prompt("اختر: حجر، ورقة، أو مقص");
    if (!userInput) {
        alert("تم إلغاء اللعبة.");
        return;
    }
    let userChoice = userInput.trim();
    if (!choices.includes(userChoice)) {
        alert("إدخال غير صحيح, لازم تكتب (حجر) أو (ورقة) أو (مقص).");
        return;
    }
    let randomIndex = Math.floor(Math.random() * choices.length);
    let computerChoice = choices[randomIndex];

    if (userChoice === computerChoice) {
        alert(`تعادل, أنت اخترت (${userChoice}) والكمبيوتر اختار (${computerChoice}).`);
    } else if (
        (userChoice === "حجر" && computerChoice === "مقص") ||
        (userChoice === "ورقة" && computerChoice === "حجر") ||
        (userChoice === "مقص" && computerChoice === "ورقة")
    ) {
        alert(`!  مبروووووووك فزتتت(${userChoice} تهزم ${computerChoice})`);
    } else {
        alert(` للأسف خسرت (${computerChoice} تهزم ${userChoice})`);
    }
}
play();