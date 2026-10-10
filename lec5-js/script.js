function longestName(...names) {
    if (names.length > 10) {
        console.log("لقد تجاوزت الحد المسموح بعدد الاشخاص.");
        return;
    }

    if (names.length === 0) {
        return;
    }
    let longest = names[0];

    names.forEach(name => {
        if (name.length >= longest.length) {
            longest = name;
        }
    });
    console.log(`عدد الأسماء : ${names.length}`);
    console.log(`الاسم الأكثر حروفاً هو: ${longest}`);
    return longest;
}

longestName("يوسف", "حمودة", "اياد", "عمور", "حسون", "فرح", "فيروز", "سارة");