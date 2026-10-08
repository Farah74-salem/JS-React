function startGaming() {
    let targetNumber = Math.floor(Math.random() * 50) + 1;
    let userGuess = null;

    while (userGuess !== targetNumber) {
        let input = prompt("حزر رقم بين 1 و 50:");
        if (input === null) {
            alert(" خلصت اللعبة.");
            return;
        }

        userGuess = parseInt(input, 10);
        if (isNaN(userGuess)) {
            alert("رجاااءااا أدخل رقم صحيح!");
            continue;
        }
        if (userGuess < targetNumber) {
            alert("أعلى! (الرقم المطلوب أكبر)");
        } else if (userGuess > targetNumber) {
            alert("أقل! (الرقم المطلوب أصغر)");
        } else {
            alert(`مبرووووووك حزرت الرقم وهو: ${targetNumber}`);
        }
    }
}
startGaming();