function profitCalculation(dailyHours, hourlyRate) {

    let costRatio = hourlyRate <= 30 ? 0.40 : 0.15;

    let dailyIncome = dailyHours * hourlyRate;

    let daysPerWeek = 6;
    let weeklyIncome = dailyIncome * daysPerWeek;
    // الربح الاسبوعي
    let weeklyCost = weeklyIncome * costRatio;
    let weeklyProfit = weeklyIncome - weeklyCost;
    // الربح الشهري
    let monthlyIncome = weeklyIncome * 4;
    let monthlyCost = monthlyIncome * costRatio;
    let monthlyProfit = monthlyIncome - monthlyCost;

    return {
        hourlyRate,
        dailyHours,
        weeklyProfit,
        monthlyProfit
    };
}

let result = profitCalculation(7, 30);

console.log(` أرباح الأسبوع: ${result.weeklyProfit}`);
console.log(` أرباح الشهر: ${result.monthlyProfit}`);