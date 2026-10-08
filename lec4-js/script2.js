function isValidEmail(email) {
    const lowerEmail = email.toLowerCase();
    return !lowerEmail.includes("test");
}
function filterUsers(users) {
    return users.filter(user => isValidEmail(user.email));
}
const usersList = [
    { name: "Farah", email: "farah@gmail.com" },
    { name: "Sara", email: "sara_test@hotmail.com" },
    { name: "Yousef", email: "yousef@test.com" },
    { name: "Omar", email: "omar@outlook.com" }
];

const validUsers = filterUsers(usersList);
console.log(validUsers);
