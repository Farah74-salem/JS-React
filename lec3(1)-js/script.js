let productsCount = Number(prompt("أدخل عدد المنتجات التي تريد شراءها:"));

while (!Number.isInteger(productsCount) || productsCount <= 0) {
    productsCount = Number(prompt(" رجااءاا ادخل عدد صحيح أكبر من صفر لعدد المنتجات:"));
}

let grandTotal = 0;
let discountProducts = 0;

for (let i = 1; i <= productsCount; i++) {
    let name = prompt(`أدخل اسم المنتج رقم ${i}:`);
    let price = Number(prompt(`أدخل سعر المنتج (${name}):`));

    while (!Number.isFinite(price) || price < 0) {
        price = Number(prompt(`السعر مش مزبوط. رجاااءاا ادخل سعر صحيح لـ (${name}):`));
    }

    let quantity = Number(prompt(`أدخل الكمية المطلوبة من (${name}):`));

    while (!Number.isInteger(quantity) || quantity <= 0) {
        quantity = Number(prompt(`الكمية لازم تكون عدد صحيح أكبر من صفر. ارجع دخلل (${name}) كمان مرة:`));
    }

    let itemTotal = price * quantity;

    if (quantity > 10) {
        itemTotal = itemTotal * 0.90;
        discountProducts++;
    }

    grandTotal += itemTotal;
}

if (grandTotal > 500 && discountProducts < 2) {
    grandTotal = grandTotal * 0.80;
    console.log(" تم خصم 20% يلاا كيفوووو");
}

console.log(`المجموع النهائي للفاتورة: ${grandTotal}`);