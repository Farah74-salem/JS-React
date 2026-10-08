function checkOverload(users) {
    let maxUser = 10;
    let maxWeight = 1000;

    let totalWeight = users.reduce((sum, user) => sum + user.weight, 0);

    if (users.length >= maxUser || totalWeight > maxWeight) {
        console.log(`حمولة زائدة (العدد: ${users.length} أشخاص, الوزن الإجمالي: ${totalWeight} كجم)`);
        return true;
    }

    console.log(`الحمولة ممتازززة. (العدد: ${users.length} أشخاص, الوزن الإجمالي: ${totalWeight} كجم)`);
    return false;
}
let passengers = [
    { name: "Iyad", weight: 80 },
    { name: "Yousef", weight: 63 },
    { name: "Farah", weight: 50 },
    { name: "Mohammed", weight: 60 }
];

checkOverload(passengers);