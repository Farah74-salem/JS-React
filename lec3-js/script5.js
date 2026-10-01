let products = [
    { id: 1, name: " 1", price: 100, rating: 4.5 },
    { id: 2, name: " 2", price: 150, rating: 2.5 },
    { id: 3, name: " 3", price: 200, rating: 5 },
    { id: 4, name: " 4", price: 80, rating: 1.8 },
    { id: 5, name: " 5", price: 300, rating: 3.4 },
    { id: 6, name: " 6", price: 120, rating: 4 }
];

products.forEach(product => {
    if (product.rating > 3) {
        let stars = "*".repeat(Math.floor(product.rating));

        console.log(`اسم المنتج: ${product.name}`);
        console.log(`السعر: ${product.price}$`);
        console.log(`التقييم: ${stars}`);
    }
});