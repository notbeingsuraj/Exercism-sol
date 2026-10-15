export function dayRate(hourlyRate) {
  return hourlyRate * 8;
}

export function daysInBudget(budget, hourlyRate) {
  return Math.floor(budget / dayRate(hourlyRate));
}

export function priceWithMonthlyDiscount(hourlyRate, billableDays, discount) {
  const dailyRate = dayRate(hourlyRate);
  const fullMonths = Math.floor(billableDays / 22);
  const remainingDays = billableDays % 22;

  const discountedMonthlyCost = fullMonths * 22 * dailyRate * (1 - discount);
  const remainingCost = remainingDays * dailyRate;

  return Math.ceil(discountedMonthlyCost + remainingCost);
}