function discountAccount(purchasing) {
    let discountRate = 0
    if (purchasing > 200) {
        let discountAccount = purchasing * 0.15

        if (discountAccount > 100) {
            discountRate = 0.08
        } else {
            discountRate = 0.15
        }
    } else {
        discountRate = 0
    }

    let discountAmount = purchasing * discountRate
    let finalAmount = purchasing - discountAmount

    console.log(`قيمة المشتريات :${purchasing} شيكل `)
    console.log(`نسبة الخصم :${discountRate * 100}%`)
    console.log(`قيمة الخصم : ${discountAmount} شيكل`)
    console.log(`المبلغ المطلوب بعد الخصم: ${finalAmount} شيكل`)

    return finalAmount
}
// هنااا يا هندسة جرب الرقم الي بدك ايااااااااه
discountAccount(300)
discountAccount(1000)