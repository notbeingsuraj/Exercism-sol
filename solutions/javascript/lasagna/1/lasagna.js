
export const EXPECTED_MINUTES_IN_OVEN = 40;

export function remainingMinutesInOven(actualMinutesInOven) {
  return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
}

export function preparationTimeInMinutes(numberOfLayers, actualMinutesInOven) {
let preparationTimeInMinutes = numberOfLayers * 2;
  return preparationTimeInMinutes;
}

export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  let totalTimeInMinutes = (numberOfLayers*2) + actualMinutesInOven;
  return totalTimeInMinutes;
}