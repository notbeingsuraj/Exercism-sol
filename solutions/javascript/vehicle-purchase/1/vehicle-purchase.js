export function needsLicense(kind) {
  return kind === "car" || kind === "truck";
}
export function chooseVehicle(option1, option2) {
  if (option1 < option2) {
    return `${option1} is clearly the better choice.`;
  } else {
    return `${option2} is clearly the better choice.`;
  }
}

export function calculateResellPrice(originalPrice, age) {
  if (age < 3) {
    return 0.8 * originalPrice;
  } else if (age > 10) {
    return 0.5 * originalPrice;
  } else {
    return 0.7 * originalPrice;
  }
}
