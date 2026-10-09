let meals = [
    { name: "شاورما", price: 25 },
    { name: "كالزوني", price: 35 },
    { name: "بيتزا", price: 30 },
    { name: "برجر", price: 40 },
    { name: "بطاطا", price: 10 }
];

function showMeals(price) {
    let result = meals.filter(meal => meal.price < price);

    if (result.length === 0) {
        console.log(`ما في أكلات بسعر أقل من ${price}`);
        return;
    }

    console.log(` الأكلات الأقل من ${price} شيكل `);
    result.forEach(meal => console.log(`${meal.name}: ${meal.price} شيكل`));
}

let userPrice = Number(prompt("ادخل السعر:"));
showMeals(userPrice);