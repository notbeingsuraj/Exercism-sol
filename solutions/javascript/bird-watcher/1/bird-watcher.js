
export function totalBirdCount(birds) {
  let numberOfBirds = 0;

  for (let index = 0; index < birds.length; index++) {
    numberOfBirds += birds[index];
  }

  return numberOfBirds;
}

export function birdsInWeek(birdsPerDay, week) {
  let totalBirds = 0;
  let start = (week - 1) * 7;
  let end = start + 7;

  for (let index = start; index < end; index++) {
    totalBirds += birdsPerDay[index];
  }

  return totalBirds;
}

export function fixBirdCountLog(birdsPerDay) {
  for (let index = 0; index < birdsPerDay.length; index+=2){
    birdsPerDay[index] = birdsPerDay[index] + 1;
  }
  return birdsPerDay;
}
