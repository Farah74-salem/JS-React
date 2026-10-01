let users = [
    { name: "اياد", email: "iyad@example.com", type: "user" },
    { name: "فيروز", email: "fairouz@example.com", type: "admin" },
    { name: "يوسف", email: "yousef@example.com", type: "user" },
    { name: "فرح", email: "farah@example.com", type: "admin" },
    { name: "حمودة", email: "mohammed@example.com", type: "user" },
    { name: "حسون", email: "hassan@example.com", type: "user" },
    { name: "عمور", email: "omar@example.com", type: "user" },
    { name: "سارة", email: "sara@example.com", type: "admin" },
];

let userCount = 0;
let adminCount = 0;

users.forEach(user => {
    if (user.type === "admin") {
        adminCount++;
    } else if (user.type === "user") {
        userCount++;
    }
});

console.log(`الي بسمعو الكلام(Users): ${userCount}`);
console.log(`سٌلطة البيت(Admins): ${adminCount}`);