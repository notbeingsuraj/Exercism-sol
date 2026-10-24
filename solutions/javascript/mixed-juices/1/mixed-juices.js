export function timeToMixJuice(juice) {
  switch (juice) {
    case 'Pure Strawberry Joy':
      return 0.5;

    case 'Energizer':
    case 'Green Garden':
      return 1.5;

    case 'Tropical Island':
      return 3;

    case 'All or Nothing':
      return 5;

    default:
      return 2.5;
  }
}
export function limesToCut(wedgesNeeded, limes) {
  let wedges = 0;
  let count = 0;

  for (let lime of limes) {
    if (wedges >= wedgesNeeded) {
      break;
    }

    if (lime === 'small') {
      wedges += 6;
    } else if (lime === 'medium') {
      wedges += 8;
    } else if (lime === 'large') {
      wedges += 10;
    }

    count++;
  }

  return count;
}
export function remainingOrders(timeLeft, orders) {
  for (let i = 0; i < orders.length; i++) {
    if (timeLeft === 0) {
      return orders.slice(i);
    }

    const mixingTime = timeToMixJuice(orders[i]);

    if (mixingTime > timeLeft) {
      return orders.slice(i + 1);
    }

    timeLeft -= mixingTime;
  }

  return [];
}
  
